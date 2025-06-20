// ===== CHANGE ENDPOINTS HERE - USED EVERYWHERE =====
const BASE_URL = 'https://api.enkryptai.com';

const API_ENDPOINTS = {
  baseUrl: BASE_URL,
  endpoints: {
    validate: BASE_URL + '/auth/validate',
    addTask: BASE_URL + '/public/redteam/v2/add-custom-task',
    health: BASE_URL + '/redteam/health',
    modelHealth: BASE_URL + '/redteam/model-health'
  },
  timeouts: {
    validation: 45000,
    request: 45000
  }
};

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "checkConfig") {
    // Check if a configuration exists for the given domain
    const domain = request.domain;
    chrome.storage.local.get('websiteConfigs', function(result) {
      const configs = result.websiteConfigs || {};
      sendResponse({
        hasConfig: configs[domain] !== undefined,
        config: configs[domain]
      });
    });
    return true; // Required to use sendResponse asynchronously
  }
  
  // Add permission check action
  if (request.action === "checkPermissions") {    
    // Check host permissions
    chrome.permissions.contains({
      origins: [API_ENDPOINTS.baseUrl + "/*"]
    }, (hasPermission) => {      
      sendResponse({
        success: true,
        hasDevApiPermission: hasPermission,
        manifestPermissions: chrome.runtime.getManifest().host_permissions
      });
    });
    
    return true;
  }
  
  // Handle API key validation
  if (request.action === "validateApiKey") {
    const apiKey = request.apiKey;
    
    if (!apiKey) {
      sendResponse({
        success: false,
        message: 'Enkrypt AI API key not provided. You can obtain an API key from https://app.enkryptai.com/settings/api'
      });
      return true;
    }
    
    const options = {
      method: 'GET',
      headers: {
        'apikey': apiKey
      }
    };
        
    fetch(API_ENDPOINTS.endpoints.health, options)
      .then(response => {
        if (response.ok) {
          return response.json().then(data => {
            sendResponse({
              success: true,
              message: 'Enkrypt AI API key is valid',
              data: data
            });
          });
        } else {
          sendResponse({
            success: false,
            message: 'Invalid Enkrypt AI API key. Please check and try again. You can obtain a valid API key from https://app.enkryptai.com/settings/api'
          });
        }
      })
      .catch(error => {
        console.error('❌ Background Script: API key validation error:', error);
        sendResponse({
          success: false,
          message: `Error validating Enkrypt AI API key: ${error.message}`
        });
      });
    
    return true; // Required to use sendResponse asynchronously
  }
  
  // Handle general API requests to avoid CORS issues
  if (request.action === "makeApiRequest") {
    let url = request.url;
    const options = request.options || {};
    
    // Resolve endpoint names to full URLs
    if (typeof url === 'string' && !url.startsWith('http')) {
      if (API_ENDPOINTS.endpoints[url]) {
        url = API_ENDPOINTS.endpoints[url];
      } else {
        console.warn(`⚠️ Background Script: Unknown endpoint '${url}', using as-is`);
      }
    }
    
    if (!url) {
      sendResponse({
        success: false,
        error: 'URL not provided',
        errorType: 'CLIENT_ERROR'
      });
      return true;
    }
    
    // Add a timestamp to track request timing
    const requestStartTime = Date.now();
    
    fetch(url, options)
      .then(response => {
        const requestDuration = Date.now() - requestStartTime;
        
        // First extract the status and statusText
        const status = response.status;
        const statusText = response.statusText;
        
        if (response.ok) {
          return response.json()
            .then(data => {
              sendResponse({
                success: true,
                data: data,
                status: status,
                statusText: statusText,
                requestDuration: requestDuration
              });
            })
            .catch(jsonError => {
              // Handle case where response is not JSON
              return response.text()
                .then(text => {
                  sendResponse({
                    success: true,
                    data: text,
                    status: status,
                    statusText: statusText,
                    isText: true,
                    requestDuration: requestDuration
                  });
                })
                .catch(textError => {
                  console.error(`❌ Background Script: Failed to parse response as text:`, textError);
                  sendResponse({
                    success: false,
                    error: `Failed to parse response: ${jsonError.message}`,
                    errorType: 'PARSE_ERROR',
                    status: status,
                    statusText: statusText,
                    requestDuration: requestDuration
                  });
                });
            });
        } else {
          return response.text()
            .then(text => {
              sendResponse({
                success: false,
                error: `HTTP Error ${status}: ${statusText}`,
                errorType: 'HTTP_ERROR',
                data: text,
                status: status,
                statusText: statusText,
                requestDuration: requestDuration
              });
            })
            .catch(textError => {
              console.error(`❌ Background Script: Failed to read error response body:`, textError);
              sendResponse({
                success: false,
                error: `HTTP Error ${status}: ${statusText} (unable to read response body)`,
                errorType: 'HTTP_ERROR',
                status: status,
                statusText: statusText,
                requestDuration: requestDuration
              });
            });
        }
      })
      .catch(error => {
        const requestDuration = Date.now() - requestStartTime;
        console.error('🚨 Background Script: Network/Fetch error:', error);
        console.error('🔍 Background Script: Error type:', error.name);
        console.error('🔍 Background Script: Error message:', error.message);
        console.error('🔍 Background Script: Error stack:', error.stack);
        
        // Determine error type based on the error
        let errorType = 'NETWORK_ERROR';
        let userFriendlyMessage = error.message;
        
        if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
          errorType = 'CORS_OR_NETWORK_ERROR';
          userFriendlyMessage = 'Network error: Unable to connect to the server. This could be due to CORS restrictions, network connectivity issues, or the server being unreachable.';
        } else if (error.name === 'AbortError') {
          errorType = 'TIMEOUT_ERROR';
          userFriendlyMessage = 'Request timeout: The server took too long to respond.';
        } else if (error.message.includes('NetworkError')) {
          errorType = 'NETWORK_ERROR';
          userFriendlyMessage = 'Network error: Unable to reach the server.';
        }
        
        sendResponse({
          success: false,
          error: userFriendlyMessage,
          errorType: errorType,
          originalError: error.message,
          requestDuration: requestDuration,
          // Don't set status for network errors as they don't have HTTP status codes
          debugInfo: {
            url: url,
            method: options.method || 'GET',
            headers: options.headers || {},
            errorName: error.name,
            errorMessage: error.message
          }
        });
      });
    
    return true; // Required to use sendResponse asynchronously
  }
});

// When extension is installed or updated
chrome.runtime.onInstalled.addListener(function(details) {
  console.log('Extension installed or updated:', details.reason);
});

