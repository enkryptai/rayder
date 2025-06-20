// Event handlers module

// Create global EnkryptModules namespace if it doesn't exist
window.EnkryptModules = window.EnkryptModules || {};

window.EnkryptModules.EventHandlers = class EventHandlers {
  constructor() {
    this.samplePercentage = 2;
    this.isApiExpanded = false;
    this.isCustomExpanded = false; // Start collapsed by default
    this.isTestTypesExpanded = true; // Default to expanded
    this.validationTimeout = null;
  }

  // Initialize all event handlers
  initializeAll() {
    
    // Set up all event handlers
    this.setupApiEventHandlers();
    this.setupTestCardEventHandlers();
    this.setupTestTypesEventHandlers();
    this.setupCustomTestEventHandlers();
    this.setupInputEventHandlers();
    // this.setupSliderEventHandlers(); // Removed - no longer using slider
    
    // Check stored API key and update UI
    this.checkStoredEmail();
    
    // Load saved entire test configuration (includes everything)
    this.loadEntireTestConfiguration();
    
    // Initialize custom test section state
    this.initializeCustomTestState();
    
    // Update start button state
    window.EnkryptModules.uiComponents.updateStartButton();
    
  }

  // Initialize custom test section state
  initializeCustomTestState() {
    setTimeout(() => {
      
      const customTestSection = document.getElementById('custom-test-section');
      const content = document.getElementById('custom-test-content');
      const contentInner = document.querySelector('.enkrypt-custom-test-content-inner');
      const header = document.getElementById('custom-test-header');
      const chevron = customTestSection?.querySelector('.enkrypt-custom-test-chevron');
      const icon = customTestSection?.querySelector('.enkrypt-custom-test-icon');
      
      if (customTestSection && content) {
        
        // Set internal state to collapsed
        this.isCustomExpanded = false;
        
        // Ensure section has proper classes
        customTestSection.classList.remove('expanded');
        customTestSection.classList.add('collapsed');
        
        // Set section visibility for collapsed state (header should ALWAYS be visible)
        customTestSection.style.setProperty('display', 'block', 'important');
        customTestSection.style.setProperty('visibility', 'visible', 'important');
        customTestSection.style.setProperty('opacity', '1', 'important');
        customTestSection.style.setProperty('position', 'relative', 'important');
        customTestSection.style.setProperty('overflow', 'hidden', 'important');
        customTestSection.style.setProperty('height', 'auto', 'important');
        customTestSection.style.setProperty('min-height', '60px', 'important');
        
        // Ensure header is always visible
        if (header) {
          header.style.setProperty('display', 'flex', 'important');
          header.style.setProperty('visibility', 'visible', 'important');
          header.style.setProperty('opacity', '1', 'important');
          header.style.setProperty('position', 'relative', 'important');
          header.style.setProperty('z-index', '10', 'important');
          header.style.setProperty('background', 'white', 'important');
          header.style.setProperty('padding', '20px', 'important');
        }
        
        // Set content visibility for collapsed state
        content.style.setProperty('max-height', '0', 'important');
        content.style.setProperty('height', '0', 'important');
        content.style.setProperty('opacity', '0', 'important');
        content.style.setProperty('overflow', 'hidden', 'important');
        content.style.setProperty('visibility', 'hidden', 'important');
        content.style.setProperty('position', 'relative', 'important');
        content.style.setProperty('transition', 'max-height 0.4s ease, opacity 0.3s ease', 'important');
        
        // Set content-inner for collapsed state
        if (contentInner) {
          contentInner.style.setProperty('padding', '0 20px 20px 20px', 'important');
        }
        
        // Set chevron and icon to collapsed state
        if (chevron) chevron.style.transform = 'rotate(0deg)';
        if (icon) icon.style.transform = 'scale(1)';
        
        
        // Verify final state
        setTimeout(() => {
          const rect = customTestSection.getBoundingClientRect();
          const contentRect = content.getBoundingClientRect();
          const headerRect = header ? header.getBoundingClientRect() : null;
          
          
          // Emergency fix if section is still not visible
          if (rect.height === 0 || rect.width === 0) {
            console.warn('🛡️ Custom Test: Section not visible, applying emergency fix');
            customTestSection.style.setProperty('display', 'block', 'important');
            customTestSection.style.setProperty('height', 'auto', 'important');
            customTestSection.style.setProperty('min-height', '80px', 'important');
            customTestSection.style.setProperty('width', '100%', 'important');
            if (header) {
              header.style.setProperty('display', 'flex', 'important');
              header.style.setProperty('min-height', '60px', 'important');
            }
          }
        }, 500);
        
      } else {
        console.warn('🛡️ Custom Test: Elements not found for state initialization');
      }
    }, 200);
  }

  // Set up API key section event handlers
  setupApiEventHandlers() {
    // Check for both old API section and new settings dropdown
    const apiSection = document.querySelector('.enkrypt-api-section');
    const apiHeader = apiSection?.querySelector('.enkrypt-api-header');
    
    // Use settings dropdown elements if available, fallback to old elements
    const apiInput = document.getElementById('settings-enkrypt-api-key') || document.getElementById('enkrypt-api-key');
    const validateBtn = document.getElementById('settings-api-validate-btn') || document.getElementById('api-validate-btn');

    if (apiHeader) {
      apiHeader.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleApiSection();
      });

      // Add hover effects
      apiHeader.addEventListener('mouseenter', () => {
        apiHeader.style.background = 'rgba(255, 127, 0, 0.02) !important';
      });
      
      apiHeader.addEventListener('mouseleave', () => {
        apiHeader.style.background = 'transparent !important';
      });
    }

    if (apiInput) {
      apiInput.addEventListener('input', (e) => {
        this.handleEmailInput(e.target.value.trim());
      });

      apiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.validateEmail(apiInput.value.trim());
        }
      });
    }

    if (validateBtn) {
      validateBtn.addEventListener('click', () => {
        const email = apiInput ? apiInput.value.trim() : '';
        this.validateEmail(email);
      });
    }
  }

  // Toggle API section
  toggleApiSection() {
    this.isApiExpanded = !this.isApiExpanded;
    
    window.EnkryptModules.state.setUIState('apiSectionExpanded', this.isApiExpanded);
    
    const apiSection = document.querySelector('.enkrypt-api-section');
    const apiContent = document.getElementById('api-content');
    const chevron = apiSection?.querySelector('.enkrypt-api-chevron');
    const icon = apiSection?.querySelector('.enkrypt-api-icon');
    
    if (this.isApiExpanded) {
      apiSection?.classList.add('expanded');
      
      if (apiContent) {
        apiContent.style.maxHeight = '400px';
        apiContent.style.opacity = '1';
      }
      
      if (chevron) chevron.style.transform = 'rotate(180deg)';
      if (icon) icon.style.transform = 'rotate(90deg)';
    } else {
      apiSection?.classList.remove('expanded');
      
      if (apiContent) {
        apiContent.style.maxHeight = '0';
        apiContent.style.opacity = '0';
      }
      
      if (chevron) chevron.style.transform = 'rotate(0deg)';
      if (icon) icon.style.transform = 'rotate(0deg)';
    }
  }

  // Handle email input changes
  handleEmailInput(value) {
    
    if (this.validationTimeout) {
      clearTimeout(this.validationTimeout);
    }

    if (value) {
      // Set loading state temporarily
      this.updateApiSectionState('loading', 'Validating...');
      
      // Validate after a short delay to avoid too many requests
      this.validationTimeout = setTimeout(() => {
        this.validateEmail(value);
      }, 500);
    } else {
      // Clear the email if empty
      window.EnkryptModules.state.setEmail('', false);
      this.updateApiSectionState('neutral', 'Not configured');
    }
    
    // Update start button to reflect email state
    window.EnkryptModules.uiComponents.updateStartButton();
  }

  // Validate email
  async validateEmail(email) {
    // Support both old API section and new settings dropdown
    const apiInput = document.getElementById('settings-enkrypt-api-key') || document.getElementById('enkrypt-api-key');
    const validateBtn = document.getElementById('settings-api-validate-btn') || document.getElementById('api-validate-btn');
    
    if (!email || email.length < 5) {
      this.showApiMessage('Please enter a valid email address', 'error');
      this.updateApiSectionState('invalid', 'Invalid email');
      return;
    }

    // Show loading state
    this.updateApiSectionState('validating', 'Validating...');
    if (validateBtn) {
      validateBtn.innerHTML = '<div class="enkrypt-api-spinner" style="width: 16px !important; height: 16px !important; border: 2px solid rgba(255, 255, 255, 0.3) !important; border-top: 2px solid white !important; border-radius: 50% !important; animation: spin 1s linear infinite !important;"></div>';
      validateBtn.disabled = true;
    }

    try {
      const response = await window.EnkryptModules.apiManager.validateEmail(email, true);
      
      if (validateBtn) {
        validateBtn.disabled = false;
      }
      
      if (response.success) {
        // Valid email
        this.updateApiSectionState('valid', '✅ Valid email');
        
        if (apiInput) {
          apiInput.className = apiInput.className.replace(/\s*(valid|invalid)\s*/, '') + ' valid';
        }
        
        if (validateBtn) {
          validateBtn.className = validateBtn.className.replace(/\s*(valid|invalid)\s*/, '') + ' valid';
          validateBtn.innerHTML = '✓';
        }
        
        this.showApiMessage('✅ Email validated successfully!', 'success');
        window.EnkryptModules.uiComponents.updateStartButton();
        
        // Auto-collapse API section if using old layout
        const oldApiSection = document.getElementById('api-content');
        if (oldApiSection && this.isApiExpanded) {
          setTimeout(() => {
            this.toggleApiSection();
          }, 2000);
        }
      } else {
        // Invalid email
        this.updateApiSectionState('invalid', '❌ Invalid email');
        
        if (apiInput) {
          apiInput.className = apiInput.className.replace(/\s*(valid|invalid)\s*/, '') + ' invalid';
        }
        
        if (validateBtn) {
          validateBtn.className = validateBtn.className.replace(/\s*(valid|invalid)\s*/, '') + ' invalid';
          validateBtn.innerHTML = '✗';
        }
        
        this.showApiMessage(response.message || '❌ Email validation failed', 'error');
        window.EnkryptModules.uiComponents.updateStartButton();
      }
    } catch (error) {
      console.error('🚨 Email Validation Error:', error);
      
      if (validateBtn) {
        validateBtn.disabled = false;
        validateBtn.innerHTML = '✗';
      }
      
      this.updateApiSectionState('invalid', '❌ Error');
      this.showApiMessage('❌ Validation error occurred', 'error');
      window.EnkryptModules.uiComponents.updateStartButton();
    }
  }

  // Update API section state
  updateApiSectionState(stateType, statusText) {
    // Support both old API section and new settings dropdown
    const apiSection = document.querySelector('.enkrypt-api-section');
    const apiStatus = document.getElementById('settings-api-status') || document.getElementById('api-status');
    const apiStatusText = document.getElementById('settings-api-status-text') || document.getElementById('api-status-text');
    
    // Update main API section class if exists
    if (apiSection) {
      apiSection.className = `enkrypt-api-section ${stateType}`;
    }
    
    // Update status indicator
    if (apiStatus) {
      const colors = {
        neutral: '#f1f1f1',
        validating: '#ff7f00',
        valid: '#22c55e',
        invalid: '#ef4444'
      };
      apiStatus.style.background = colors[stateType] || colors.neutral;
    }
    
    // Update status text
    if (apiStatusText) {
      apiStatusText.textContent = statusText;
      apiStatusText.className = `enkrypt-api-status-text ${stateType}`;
      
      const textColors = {
        neutral: '#666',
        validating: '#ff7f00',
        valid: '#22c55e',
        invalid: '#ef4444'
      };
      apiStatusText.style.color = textColors[stateType] || textColors.neutral;
    }
    
  }

  // Show API message
  showApiMessage(message, type) {
    // Support both old API section and new settings dropdown
    const apiMessage = document.getElementById('settings-api-message') || document.getElementById('api-message');
    
    if (!apiMessage) {
      console.warn('🛡️ API Message: No message element found');
      return;
    }
    
    const colors = {
      success: { bg: '#22c55e', text: 'white' },
      error: { bg: '#ef4444', text: 'white' },
      warning: { bg: '#f59e0b', text: 'white' },
      info: { bg: '#3b82f6', text: 'white' }
    };
    
    const color = colors[type] || colors.info;
    
    apiMessage.textContent = message;
    apiMessage.style.background = color.bg;
    apiMessage.style.color = color.text;
    apiMessage.style.opacity = '1';
    apiMessage.style.transform = 'translateY(0)';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      if (apiMessage) {
        apiMessage.style.opacity = '0';
        apiMessage.style.transform = 'translateY(-5px)';
      }
    }, 3000);
    
  }

  // Check for stored API key on initialization
  async checkStoredEmail() {
    
    const storedEmail = await window.EnkryptModules.apiManager.loadStoredEmail();
    if (storedEmail) {
      
      // Support both old API section and new settings dropdown
      const apiInput = document.getElementById('settings-enkrypt-api-key') || document.getElementById('enkrypt-api-key');
      
      if (apiInput) {
        apiInput.value = storedEmail;
        // Trigger validation of the stored email
        await this.validateEmail(storedEmail);
      }
    } else {
      this.updateApiSectionState('neutral', 'Not configured');
    }
  }

  // Set up test card event handlers
  setupTestCardEventHandlers() {
    setTimeout(() => {
      
      // Set up individual test type card handlers
      const testTypeCards = document.querySelectorAll('.enkrypt-test-type-card');
      
      testTypeCards.forEach((card, index) => {
        const checkbox = card.querySelector('.enkrypt-test-checkbox');
        const testValue = checkbox?.dataset.testValue;
        
        
        if (checkbox && testValue) {
          // Card click handler
          card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            
            // Don't trigger if clicking on the checkbox directly
            if (e.target === checkbox) {
              return;
            }
            
            // Toggle checkbox state
            const isChecked = checkbox.classList.contains('checked');
            this.toggleTestType(testValue, !isChecked);
          });
          
          // Checkbox click handler
          checkbox.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            
            const isChecked = checkbox.classList.contains('checked');
            this.toggleTestType(testValue, !isChecked);
          });
          
        } else {
          console.warn(`🛡️ ⚠️ Skipping card ${index} - missing checkbox or testValue`, {
            hasCheckbox: !!checkbox,
            hasTestValue: !!testValue,
            card
          });
        }
      });
      
      // Set up filter checkbox handlers
      const filterCheckboxes = document.querySelectorAll('.enkrypt-filter-checkbox');
      
      filterCheckboxes.forEach((filterLabel, index) => {
        const checkbox = filterLabel.querySelector('.enkrypt-gradient-checkbox');
        const filterType = checkbox?.dataset.filter;
        
        if (checkbox && filterType) {
          filterLabel.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            this.handleFilterSelection(filterType);
          });
          
        } else {
          console.warn(`🛡️ ⚠️ Skipping filter ${index} - missing checkbox or filterType`);
        }
      });
      
    }, 100);
  }

  // Toggle individual test type
  toggleTestType(testValue, isChecked) {
    
    const checkbox = document.querySelector(`.enkrypt-test-checkbox[data-test-value="${testValue}"]`);
    const card = checkbox?.closest('.enkrypt-test-type-card');
    
    if (checkbox && card) {
      
      if (isChecked) {
        checkbox.classList.add('checked');
        card.classList.add('selected');
        
        // Show check icon with explicit styling
        const icon = checkbox.querySelector('.enkrypt-checkbox-icon');
        if (icon) {
          icon.style.opacity = '1';
          icon.style.stroke = 'white';
        }
        
        // Apply background to checkbox
        checkbox.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
        checkbox.style.borderColor = '#FF7404';
        
      } else {
        checkbox.classList.remove('checked');
        card.classList.remove('selected');
        
        // Hide check icon
        const icon = checkbox.querySelector('.enkrypt-checkbox-icon');
        if (icon) {
          icon.style.opacity = '0';
        }
        
        // Reset background
        checkbox.style.background = 'white';
        checkbox.style.borderColor = '#E9EAEB';
      }
      
      // Store selected test types FIRST
      this.updateSelectedTestTypes();
      
      // Then update start button state
      window.EnkryptModules.uiComponents.updateStartButton();
    } else {
      console.error(`🛡️ Could not find checkbox or card for ${testValue}`, { checkbox, card });
    }
  }

  // Handle filter selection (Select All, NIST AI 600, etc.)
  handleFilterSelection(filterType) {
    
    const filterCheckbox = document.querySelector(`.enkrypt-gradient-checkbox[data-filter="${filterType}"]`);
    const isFilterChecked = filterCheckbox?.classList.contains('checked');
    
    
    // Toggle filter checkbox visual state
    if (filterCheckbox) {
      if (isFilterChecked) {
        filterCheckbox.classList.remove('checked');
        const icon = filterCheckbox.querySelector('.enkrypt-checkbox-icon');
        if (icon) icon.style.opacity = '0';
        filterCheckbox.style.background = 'white';
        filterCheckbox.style.borderColor = '#E9EAEB';
      } else {
        filterCheckbox.classList.add('checked');
        const icon = filterCheckbox.querySelector('.enkrypt-checkbox-icon');
        if (icon) {
          icon.style.opacity = '1';
          icon.style.stroke = 'white';
        }
        filterCheckbox.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
        filterCheckbox.style.borderColor = '#FF7404';
      }
      
    }
    
    // Apply filter logic
    if (filterType === 'select-all') {
      this.handleSelectAllFilter(!isFilterChecked);
    } else {
      this.handleStandardFilter(filterType, !isFilterChecked);
    }
  }

  // Handle "Select All" filter
  handleSelectAllFilter(selectAll) {
    
    const testTypeCards = document.querySelectorAll('.enkrypt-test-type-card');
    
    testTypeCards.forEach((card, index) => {
      const checkbox = card.querySelector('.enkrypt-test-checkbox');
      const testValue = checkbox?.dataset.testValue;
      
      
      if (checkbox && testValue) {
        this.toggleTestType(testValue, selectAll);
      }
    });
  }

  // Handle standard filters (NIST AI 600, OWASP Top 10, EU AI Act)
  handleStandardFilter(filterType, isChecked) {
    const tagMap = {
      'nist-ai-600': 'NIST AI 600',
      'owasp-top-10': 'OWASP Top 10', 
      'eu-ai-act': 'EU AI ACT'
    };
    
    const targetTag = tagMap[filterType];
    
    if (!targetTag) {
      console.warn(`🛡️ Unknown filter type: ${filterType}`);
      return;
    }
    
    const testTypeCards = document.querySelectorAll('.enkrypt-test-type-card');
    let matchedCards = 0;
    
    testTypeCards.forEach((card, index) => {
      const tags = card.dataset.tags;
      const checkbox = card.querySelector('.enkrypt-test-checkbox');
      const testValue = checkbox?.dataset.testValue;
      
      
      if (tags && tags.includes(targetTag) && checkbox && testValue) {
        this.toggleTestType(testValue, isChecked);
        matchedCards++;
      }
    });
    
  }

  // Update selected test types in state
  updateSelectedTestTypes() {
    const selectedTests = [];
    const checkedBoxes = document.querySelectorAll('.enkrypt-test-checkbox.checked');
    
    
    checkedBoxes.forEach((checkbox, index) => {
      const testValue = checkbox.dataset.testValue;
      if (testValue) {
        selectedTests.push(testValue);
      }
    });
    
    // Store in state
    window.EnkryptModules.state.setSelectedTestTypes(selectedTests);
    
  }

  // Set up test types section event handlers
  setupTestTypesEventHandlers() {
    setTimeout(() => {
      const testTypesHeader = document.getElementById('test-types-header');
      
      
      // Header click to expand/collapse
      if (testTypesHeader) {
        testTypesHeader.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleTestTypes();
        });
      } else {
        console.warn('🎯 Test Types: Header not found');
      }
    }, 100);
  }

  // Toggle test types section
  toggleTestTypes() {    
    const testTypesSection = document.querySelector('.enkrypt-test-types-section');
    const content = document.getElementById('test-types-content');
    const chevron = testTypesSection?.querySelector('.enkrypt-test-types-chevron');
    const icon = testTypesSection?.querySelector('.enkrypt-test-types-icon');
    
    if (!testTypesSection || !content) {
      console.error('🎯 Test Types: Required elements not found');
      return;
    }
    
    // Toggle the state
    this.isTestTypesExpanded = !this.isTestTypesExpanded;
    
    if (this.isTestTypesExpanded) {
      testTypesSection.classList.remove('collapsed');
      testTypesSection.classList.add('expanded');
      
      // Set content visibility for expanded state
      content.style.setProperty('max-height', '1000px', 'important');
      content.style.setProperty('opacity', '1', 'important');
      content.style.setProperty('visibility', 'visible', 'important');
      content.style.setProperty('overflow', 'visible', 'important');
      
      if (chevron) chevron.style.transform = 'rotate(180deg)';
      if (icon) icon.style.transform = 'scale(1.1)';
      
    } else {
      testTypesSection.classList.remove('expanded');
      testTypesSection.classList.add('collapsed');
      
      // Set content visibility for collapsed state
      content.style.setProperty('max-height', '0', 'important');
      content.style.setProperty('opacity', '0', 'important');
      content.style.setProperty('visibility', 'hidden', 'important');
      content.style.setProperty('overflow', 'hidden', 'important');
      
      if (chevron) chevron.style.transform = 'rotate(0deg)';
      if (icon) icon.style.transform = 'scale(1)';
    }
    
    // Log final state for debugging
    setTimeout(() => {
      const finalRect = content.getBoundingClientRect();
      const finalOpacity = getComputedStyle(content).opacity;
    }, 500);
  }

  // Set up custom test event handlers
  setupCustomTestEventHandlers() {
    setTimeout(() => {
      const customHeader = document.getElementById('custom-test-header');
      const advancedToggle = document.getElementById('advanced-settings-toggle');
            
      // Header click to expand/collapse
      if (customHeader) {
        customHeader.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleCustomTest();
        });
      }
      
      // Advanced settings toggle
      if (advancedToggle) {
        advancedToggle.addEventListener('change', (e) => {
          e.stopPropagation();
          this.toggleAdvancedSettings(e.target.checked);
        });
      }
      
      // Set up custom test type selection handlers
      this.setupCustomTestTypeHandlers();
      
      // Set up input validation
      this.setupCustomTestInputValidation();
      
    }, 100);
  }

  // Toggle custom tests enabled/disabled
  toggleCustomTestsEnabled(enabled) {    
    // Store the state
    window.EnkryptModules.state.setUIState('customTestsEnabled', enabled);
    
    // Update start button state
    window.EnkryptModules.uiComponents.updateStartButton();
  }

  // Toggle advanced settings visibility
  toggleAdvancedSettings(show) {    
    const advancedToggle = document.getElementById('advanced-settings-toggle');
    const advancedContainer = document.getElementById('advanced-settings-container');
    
    // Update toggle visual state
    if (advancedToggle) {
      const toggleSlider = advancedToggle.nextElementSibling;
      const toggleButton = toggleSlider?.querySelector('span:last-child');
      
      if (show) {
        if (toggleButton) {
          toggleButton.style.transform = 'translateX(24px)';
        }
        if (toggleSlider) {
          toggleSlider.style.background = 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)';
        }
      } else {
        if (toggleButton) {
          toggleButton.style.transform = 'translateX(0px)';
        }
        if (toggleSlider) {
          toggleSlider.style.background = '#E5E7EB';
        }
      }
    }
    
    // Show/hide advanced settings container
    if (advancedContainer) {
      if (show) {
        advancedContainer.style.display = 'block';
      } else {
        advancedContainer.style.display = 'none';
      }
    }
  }

  // Set up custom test type selection handlers
  setupCustomTestTypeHandlers() {
    const customTestTypes = document.querySelectorAll('.enkrypt-custom-test-type');
    
    customTestTypes.forEach((testType, index) => {
      const checkbox = testType.querySelector('.enkrypt-custom-test-checkbox');
      const testValue = testType.dataset.testValue;
      
      if (checkbox && testValue) {
        // Test type card click handler
        testType.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
                    
          // Don't trigger if clicking on the checkbox directly
          if (e.target === checkbox) {
            return;
          }
          
          // Toggle checkbox state
          const isChecked = checkbox.classList.contains('checked');
          this.toggleCustomTestType(testValue, !isChecked);
        });
        
        // Checkbox click handler
        checkbox.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
                    
          const isChecked = checkbox.classList.contains('checked');
          this.toggleCustomTestType(testValue, !isChecked);
        });
        
      } else {
        console.warn(`🎯 ⚠️ Skipping custom test type ${index} - missing checkbox or testValue`, {
          hasCheckbox: !!checkbox,
          hasTestValue: !!testValue,
          testType
        });
      }
    });
  }

  // Toggle individual custom test type
  toggleCustomTestType(testValue, isChecked) {    
    const customTestType = document.querySelector(`.enkrypt-custom-test-type[data-test-value="${testValue}"]`);
    const checkbox = customTestType?.querySelector('.enkrypt-custom-test-checkbox');
    
    if (checkbox && customTestType) {      
      if (isChecked) {
        checkbox.classList.add('checked');
        customTestType.classList.add('selected');
        
        // Show check icon with explicit styling
        const icon = checkbox.querySelector('.enkrypt-checkbox-icon');
        if (icon) {
          icon.style.opacity = '1';
          icon.style.stroke = 'white';
        }
        
        // Apply background to checkbox
        checkbox.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
        checkbox.style.borderColor = '#FF7404';
        
        // Apply selected styling to card
        customTestType.style.borderColor = '#FF7404';
        customTestType.style.background = 'rgba(255, 116, 4, 0.05)';
        
      } else {
        checkbox.classList.remove('checked');
        customTestType.classList.remove('selected');
        
        // Hide check icon
        const icon = checkbox.querySelector('.enkrypt-checkbox-icon');
        if (icon) {
          icon.style.opacity = '0';
        }
        
        // Reset background
        checkbox.style.background = 'white';
        checkbox.style.borderColor = '#E9EAEB';
        
        // Reset card styling
        customTestType.style.borderColor = '#E9EAEB';
        customTestType.style.background = 'white';
      }

      // Store selected custom test types FIRST
      this.updateSelectedCustomTestTypes();
      
      // Then update start button state
      window.EnkryptModules.uiComponents.updateStartButton();
    } else {
      console.error(`🎯 Could not find custom test checkbox or card for ${testValue}`, { checkbox, customTestType });
    }
  }

  // Update selected custom test types in state
  updateSelectedCustomTestTypes() {
    const selectedCustomTests = [];
    const checkedBoxes = document.querySelectorAll('.enkrypt-custom-test-checkbox.checked');
    
    checkedBoxes.forEach(checkbox => {
      const testType = checkbox.closest('.enkrypt-custom-test-type');
      const testValue = testType?.dataset.testValue;
      if (testValue) {
        selectedCustomTests.push(testValue);
      }
    });
    
    // Store in state (you may need to add this to your state module)
    window.EnkryptModules.state.setSelectedCustomTestTypes(selectedCustomTests);
    
  }

  // Toggle custom test section
  toggleCustomTest() {    
    // Check actual DOM state to sync with internal state
    const customTestSection = document.getElementById('custom-test-section');
    const content = document.getElementById('custom-test-content');
    const chevron = customTestSection?.querySelector('.enkrypt-custom-test-chevron');
    const icon = customTestSection?.querySelector('.enkrypt-custom-test-icon');
    
    if (!customTestSection || !content) {
      console.error('🛡️ Custom Test: Required elements not found');
      return;
    }
    
    // Determine current visual state from DOM more accurately
    const hasExpandedClass = customTestSection.classList.contains('expanded');
    const contentRect = content.getBoundingClientRect();
    const contentHeight = contentRect.height;
    const contentMaxHeight = getComputedStyle(content).maxHeight;
    const contentOpacity = getComputedStyle(content).opacity;
    const isVisuallyExpanded = hasExpandedClass && contentHeight > 50 && contentOpacity > 0.5;
    
    // If this is the first interaction and visual state shows expanded but internal state is wrong, fix it
    if (isVisuallyExpanded && !this.isCustomExpanded) {
      this.isCustomExpanded = true;
      window.EnkryptModules.state.setUIState('customTestExpanded', true);
    }
    
    // Now toggle to the opposite state
    this.isCustomExpanded = !this.isCustomExpanded;
    
    window.EnkryptModules.state.setUIState('customTestExpanded', this.isCustomExpanded);
    
    if (this.isCustomExpanded) {
      customTestSection.classList.remove('collapsed');
      customTestSection.classList.add('expanded');
      
      // Set content visibility for expanded state
      content.style.setProperty('display', 'block', 'important');
      content.style.setProperty('max-height', 'none', 'important');
      content.style.setProperty('height', 'auto', 'important');
      content.style.setProperty('opacity', '1', 'important');
      content.style.setProperty('overflow', 'visible', 'important');
      content.style.setProperty('visibility', 'visible', 'important');
      content.style.setProperty('transition', 'max-height 0.4s ease, opacity 0.3s ease', 'important');
      
      // Update section overflow to visible to allow content to display properly
      customTestSection.style.setProperty('overflow', 'visible', 'important');
      customTestSection.style.setProperty('height', 'auto', 'important');
      customTestSection.style.setProperty('min-height', 'fit-content', 'important');
      
      if (chevron) chevron.style.transform = 'rotate(180deg)';
      if (icon) icon.style.transform = 'scale(1.1)';
      
      // Ensure content inner is also visible
      const contentInner = content.querySelector('.enkrypt-custom-test-content-inner');
      if (contentInner) {
        contentInner.style.setProperty('display', 'block', 'important');
        contentInner.style.setProperty('visibility', 'visible', 'important');
        contentInner.style.setProperty('opacity', '1', 'important');
        contentInner.style.setProperty('min-height', 'fit-content', 'important');
      }
      
    } else {
      customTestSection.classList.remove('expanded');
      customTestSection.classList.add('collapsed');
      
      // Set content visibility for collapsed state
      content.style.setProperty('max-height', '0', 'important');
      content.style.setProperty('height', '0', 'important');
      content.style.setProperty('opacity', '0', 'important');
      content.style.setProperty('overflow', 'hidden', 'important');
      content.style.setProperty('visibility', 'hidden', 'important');
      content.style.setProperty('transition', 'max-height 0.4s ease, opacity 0.3s ease', 'important');
      
      // Update section overflow to hidden for collapsed state
      customTestSection.style.setProperty('overflow', 'hidden', 'important');
      customTestSection.style.setProperty('height', 'auto', 'important');
      
      if (chevron) chevron.style.transform = 'rotate(0deg)';
      if (icon) icon.style.transform = 'scale(1)';
    }
    
    // Log final state for debugging
    setTimeout(() => {
      const finalRect = content.getBoundingClientRect();
      const finalOpacity = getComputedStyle(content).opacity;
    }, 500);
  }

  // Set up input validation for custom test
  setupCustomTestInputValidation() {
    const systemDescTextarea = document.getElementById('system-description-textarea');
    const attackScenariosInput = document.getElementById('attack-scenarios-input');
    const categoriesInput = document.getElementById('categories-input');
    const depthInput = document.getElementById('depth-input');
    const policyTextarea = document.getElementById('policy-input');
    
    // System description validation (required field)
    if (systemDescTextarea) {
      systemDescTextarea.addEventListener('blur', () => {
        this.validateSystemDescription();
      });
      
      systemDescTextarea.addEventListener('input', () => {
        // Hide error on input
        const errorEl = document.getElementById('system-description-error');
        if (errorEl) errorEl.style.display = 'none';
      });
    }
    
    // Add focus handlers for textareas
    [systemDescTextarea, policyTextarea].forEach(textarea => {
      if (textarea) {
        this.setupInputFocusHandlers(textarea);
      }
    });
    
    // Number input validation
    [attackScenariosInput, categoriesInput, depthInput].forEach(input => {
      if (input) {
        input.addEventListener('input', (e) => {
          this.validateNumberInput(e.target);
        });
        
        input.addEventListener('focus', () => {
          this.setupInputFocusHandlers(input);
        });
      }
    });
  }

  // Validate system description
  validateSystemDescription() {
    const textarea = document.getElementById('system-description-textarea');
    const errorEl = document.getElementById('system-description-error');
    
    if (!textarea || !errorEl) return true;
    
    const value = textarea.value.trim();
    const isValid = value.length > 0;
    
    if (!isValid) {
      errorEl.style.display = 'block';
      textarea.style.borderColor = '#EF4444';
    } else {
      errorEl.style.display = 'none';
      textarea.style.borderColor = '#E9EAEB';
    }
    
    return isValid;
  }

  // Validate number inputs
  validateNumberInput(input) {
    const value = parseInt(input.value);
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    
    if (isNaN(value) || value < min) {
      input.value = min;
    } else if (value > max) {
      input.value = max;
    }
  }

  // Save custom test configuration
  saveCustomTestConfiguration() {    
    // Validate required fields
    const isSystemDescValid = this.validateSystemDescription();
    
    if (!isSystemDescValid) {
      this.showCustomTestStatus('Please fill in the required system description', 'error');
      return;
    }
    
    // Collect form data
    const config = {
      attackScenarios: document.getElementById('attack-scenarios-input')?.value || '1',
      riskCategories: document.getElementById('categories-input')?.value || '1',
      attackGoals: document.getElementById('depth-input')?.value || '1',
      riskCategoriesText: document.getElementById('risk-categories-input')?.value || '',
      systemDescription: document.getElementById('system-description-textarea')?.value || '',
      policyDescription: document.getElementById('policy-input')?.value || '',
      selectedCustomTestTypes: window.EnkryptModules.state.getSelectedCustomTestTypes(),
      isAdvancedSettingsEnabled: document.getElementById('advanced-settings-toggle')?.checked || false
    };
        
    try {
      // Save to localStorage
      localStorage.setItem('enkrypt_custom_test_config', JSON.stringify(config));
      
      // Update state
      window.EnkryptModules.state.setCustomTestConfig(config);
      
      this.showCustomTestStatus('✅ Custom test configuration saved successfully!', 'success');      
    } catch (error) {
      console.error('🎯 Custom Test: ❌ Failed to save configuration:', error);
      this.showCustomTestStatus('❌ Failed to save configuration', 'error');
    }
  }

  // Save entire test configuration (including everything)
  saveEntireTestConfiguration() {    
    try {
      // Collect all test data
      const config = {
        // Test name
        testName: document.getElementById('test-name-input')?.value || '',
        
        // Additional instructions  
        additionalInstructions: document.getElementById('additional-instructions')?.value || '',
        
        // Comprehensiveness
        comprehensiveness: document.querySelector('input[name="comprehensiveness"]:checked')?.value || 'low',
        
        // Regular test types
        selectedTestTypes: window.EnkryptModules.state.getSelectedTestTypes(),
        
        // Custom test configuration
        customTestConfig: {
          attackScenarios: document.getElementById('attack-scenarios-input')?.value || '1',
          riskCategories: document.getElementById('categories-input')?.value || '1', 
          attackGoals: document.getElementById('depth-input')?.value || '1',
          riskCategoriesText: document.getElementById('risk-categories-input')?.value || '',
          systemDescription: document.getElementById('system-description-textarea')?.value || '',
          policyDescription: document.getElementById('policy-input')?.value || '',
          selectedCustomTestTypes: window.EnkryptModules.state.getSelectedCustomTestTypes(),
          isAdvancedSettingsEnabled: document.getElementById('advanced-settings-toggle')?.checked || false
        },
        
        // Timestamp
        savedAt: new Date().toISOString()
      };
            
      // Save to localStorage
      localStorage.setItem('enkrypt_full_test_config', JSON.stringify(config));
      
      // Show success message
      window.EnkryptModules.uiComponents.showStatus('✅ Test configuration saved successfully!', 'success');      
      return true;
      
    } catch (error) {
      console.error('💾 ❌ Failed to save test configuration:', error);
      window.EnkryptModules.uiComponents.showStatus('❌ Failed to save test configuration', 'error');
      return false;
    }
  }

  // Load entire test configuration
  loadEntireTestConfiguration() {    
    try {
      const savedConfig = localStorage.getItem('enkrypt_full_test_config');
      if (!savedConfig) {
        return false;
      }
      
      const config = JSON.parse(savedConfig);
      
      // Restore test name
      const testNameInput = document.getElementById('test-name-input');
      if (testNameInput && config.testName) {
        testNameInput.value = config.testName;
      }
      
      // Restore additional instructions
      const additionalInstructions = document.getElementById('additional-instructions');
      if (additionalInstructions && config.additionalInstructions) {
        additionalInstructions.value = config.additionalInstructions;
      }
      
      // Restore comprehensiveness
      if (config.comprehensiveness) {
        const comprehensivenessRadio = document.querySelector(`input[name="comprehensiveness"][value="${config.comprehensiveness}"]`);
        if (comprehensivenessRadio) {
          comprehensivenessRadio.checked = true;
        }
      }
      
      // Restore regular test types
      if (config.selectedTestTypes && config.selectedTestTypes.length > 0) {
        window.EnkryptModules.state.setSelectedTestTypes(config.selectedTestTypes);
        config.selectedTestTypes.forEach(testValue => {
          const testCard = document.querySelector(`.enkrypt-test-type-card[data-test-key] .enkrypt-test-checkbox[data-test-value="${testValue}"]`);
          if (testCard) {
            testCard.classList.add('checked');
            const card = testCard.closest('.enkrypt-test-type-card');
            if (card) card.classList.add('selected');
            
            const icon = testCard.querySelector('.enkrypt-checkbox-icon');
            if (icon) icon.style.opacity = '1';
            
            testCard.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
            testCard.style.borderColor = '#FF7404';
          }
        });
      }
      
      // Restore custom test configuration
      if (config.customTestConfig) {
        const customConfig = config.customTestConfig;
        
        // Restore custom test input values
        const attackScenariosInput = document.getElementById('attack-scenarios-input');
        if (attackScenariosInput && customConfig.attackScenarios) {
          attackScenariosInput.value = customConfig.attackScenarios;
        }
        
        const riskCategoriesInput = document.getElementById('categories-input');
        if (riskCategoriesInput && customConfig.riskCategories) {
          riskCategoriesInput.value = customConfig.riskCategories;
        }
        
        const attackGoalsInput = document.getElementById('depth-input');
        if (attackGoalsInput && customConfig.attackGoals) {
          attackGoalsInput.value = customConfig.attackGoals;
        }
        
        const riskCategoriesTextInput = document.getElementById('risk-categories-input');
        if (riskCategoriesTextInput && customConfig.riskCategoriesText) {
          riskCategoriesTextInput.value = customConfig.riskCategoriesText;
        }
        
        const systemDescriptionTextarea = document.getElementById('system-description-textarea');
        if (systemDescriptionTextarea && customConfig.systemDescription) {
          systemDescriptionTextarea.value = customConfig.systemDescription;
        }
        
        const policyDescriptionTextarea = document.getElementById('policy-input');
        if (policyDescriptionTextarea && customConfig.policyDescription) {
          policyDescriptionTextarea.value = customConfig.policyDescription;
        }
        
        // Restore advanced settings toggle
        const advancedToggle = document.getElementById('advanced-settings-toggle');
        if (advancedToggle && customConfig.isAdvancedSettingsEnabled !== undefined) {
          advancedToggle.checked = customConfig.isAdvancedSettingsEnabled;
          this.toggleAdvancedSettings(customConfig.isAdvancedSettingsEnabled);
        }
        
        // Restore custom test types
        if (customConfig.selectedCustomTestTypes && customConfig.selectedCustomTestTypes.length > 0) {
          window.EnkryptModules.state.setSelectedCustomTestTypes(customConfig.selectedCustomTestTypes);
          customConfig.selectedCustomTestTypes.forEach(testValue => {
            const customTestType = document.querySelector(`.enkrypt-custom-test-type[data-test-value="${testValue}"]`);
            const checkbox = customTestType?.querySelector('.enkrypt-custom-test-checkbox');
            
            if (checkbox && customTestType) {
              checkbox.classList.add('checked');
              customTestType.classList.add('selected');
              
              const icon = checkbox.querySelector('.enkrypt-checkbox-icon');
              if (icon) icon.style.opacity = '1';
              
              checkbox.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
              checkbox.style.borderColor = '#FF7404';
              customTestType.style.borderColor = '#FF7404';
              customTestType.style.background = 'rgba(255, 116, 4, 0.05)';
            }
          });
        }
      }
      
      // Update start button state
      window.EnkryptModules.uiComponents.updateStartButton();
      
      window.EnkryptModules.uiComponents.showStatus('✅ Test configuration loaded successfully!', 'success');      
      return true;
      
    } catch (error) {
      console.error('📖 ❌ Failed to load test configuration:', error);
      window.EnkryptModules.uiComponents.showStatus('❌ Failed to load test configuration', 'error');
      return false;
    }
  }

  // Clear custom test configuration
  clearCustomTestConfiguration() {    
    // Reset all form fields
    const attackScenariosInput = document.getElementById('attack-scenarios-input');
    const categoriesInput = document.getElementById('categories-input');
    const depthInput = document.getElementById('depth-input');
    const systemDescTextarea = document.getElementById('system-description-textarea');
    const riskCategoriesInput = document.getElementById('risk-categories-input');
    const policyTextarea = document.getElementById('policy-input');
    const advancedToggle = document.getElementById('advanced-settings-toggle');
    
    if (attackScenariosInput) attackScenariosInput.value = 1;
    if (categoriesInput) categoriesInput.value = 1;
    if (depthInput) depthInput.value = 1;
    if (systemDescTextarea) {
      systemDescTextarea.value = '';
      systemDescTextarea.style.borderColor = '#D1D5DB';
    }
    if (riskCategoriesInput) riskCategoriesInput.value = '';
    if (policyTextarea) policyTextarea.value = '';
    
    // Reset toggles
    if (advancedToggle) {
      advancedToggle.checked = false;
      this.toggleAdvancedSettings(false);
    }
    
    // Clear custom test type selections
    const customTestTypes = document.querySelectorAll('.enkrypt-custom-test-type');
    customTestTypes.forEach(testType => {
      const checkbox = testType.querySelector('.enkrypt-custom-test-checkbox');
      const testValue = testType.dataset.testValue;
      if (checkbox && testValue) {
        this.toggleCustomTestType(testValue, false);
      }
    });
    
    // Clear state
    window.EnkryptModules.state.setSelectedCustomTestTypes([]);
    
    // Hide any error messages
    const errorEl = document.getElementById('system-description-error');
    if (errorEl) errorEl.style.display = 'none';
    
    // Clear localStorage
    localStorage.removeItem('enkrypt_custom_test_config');
    
    this.showCustomTestStatus('🗑️ Configuration cleared', 'success');
  }

  // Show custom test status message
  showCustomTestStatus(message, type) {
    // Create or update status element within the custom test section
    const customTestContent = document.querySelector('.enkrypt-custom-test-content-inner');
    if (!customTestContent) return;
    
    // Remove existing status
    const existingStatus = customTestContent.querySelector('.enkrypt-custom-test-status');
    if (existingStatus) {
      existingStatus.remove();
    }
    
    // Create new status element
    const status = document.createElement('div');
    status.className = 'enkrypt-custom-test-status';
    status.textContent = message;
    
    const baseStyles = `
      margin-top: 12px !important;
      padding: 12px 16px !important;
      border-radius: 8px !important;
      font-size: 12px !important;
      font-weight: 500 !important;
      text-align: center !important;
      transition: all 0.3s ease !important;
      border: 1px solid !important;
    `;
    
    if (type === 'success') {
      status.style.cssText = baseStyles + `
        background: rgba(16, 185, 129, 0.1) !important;
        border-color: #10B981 !important;
        color: #065F46 !important;
      `;
    } else if (type === 'error') {
      status.style.cssText = baseStyles + `
        background: rgba(239, 68, 68, 0.1) !important;
        border-color: #EF4444 !important;
        color: #991B1B !important;
      `;
    }
    
    customTestContent.appendChild(status);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (status && status.parentNode) {
        status.remove();
      }
    }, 3000);
  }

  // Set up input event handlers
  setupInputEventHandlers() {
    setTimeout(() => {
      // Test name input
      const testNameInput = document.getElementById('test-name-input');
      if (testNameInput) {
        this.setupInputFocusHandlers(testNameInput);
      }
      
      // Additional instructions textarea
      const additionalInstructionsTextarea = document.getElementById('additional-instructions');
      if (additionalInstructionsTextarea) {
        this.setupInputFocusHandlers(additionalInstructionsTextarea);
      }
      
      // Custom test textareas
      const customTextareas = ['system-description', 'policy-description', 'risk-categories'];
      customTextareas.forEach(id => {
        const textarea = document.getElementById(id);
        if (textarea) {
          this.setupInputFocusHandlers(textarea);
        }
      });
    }, 100);
  }

  // Set up focus handlers for input elements
  setupInputFocusHandlers(element) {
    element.addEventListener('focus', () => {
      element.style.borderColor = '#FF7F00 !important';
      element.style.boxShadow = '0 0 0 4px rgba(255, 127, 0, 0.1) !important';
      element.style.background = 'rgba(255, 127, 0, 0.01) !important';
    });
    
    element.addEventListener('blur', () => {
      element.style.borderColor = '#f1f1f1 !important';
      element.style.boxShadow = 'none !important';
      element.style.background = 'white !important';
    });
  }
};

// Singleton instance
window.EnkryptModules.eventHandlers = new window.EnkryptModules.EventHandlers(); 