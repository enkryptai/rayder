// Test Runner module

// Create global EnkryptModules namespace if it doesn't exist
window.EnkryptModules = window.EnkryptModules || {};

window.EnkryptModules.TestRunner = class TestRunner {
  constructor() {
    this.isRunning = false;
  }

  // Start red team test
  async startRedTeamTest() {
    if (this.isRunning) {
      throw new Error('Test is already running');
    }

    console.log('🛡️ Enkrypt extension: Starting red team test');

    try {
      // Show loading immediately
      window.EnkryptModules.uiComponents.setStartButtonLoading(true);

      // Validate prerequisites
      const validation = this.validatePrerequisites();
      if (!validation.valid) {
        throw new Error(validation.message);
      }

      // Show validation status
      window.EnkryptModules.uiComponents.showStatus('🔍 Validating configuration...', 'info');

      // Collect test configuration
      const testConfig = this.collectTestConfiguration();
      if (!testConfig.valid) {
        throw new Error(testConfig.message);
      }

      this.isRunning = true;

      // Show launch status
      window.EnkryptModules.uiComponents.showStatus('🚀 Launching red team test...', 'info');

      // First attempt: Try without proxy
      console.log('🛡️ Attempting request without proxy...');
      let apiData = this.buildApiData(
        testConfig.testName,
        testConfig.selectedTests,
        testConfig.additionalInstructions,
        testConfig.customFields,
        false // useProxy = false
      );

      let result = await window.EnkryptModules.apiManager.makeRedTeamRequest(apiData);

      // Check if we got a 500 error and should retry with proxy
      if (!result.success && result.errorType === 'HTTP_ERROR' && result.status >= 500) {
        window.EnkryptModules.uiComponents.showStatus('🔄 Retrying with proxy...', 'info');
        
        // Second attempt: Try with proxy
        apiData = this.buildApiData(
          testConfig.testName,
          testConfig.selectedTests,
          testConfig.additionalInstructions,
          testConfig.customFields,
          true // useProxy = true
        );

        result = await window.EnkryptModules.apiManager.makeRedTeamRequest(apiData);
      }

      // Handle result
      const success = this.handleTestResult(result, testConfig);
      
      if (success) {
        // Remove loading state on success
        window.EnkryptModules.uiComponents.setStartButtonLoading(false);
        return result;
      } else {
        throw new Error(this.formatErrorMessage(result));
      }

    } catch (error) {
      console.error('🚨 Test Runner: Error:', error);
      
      // Remove loading state on error
      window.EnkryptModules.uiComponents.setStartButtonLoading(false);
      
      // Re-throw error to be handled by button click handler
      throw error;
    } finally {
      this.isRunning = false;
    }
  }

  // Validate prerequisites
  validatePrerequisites() {
    if (!window.EnkryptModules.state.isEmailValid()) {
      return {
        valid: false,
        message: '❌ Please validate your email address first.'
      };
    }

    return { valid: true };
  }

  // Collect test configuration from UI
  collectTestConfiguration() {
    const samplePercentage = this.getSamplePercentage();
    const testName = this.getTestName();
    const additionalInstructions = this.getAdditionalInstructions();

    // Get selected standard tests
    const selectedTests = this.getSelectedStandardTests(samplePercentage);

    // Check if custom test is selected
    const customTestData = this.getCustomTestData(samplePercentage);

    if (customTestData.isSelected) {
      if (!customTestData.valid) {
        return {
          valid: false,
          message: customTestData.message
        };
      }

      // Combine custom tests with standard tests instead of clearing them
      // Add advanced tests to selectedTests (this will combine both standard and custom tests)
      Object.assign(selectedTests, customTestData.advancedTests);

      if (Object.keys(selectedTests).length === 0) {
        return {
          valid: false,
          message: '⚠️ Please select at least one test category.'
        };
      }
    }

    if (Object.keys(selectedTests).length === 0) {
      return {
        valid: false,
        message: '⚠️ Please select at least one test category to continue.'
      };
    }

    return {
      valid: true,
      testName,
      selectedTests,
      additionalInstructions,
      customFields: customTestData.isSelected ? customTestData.customFields : null
    };
  }

  // Get sample percentage from comprehensiveness setting
  getSamplePercentage() {
    const comprehensiveness = document.querySelector('input[name="comprehensiveness"]:checked')?.value || 'low';
    
    // Map comprehensiveness to percentage
    const percentageMap = {
      'low': 10,
      'medium': 50,
      'high': 100
    };
    
    return percentageMap[comprehensiveness] || 1;
  }

  // Get test name or generate one
  getTestName() {
    const testNameInput = document.getElementById('test-name-input');
    const customName = testNameInput?.value?.trim();
    
    if (customName) {
      return customName;
    }
    
    // Generate auto name in format: url-redteaming-date-time
    const currentUrl = window.location.hostname || 'unknown-site';
    const cleanUrl = currentUrl.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const time = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
    
    return `${cleanUrl}-redteaming-${date}-${time}`;
  }

  // Get additional instructions
  getAdditionalInstructions() {
    const additionalInstructionsTextarea = document.getElementById('additional-instructions');
    return additionalInstructionsTextarea?.value || '';
  }

  // Get attack methods based on test type
  getAttackMethodsForTestType(testType, isCustomTest = false) {
    // For bias test, keep as is
    if (testType === 'bias_test') {
      return {
        "basic": ["basic"]
      };
    }
    
    // For custom test
    if (isCustomTest) {
      return {
        "basic": ["basic"],
        "advanced": {
          "static": ["encoding"]
        }
      };
    }
    
    // For harmful test
    if (testType === 'harmful_test') {
      return {
        "basic": ["basic"],
        "advanced": {
          "dynamic": ["iterative"]
        }
      };
    }
    
    // For other normal test types (cbrn_test, insecure_code_test, toxicity_test, etc.)
    return {
      "basic": ["basic"],
      "advanced": {
        "static": ["encoding"]
      }
    };
  }

  // Get selected standard tests
  getSelectedStandardTests(samplePercentage) {
    const selectedTests = {};
    
    // Use the new state management system instead of old checkbox IDs
    const selectedTestTypes = window.EnkryptModules.state.getSelectedTestTypes();
    
    selectedTestTypes.forEach(testValue => {
      selectedTests[testValue] = {
        "sample_percentage":
          testValue === "cbrn_test" ? 3
          : testValue === "bias_test" ? 5
          : testValue === "toxicity_test" ? 3
          : testValue === "insecure_code_test" ? 3
          : 10,
        "attack_methods": this.getAttackMethodsForTestType(testValue, false)
      };
    });

    return selectedTests;
  }

  // Get custom test data and validation
  getCustomTestData(samplePercentage) {
    // Use the new state management system for custom tests
    const selectedCustomTestTypes = window.EnkryptModules.state.getSelectedCustomTestTypes();
    const isSelected = selectedCustomTestTypes.length > 0;

    if (!isSelected) {
      return { isSelected: false };
    }

    // Get custom field values (these IDs are still correct)
    const systemDescription = document.getElementById('system-description-textarea')?.value || '';
    const policyDescription = document.getElementById('policy-input')?.value || '';
    const riskCategories = document.getElementById('risk-categories-input')?.value || '';

    // Get dataset configuration values (these IDs are still correct)
    const scenarios = parseInt(document.getElementById('attack-scenarios-input')?.value) || 3;
    const categories = parseInt(document.getElementById('categories-input')?.value) || 3;
    const depth = parseInt(document.getElementById('depth-input')?.value) || 3;

    // Validate required fields
    if (!systemDescription.trim()) {
      return {
        isSelected: true,
        valid: false,
        message: '❌ System Description is required for the custom test.'
      };
    }

    // Always use 100 for custom test sample size
    const customSamplePercentage = 100;

    // Get selected advanced tests using the new state management
    const advancedTests = {};
    let hasAdvancedTests = false;

    selectedCustomTestTypes.forEach(testValue => {
      hasAdvancedTests = true;
      advancedTests[testValue] = {
        "sample_percentage": customSamplePercentage,
        "attack_methods": this.getAttackMethodsForTestType(testValue, true)
      };
    });

    if (!hasAdvancedTests) {
      return {
        isSelected: true,
        valid: false,
        message: '⚠️ Please select at least one advanced test category for the custom test.'
      };
    }

    // Parse risk categories
    let riskCategoriesArray = [];
    if (riskCategories.trim()) {
      riskCategoriesArray = riskCategories.trim()
        .split(/[,;\n]/)
        .map(cat => cat.trim())
        .filter(cat => cat.length > 0);
    }

    return {
      isSelected: true,
      valid: true,
      advancedTests,
      customFields: {
        systemDescription: systemDescription.trim(),
        policyDescription: policyDescription.trim() || null,
        riskCategories: riskCategoriesArray,
        scenarios: scenarios,
        categories: categories,
        depth: depth
      }
    };
  }

  // Build API data structure
  buildApiData(testName, selectedTests, additionalInstructions, customFields, useProxy = false) {
    const apiData = {
      "test_name": testName,
      "redteam_test_configurations": selectedTests,
      "endpoint_configuration": {
        "testing_for": "URL",
        "model_name": window.location.href,
        "certifications": [],
        "model_config": {
          "model_provider": "url",
          "hosting_type": "External",
          "input_modalities": ["text"],
          "output_modalities": ["text"],
          "model_source": "",
          "rate_per_min": 20,
          "system_prompt": additionalInstructions.trim(),
          "use_proxy": useProxy,
          "endpoint": {
            "scheme": "https",
            "host": "api.together.xyz",
            "port": 443,
            "base_path": "/v1"
          },
          "paths": {
            "completions": "/completions",
            "chat": "/chat/completions"
          },
          "auth_data": {
            "header_name": "Authorization",
            "header_prefix": "Bearer",
            "space_after_prefix": true
          },
          "apikeys": ["xxxxx"],
          "metadata": {},
          "default_request_options": {}
        }
      }
    };

    // Add dataset configuration if custom test is selected
    if (customFields) {
      apiData.dataset_configuration = {
        "system_description": customFields.systemDescription,
        "policy_description": customFields.policyDescription,
        "tools": [],
        "scenarios": customFields.scenarios,
        "categories": customFields.categories,
        "depth": customFields.depth,
        "max_prompts": 100,
        "risk_categories": customFields.riskCategories
      };
    }

    return apiData;
  }

  // Handle test result
  handleTestResult(result, testConfig) {
    if (result.success) {      
      // Get the test name for the confirmation modal
      const testName = testConfig.testName || "Task Name here";
      
      // Show success confirmation modal instead of status message
      window.EnkryptModules.uiComponents.showSuccessConfirmationModal(testName);
      
      return true;
    } else {
      console.error('❌ Test Runner: Test failed:', result);
      
      const errorMessage = this.formatErrorMessage(result);
      window.EnkryptModules.uiComponents.showStatus(errorMessage, 'error');
      
      // Log detailed error information for debugging
      this.logDetailedError(result);
      
      return false;
    }
  }

  // Format error message for user
  formatErrorMessage(result) {
    let userMessage = '';
    let technicalDetails = '';
    
    switch (result.errorType) {
      case 'CORS_OR_NETWORK_ERROR':
        userMessage = '🌐 Network Connection Issue';
        technicalDetails = 'Unable to connect to the Enkrypt AI servers. This could be due to network connectivity issues, CORS restrictions, or server temporarily unavailable.';
        break;
        
      case 'HTTP_ERROR':
        if (result.status === 400) {
          userMessage = '📝 Invalid Request Data';
          technicalDetails = 'The request data is invalid. Please check your test configuration.';
        } else if (result.status === 401) {
          userMessage = '🔑 Authentication Failed';
          technicalDetails = 'Your API key is invalid or expired. Please validate it again.';
        } else if (result.status === 403) {
          userMessage = '🚫 Access Denied';
          technicalDetails = 'Your API key does not have permission to access this endpoint.';
        } else if (result.status === 404) {
          userMessage = '🔍 Endpoint Not Found';
          technicalDetails = 'The API endpoint was not found. The service may be temporarily unavailable.';
        } else if (result.status === 409) {
          userMessage = '📛 Test Name Already Exists';
          technicalDetails = 'A test with this name already exists. Please choose a different test name or modify the existing test name.';
        } else if (result.status >= 500) {
          userMessage = '🤖 Unable to Reach Your Chatbot';
          technicalDetails = `We were unable to reach your chatbot (Server Error ${result.status}). Please add additional instructions to access the chatbot and try again.\n\nNote: If the website has bot detection, it may not work properly with automated testing.`;
        } else {
          userMessage = `❌ Request Failed (${result.status})`;
          technicalDetails = `HTTP ${result.status}: ${result.statusText}`;
        }
        break;
        
      case 'TIMEOUT_ERROR':
        userMessage = '⏰ Request Timeout';
        technicalDetails = 'The server took too long to respond. Please try again.';
        break;
        
      case 'PARSE_ERROR':
        userMessage = '📄 Response Parse Error';
        technicalDetails = 'Unable to parse the server response. The server may have returned invalid data.';
        break;
        
      case 'EXTENSION_ERROR':
        userMessage = '🔧 Extension Error';
        technicalDetails = result.error || 'An extension communication error occurred.';
        break;
        
      default:
        userMessage = '🌐 Network Error';
        technicalDetails = result.error || 'An unknown network error occurred.';
        break;
    }
    
    return `${userMessage}\n\n${technicalDetails}`;
  }

  // Log detailed error for debugging
  logDetailedError(result) {
    console.group('🔧 DETAILED ERROR INFORMATION');
    console.error('📊 Error Type:', result.errorType);
    console.error('📊 Status:', result.status);
    console.error('📝 Status Text:', result.statusText);
    console.error('📋 Response Data:', result.data);
    console.error('⏱️ Request Duration:', result.requestDuration + 'ms');
    console.error('🔍 Debug Info:', result.debugInfo);
    console.error('🔍 Original Error:', result.originalError);
    console.error('🔍 Full Response Object:', result);
    console.groupEnd();
  }

  // Stop currently running test
  stopTest() {
    if (this.isRunning) {
      this.isRunning = false;
    }
  }
};

// Singleton instance
window.EnkryptModules.testRunner = new window.EnkryptModules.TestRunner(); 