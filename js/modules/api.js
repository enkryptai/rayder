// API management module

// Create global EnkryptModules namespace if it doesn't exist
window.EnkryptModules = window.EnkryptModules || {};

window.EnkryptModules.ApiManager = class ApiManager {
  constructor() {
    this.timeouts = new Map();
  }

  // Check if extension context is valid
  isExtensionContextValid() {
    try {
      return !!(chrome && chrome.runtime && chrome.runtime.id);
    } catch (error) {
      return false;
    }
  }

  // Handle extension context invalidation
  handleContextInvalidation() {
    console.warn('🚨 Extension context invalidated. Please reload the page.');
    
    // Show user-friendly message
    if (window.EnkryptModules && window.EnkryptModules.uiComponents) {
      window.EnkryptModules.uiComponents.showStatus(
        '⚠️ Extension needs to be reloaded. Please refresh this page.', 
        'error'
      );
    }
    
    return {
      success: false,
      message: 'Extension context invalidated. Please reload the page.'
    };
  }

  // Load email from storage
  async loadStoredEmail() {
    if (!this.isExtensionContextValid()) {
      console.warn('🚨 Extension context invalid during loadStoredEmail');
      return null;
    }

    return new Promise((resolve) => {
      chrome.storage.local.get([window.EnkryptModules.STORAGE_KEYS.email], (result) => {
        if (chrome.runtime.lastError) {
          console.error('🚨 Storage error:', chrome.runtime.lastError);
          resolve(null);
          return;
        }
        
        if (result[window.EnkryptModules.STORAGE_KEYS.email]) {
          window.EnkryptModules.state.setEmail(result[window.EnkryptModules.STORAGE_KEYS.email]);
          resolve(result[window.EnkryptModules.STORAGE_KEYS.email]);
        } else {
          resolve(null);
        }
      });
    });
  }

  // Save email to storage
  saveEmail(email) {
    if (!this.isExtensionContextValid()) {
      console.warn('🚨 Extension context invalid during saveEmail');
      return;
    }

    try {
      chrome.storage.local.set({ [window.EnkryptModules.STORAGE_KEYS.email]: email });
      window.EnkryptModules.state.setEmail(email, true);
    } catch (error) {
      console.error('🚨 Error saving email:', error);
    }
  }

  // Remove email from storage
  removeEmail() {
    if (!this.isExtensionContextValid()) {
      console.warn('🚨 Extension context invalid during removeEmail');
      return;
    }

    try {
      chrome.storage.local.remove([window.EnkryptModules.STORAGE_KEYS.email]);
      window.EnkryptModules.state.setEmail('', false);
    } catch (error) {
      console.error('🚨 Error removing email:', error);
    }
  }

  // Validate email
  async validateEmail(email, showMessages = true) {
    if (!email || email.length < 5) {
      if (showMessages) {
        return {
          success: false,
          message: 'Please enter a valid email address'
        };
      }
      return { success: false };
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email.trim());

    if (isValidEmail) {
      // Valid email - save it
      this.saveEmail(email);
      window.EnkryptModules.state.setEmail(email, true);
      
      return {
        success: true,
        message: 'Email validated successfully'
      };
    } else {
      // Invalid email - remove any stored email
      this.removeEmail();
      window.EnkryptModules.state.setEmail('', false);
      
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }
  }

  // Make API request for starting red team test
  async makeRedTeamRequest(apiData) {
    // Check if extension context is valid
    if (!this.isExtensionContextValid()) {
      console.error('🚨 Extension context invalidated during red team request');
      return {
        success: false,
        errorType: 'EXTENSION_ERROR',
        error: 'Extension context invalidated',
        message: 'Extension context invalidated. Please reload the page.'
      };
    }

    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        resolve({
          success: false,
          errorType: 'TIMEOUT_ERROR',
          error: 'Request timeout',
          message: 'The server took too long to respond'
        });
      }, window.EnkryptModules.API_CONFIG.timeouts.request);

      this.timeouts.set('redteam', timeoutId);

      const requestOptions = {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Enkrypt-Email': window.EnkryptModules.state.getEmail()
        },
        body: JSON.stringify(apiData)
      };

      try {
        chrome.runtime.sendMessage({
          action: "makeApiRequest",
          url: "addTask",
          options: requestOptions
        }, (response) => {
          clearTimeout(timeoutId);
          this.timeouts.delete('redteam');

          if (chrome.runtime.lastError) {
            console.error('🚨 Runtime error during red team request:', chrome.runtime.lastError);
            resolve({
              success: false,
              errorType: 'EXTENSION_ERROR',
              error: chrome.runtime.lastError.message,
              message: 'Extension communication failed'
            });
            return;
          }

          if (response === undefined) {
            resolve({
              success: false,
              errorType: 'EXTENSION_ERROR',
              error: 'Background script not responding',
              message: 'Extension error: Background script not responding'
            });
            return;
          }
          
          resolve(response);
        });
      } catch (error) {
        clearTimeout(timeoutId);
        this.timeouts.delete('redteam');
        console.error('🚨 Exception during red team request:', error);
        resolve({
          success: false,
          errorType: 'EXTENSION_ERROR',
          error: 'Extension context invalidated',
          message: 'Extension context invalidated. Please reload the page.'
        });
      }
    });
  }

  // Clear all timeouts
  clearTimeouts() {
    this.timeouts.forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
    this.timeouts.clear();
  }

  // Check permissions
  async checkPermissions() {
    if (!this.isExtensionContextValid()) {
      console.warn('🚨 Extension context invalid during permission check');
      return null;
    }

    return new Promise((resolve) => {
      try {
        chrome.runtime.sendMessage({
          action: "checkPermissions"
        }, (response) => {
          if (chrome.runtime.lastError) {
            console.error('🚨 Permission check failed:', chrome.runtime.lastError);
            resolve(null);
          } else {
            resolve(response);
          }
        });
      } catch (error) {
        console.error('🚨 Exception during permission check:', error);
        resolve(null);
      }
    });
  }
};

// Singleton instance
window.EnkryptModules.apiManager = new window.EnkryptModules.ApiManager(); 