// Modularized Content Script - Main Controller

console.log('🛡️ Enkrypt extension: Modular script loading...');

// Wait for all modules to be loaded
function waitForModules() {
  return new Promise((resolve) => {
    const checkModules = () => {
      if (window.EnkryptModules &&
          window.EnkryptModules.TEST_CONFIG &&
          window.EnkryptModules.API_CONFIG &&
          window.EnkryptModules.UI_CONFIG &&
          window.EnkryptModules.STORAGE_KEYS &&
          window.EnkryptModules.ExtensionState &&
          window.EnkryptModules.state &&
          window.EnkryptModules.StylesManager &&
          window.EnkryptModules.stylesManager &&
          window.EnkryptModules.ApiManager &&
          window.EnkryptModules.apiManager &&
          window.EnkryptModules.UIComponents &&
          window.EnkryptModules.uiComponents &&
          window.EnkryptModules.EventHandlers &&
          window.EnkryptModules.eventHandlers &&
          window.EnkryptModules.TestRunner &&
          window.EnkryptModules.testRunner) {
        console.log('🛡️ Enkrypt extension: All modules loaded successfully');
        resolve();
      } else {
        console.log('🛡️ Enkrypt extension: Waiting for modules to load...');
        setTimeout(checkModules, 50);
      }
    };
    checkModules();
  });
}

class EnkryptExtension {
  constructor() {
    this.eventHandlers = new window.EnkryptModules.EventHandlers();
    this.testRunner = new window.EnkryptModules.TestRunner();
    this.initialized = false;
  }

  // Check if extension should initialize
  shouldInitialize() {
    if (window.redTeamExtensionActive) {
      console.log('🛡️ Enkrypt extension: Already active, skipping initialization');
      return false;
    }
    return true;
  }

  // Initialize the extension
  async init() {
    if (!this.shouldInitialize()) return;

    console.log('🛡️ Enkrypt extension: Starting modular initialization');
    window.EnkryptModules.state.setActive(true);

    try {
      // Initialize modules
      await this.initializeModules();
      
      // Set up the extension
      await this.setupExtension();
      
      this.initialized = true;
      console.log('🛡️ Enkrypt extension: ✅ Modular initialization complete');
    } catch (error) {
      console.error('🛡️ Enkrypt extension: ❌ Initialization failed:', error);
    }
  }

  // Initialize all modules
  async initializeModules() {
    console.log('🛡️ Enkrypt extension: Initializing modules...');
    
    // Check permissions
    const permissions = await window.EnkryptModules.apiManager.checkPermissions();
    if (permissions) {
      console.log('🔐 Extension Permissions:', permissions);
    }

    // For testing setup screen - temporarily clear stored email
    // Comment this out once setup screen is working
    // console.log('🧪 Testing mode: Clearing stored email to show setup screen');
    // window.EnkryptModules.apiManager.removeEmail();
    // window.EnkryptModules.state.setEmail('', false);

    // Load stored email
    const storedEmail = await window.EnkryptModules.apiManager.loadStoredEmail();
    console.log('🔑 Stored email check:', {
      hasStoredEmail: !!storedEmail,
      emailLength: storedEmail ? storedEmail.length : 0,
      emailPrefix: storedEmail ? storedEmail.substring(0, 8) : 'NONE'
    });
    
    if (storedEmail) {
      console.log('🔑 Found stored email, validating...');
      const validation = await window.EnkryptModules.apiManager.validateEmail(storedEmail, false);
      console.log('🔑 Validation result:', validation);
      if (validation.success) {
        console.log('🔑 Stored email is valid');
      } else {
        console.log('🔑 Stored email is invalid, removing...');
        window.EnkryptModules.apiManager.removeEmail();
      }
    } else {
      console.log('🔑 No stored email found');
    }

    // Final state check
    console.log('🔑 Final email state after initialization:', {
      currentEmail: window.EnkryptModules.state.currentEmail,
      isEmailValidProperty: window.EnkryptModules.state.emailValidFlag,
      isEmailValidMethod: window.EnkryptModules.state.isEmailValid()
    });

    // Inject styles
    window.EnkryptModules.stylesManager.injectModernStyles();
  }

  // Set up the main extension UI and behavior
  async setupExtension() {
    console.log('🛡️ Enkrypt extension: Setting up extension...');
    
    // Create and add trigger button
    this.createTriggerButton();
  }

  // Create the trigger button
  createTriggerButton() {
    console.log('🛡️ Enkrypt extension: Creating trigger button');
    
    // Remove existing button if any
    const existingButton = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.triggerId);
    if (existingButton) {
      existingButton.remove();
    }

    const triggerButton = window.EnkryptModules.uiComponents.createTriggerButton(() => {
      this.showMainUI();
    });

    document.body.appendChild(triggerButton);
    console.log('🛡️ Enkrypt extension: ✅ Trigger button created');
  }

  // Show the main UI
  showMainUI() {
    console.log('🛡️ Enkrypt extension: Showing main UI');
    
    // Hide trigger button
    const triggerButton = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.triggerId);
    if (triggerButton) {
      triggerButton.style.display = 'none';
    }

    // Remove existing UI if any
    const existingUI = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.extensionId);
    if (existingUI) {
      this.closeMainUI();
      return;
    }

    // Always create the main UI (setup overlay is handled within buildMainContent)
    this.createMainUI();
  }

  // Close the main UI
  closeMainUI() {
    console.log('🛡️ Enkrypt extension: Closing main UI');
    
    const container = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.extensionId);
    const backdrop = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.extensionId + '-backdrop');
    
    if (container && backdrop) {
      // Animate out
      backdrop.style.opacity = '0';
      container.style.animation = 'modalSlideOut 0.3s ease-out forwards';
      
      setTimeout(() => {
        container.remove();
        backdrop.remove();
        this.showTriggerButton();
        
        // Add CSS animations if not already added
        this.ensureModalAnimations();
      }, 300);
    }
  }

  // Ensure modal animations are available
  ensureModalAnimations() {
    if (!document.getElementById('enkrypt-modal-animations')) {
      const style = document.createElement('style');
      style.id = 'enkrypt-modal-animations';
      style.textContent = `
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Show trigger button
  showTriggerButton() {
    const triggerButton = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.triggerId);
    if (triggerButton) {
      triggerButton.style.display = 'flex';
      console.log('🛡️ Enkrypt extension: Trigger button restored');
    }
  }

  // Create the main UI
  createMainUI() {
    console.log('🛡️ Enkrypt extension: Creating main UI');

    // Ensure modal animations are available
    this.ensureModalAnimations();

    // Create backdrop overlay
    const backdrop = document.createElement('div');
    backdrop.id = window.EnkryptModules.UI_CONFIG.selectors.extensionId + '-backdrop';
    backdrop.className = 'enkrypt-backdrop';
    backdrop.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: rgba(0, 0, 0, 0.4) !important;
      backdrop-filter: blur(1px) !important;
      z-index: 2147483646 !important;
      opacity: 0 !important;
      transition: opacity 0.3s ease !important;
    `;

    // Create main container
    const container = document.createElement('div');
    container.id = window.EnkryptModules.UI_CONFIG.selectors.extensionId;
    container.className = 'enkrypt-modern-ui';
    this.setContainerStyles(container);

    // Create header (includes both close and settings buttons)
    const header = window.EnkryptModules.uiComponents.createHeader();
    
    // Set up close button handler for the button in header
    window.EnkryptModules.uiComponents.createCloseButton(() => {
      this.closeMainUI();
    });
    
    // Create settings dropdown with better positioning
    const settingsDropdown = window.EnkryptModules.uiComponents.createSettingsDropdown();
    // Update settings dropdown positioning to prevent clipping
    settingsDropdown.style.cssText = `
      position: absolute !important;
      top: 70px !important;
      right: 16px !important;
      width: 350px !important;
      background: white !important;
      border: 1px solid #E9EAEB !important;
      border-radius: 12px !important;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
      z-index: 2000 !important;
      opacity: 0 !important;
      transform: translateY(-10px) !important;
      transition: all 0.3s ease !important;
      pointer-events: none !important;
      max-height: 80vh !important;
      overflow-y: auto !important;
    `;

    // Create content container
    const content = document.createElement('div');
    content.className = 'enkrypt-content';
    content.style.cssText = 'padding: 24px !important; flex: 1 !important; display: flex !important; flex-direction: column !important; overflow: hidden !important; position: relative !important;';

    // Create all sections
    this.buildMainContent(content);

    // Assemble UI - add all elements to container
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(settingsDropdown);
    
    // Add backdrop click to close
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        this.closeMainUI();
      }
    });

    // Append to body
    document.body.appendChild(backdrop);
    document.body.appendChild(container);

    // Set up settings dropdown functionality with improved positioning
    this.setupSettingsDropdown(container);

    // Animate in
    requestAnimationFrame(() => {
      backdrop.style.opacity = '1';
      container.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    });

    // Initialize event handlers
    this.eventHandlers.initializeAll();

    console.log('🛡️ Enkrypt extension: ✅ Main UI created');
  }

  // Setup settings dropdown functionality
  setupSettingsDropdown(container) {
    const settingsBtn = container.querySelector('#enkrypt-settings-btn');
    const settingsDropdown = container.querySelector('#enkrypt-settings-dropdown');
    let isOpen = false;

    console.log('🔧 Settings dropdown setup:', {
      settingsBtn: !!settingsBtn,
      settingsDropdown: !!settingsDropdown,
      settingsBtnVisible: settingsBtn ? getComputedStyle(settingsBtn).display !== 'none' : false,
      settingsBtnOpacity: settingsBtn ? getComputedStyle(settingsBtn).opacity : 'N/A'
    });

    if (!settingsBtn) {
      console.error('❌ Settings button not found in container!');
      // Try to find it globally
      const globalSettingsBtn = document.getElementById('enkrypt-settings-btn');
      console.log('🔍 Global settings button found:', !!globalSettingsBtn);
      return;
    }

    if (!settingsDropdown) {
      console.error('❌ Settings dropdown not found in container!');
      return;
    }

    const toggleDropdown = () => {
      isOpen = !isOpen;
      console.log('🔧 Toggle dropdown:', isOpen);
      if (isOpen) {
        settingsDropdown.style.opacity = '1';
        settingsDropdown.style.transform = 'translateY(0)';
        settingsDropdown.style.pointerEvents = 'auto';
        settingsBtn.style.background = '#E5E7EB';
      } else {
        settingsDropdown.style.opacity = '0';
        settingsDropdown.style.transform = 'translateY(-10px)';
        settingsDropdown.style.pointerEvents = 'none';
        settingsBtn.style.background = '#F3F4F6';
      }
    };

    const closeDropdown = () => {
      if (isOpen) {
        isOpen = false;
        settingsDropdown.style.opacity = '0';
        settingsDropdown.style.transform = 'translateY(-10px)';
        settingsDropdown.style.pointerEvents = 'none';
        settingsBtn.style.background = '#F3F4F6';
      }
    };

    // Settings button click
    settingsBtn.addEventListener('click', (e) => {
      console.log('🔧 Settings button clicked!');
      e.stopPropagation();
      toggleDropdown();
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!settingsDropdown.contains(e.target) && !settingsBtn.contains(e.target)) {
        closeDropdown();
      }
    });

    // Prevent dropdown from closing when clicking inside it
    settingsDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    console.log('✅ Settings dropdown setup complete');
  }

  // Set container styles
  setContainerStyles(container) {
    const baseStyles = `
      position: fixed !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      overflow: hidden !important;
      background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%) !important;
      border: 1px solid rgba(255, 127, 0, 0.1) !important;
      border-radius: 20px !important;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 30px rgba(255, 127, 0, 0.15) !important;
      z-index: 2147483647 !important;
      font-size: 14px !important;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif !important;
      backdrop-filter: blur(20px) !important;
      opacity: 1 !important;
      visibility: visible !important;
      display: flex !important;
      flex-direction: column !important;
      pointer-events: auto !important;
    `;

    // Responsive sizing
    if (window.innerWidth >= 1200) {
      // Large screens
      container.style.cssText = baseStyles + `
        width: 1200px !important;
        height: 700px !important;
        max-width: 95vw !important;
        max-height: 90vh !important;
        min-width: 800px !important;
        min-height: 500px !important;
      `;
    } else if (window.innerWidth >= 1024) {
      // Medium screens
      container.style.cssText = baseStyles + `
        width: 95vw !important;
        height: 85vh !important;
        max-width: 1100px !important;
        max-height: 85vh !important;
        min-width: 700px !important;
        min-height: 500px !important;
      `;
    } else if (window.innerWidth >= 768) {
      // Tablet screens
      container.style.cssText = baseStyles + `
        width: 98vw !important;
        height: 88vh !important;
        max-width: 750px !important;
        max-height: 88vh !important;
        min-width: 600px !important;
        min-height: 450px !important;
        border-radius: 12px !important;
      `;
    } else {
      // Mobile screens
      container.style.cssText = baseStyles + `
        width: 100vw !important;
        height: 100vh !important;
        max-width: 100vw !important;
        max-height: 100vh !important;
        min-width: 320px !important;
        min-height: 100vh !important;
        border-radius: 0px !important;
        top: 0 !important;
        left: 0 !important;
        transform: none !important;
      `;
    }
  }

  // Build main content sections
  buildMainContent(content) {
    console.log('🛡️ Enkrypt extension: Building main content sections');

    // Create main vertical container
    const mainContainer = document.createElement('div');
    mainContainer.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      gap: 24px !important;
      height: 100% !important;
      position: relative !important;
    `;

    // Check if API key is configured - with detailed logging
    const email = window.EnkryptModules.state.currentEmail;
    const isValid = window.EnkryptModules.state.emailValidFlag;
    const hasEmail = window.EnkryptModules.state.isEmailValid();
    
    console.log('🔑 Email Status Check:', {
      currentEmail: email ? `${email.substring(0, 8)}...` : 'NONE',
      isEmailValid: isValid,
      hasEmail: hasEmail,
      emailLength: email ? email.length : 0
    });
    
    if (!hasEmail || !email || email.trim().length === 0) {
      console.log('🛡️ Enkrypt extension: No valid email configured, showing setup overlay');
      
      // Create setup overlay that covers the entire content area
      const setupOverlay = window.EnkryptModules.uiComponents.createSetupScreen();
      setupOverlay.id = 'enkrypt-setup-overlay';
      
      // Debug: Log overlay creation
      console.log('🎭 Setup overlay created:', {
        element: setupOverlay,
        id: setupOverlay.id,
        className: setupOverlay.className,
        initialOpacity: setupOverlay.style.opacity,
        initialTransform: setupOverlay.style.transform
      });
      
      // Set the main container to contain only the setup overlay
      mainContainer.appendChild(setupOverlay);
      
      // Debug: Check if overlay is in DOM
      console.log('🎭 Setup overlay added to DOM:', {
        isInDOM: document.contains(setupOverlay),
        parentElement: setupOverlay.parentElement,
        containerChildren: mainContainer.children.length
      });
      
      // Set up event listeners for setup overlay
      this.setupSetupOverlayEventListeners(setupOverlay);
      
      // Animate in the overlay with improved debugging and fallback
      setTimeout(() => {
        console.log('🎭 Animating setup overlay in...');
        
        // Find the overlay element by ID as a fallback
        const overlayElement = document.getElementById('enkrypt-setup-overlay');
        console.log('🎭 Found overlay element for animation:', {
          byReference: !!setupOverlay,
          byId: !!overlayElement,
          sameElement: setupOverlay === overlayElement
        });
        
        const targetElement = overlayElement || setupOverlay;
        
        if (targetElement) {
          // Force visibility with multiple approaches
          targetElement.style.setProperty('opacity', '1', 'important');
          targetElement.style.setProperty('transform', 'scale(1)', 'important');
          targetElement.style.setProperty('visibility', 'visible', 'important');
          targetElement.style.setProperty('display', 'flex', 'important');
          
          console.log('🎭 Setup overlay animation applied:', {
            opacity: targetElement.style.opacity,
            transform: targetElement.style.transform,
            visibility: targetElement.style.visibility,
            display: targetElement.style.display,
            computedOpacity: getComputedStyle(targetElement).opacity,
            computedTransform: getComputedStyle(targetElement).transform,
            computedVisibility: getComputedStyle(targetElement).visibility,
            computedDisplay: getComputedStyle(targetElement).display
          });
        } else {
          console.error('🎭 Setup overlay element not found for animation!');
        }
      }, 100);
      
      // Additional fallback visibility check
      setTimeout(() => {
        const overlayCheck = document.getElementById('enkrypt-setup-overlay');
        if (overlayCheck) {
          const computedStyle = getComputedStyle(overlayCheck);
          console.log('🎭 Setup overlay final visibility check:', {
            element: overlayCheck,
            isVisible: computedStyle.opacity !== '0',
            opacity: computedStyle.opacity,
            transform: computedStyle.transform,
            display: computedStyle.display,
            visibility: computedStyle.visibility,
            zIndex: computedStyle.zIndex,
            position: computedStyle.position,
            top: computedStyle.top,
            left: computedStyle.left,
            width: computedStyle.width,
            height: computedStyle.height
          });
          
          // Force show if still not visible
          if (computedStyle.opacity === '0' || computedStyle.visibility === 'hidden') {
            console.log('🎭 Forcing setup overlay visibility...');
            overlayCheck.style.setProperty('opacity', '1', 'important');
            overlayCheck.style.setProperty('visibility', 'visible', 'important');
            overlayCheck.style.setProperty('transform', 'scale(1)', 'important');
          }
        }
        
        // Run comprehensive debug
        this.debugOverlayVisibility();
      }, 500);
      
    } else {
      console.log('🛡️ Enkrypt extension: Email configured, showing main content');
      this.buildMainSections(mainContainer);
    }

    content.appendChild(mainContainer);
  }

  // Build the main content sections (extracted for reuse)
  buildMainSections(container) {
    console.log('🛡️ Enkrypt extension: Building main content sections');

    // Create a wrapper container that holds both scrollable content and fixed action bar
    const wrapperContainer = document.createElement('div');
    wrapperContainer.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      height: 100% !important;
      position: relative !important;
    `;

    // Create scrollable content container
    const scrollableContent = document.createElement('div');
    scrollableContent.style.cssText = `
      flex: 1 !important;
      overflow-y: auto !important;
      padding: 0 0 20px 0 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 24px !important;
    `;

    // Create Test Name section
    const testNameSection = window.EnkryptModules.uiComponents.createTestNameSection();
    
    // Create Comprehensiveness section
    const comprehensivenessSection = this.createComprehensivenessSection();
    
    // Create Test Types section
    const testTypesSection = document.createElement('div');
    testTypesSection.style.cssText = 'margin-bottom: 0px !important;';
    
    // const testTypesTitle = document.createElement('h4');
    // testTypesTitle.className = 'enkrypt-section-title';
    // testTypesTitle.style.cssText = 'margin: 0 0 16px 0 !important; color: #1a1a1a !important; font-size: 16px !important; font-weight: 600 !important;';
    // testTypesTitle.textContent = 'Test Types';
    
    const testGrid = window.EnkryptModules.uiComponents.createTestGrid();
    
    // testTypesSection.appendChild(testTypesTitle);
    testTypesSection.appendChild(testGrid);
    
    // Create Custom Tests section
    const customTestSection = window.EnkryptModules.uiComponents.createCustomTestSection();
    
    // Create Additional Instructions section
    const additionalInstructionsSection = window.EnkryptModules.uiComponents.createAdditionalInstructionsSection();
    
    // Add all content sections to scrollable container
    scrollableContent.appendChild(testNameSection);
    scrollableContent.appendChild(additionalInstructionsSection);
    scrollableContent.appendChild(comprehensivenessSection);
    scrollableContent.appendChild(testTypesSection);
    scrollableContent.appendChild(customTestSection);

    // Create fixed bottom action bar
    const actionBar = document.createElement('div');
    actionBar.style.cssText = `
      display: flex !important;
      gap: 16px !important;
      justify-content: space-between !important;
      align-items: stretch !important;
      padding: 20px 0 0 0 !important;
      border-top: 1px solid #E9EAEB !important;
      background: #ffffff !important;
      flex-shrink: 0 !important;
      flex-wrap: wrap !important;
      position: relative !important;
      z-index: 10 !important;
    `;
    
    // Create Save Config button
    const saveConfigButton = document.createElement('button');
    saveConfigButton.className = 'enkrypt-save-config-btn';
    saveConfigButton.innerHTML = `
      Save Config<span style="margin-left: 8px;"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.49984 8.75L9.1665 10.4167L12.9165 6.66667M15.8332 17.5V6.5C15.8332 5.09987 15.8332 4.3998 15.5607 3.86502C15.321 3.39462 14.9386 3.01217 14.4681 2.77248C13.9334 2.5 13.2333 2.5 11.8332 2.5H8.1665C6.76637 2.5 6.06631 2.5 5.53153 2.77248C5.06112 3.01217 4.67867 3.39462 4.43899 3.86502C4.1665 4.3998 4.1665 5.09987 4.1665 6.5V17.5L9.99984 14.1667L15.8332 17.5Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </span>
    `;
    saveConfigButton.style.cssText = `
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 12px 24px !important;
      border: 2px solid #E9EAEB !important;
      border-radius: 12px !important;
      background: white !important;
      color: #374151 !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0) !important;
      flex: 1 !important;
      white-space: nowrap !important;
    `;

    // Add click handler for Save Config button
    saveConfigButton.addEventListener('click', () => {
      console.log('💾 Save Config button clicked');
      if (window.EnkryptModules.eventHandlers) {
        window.EnkryptModules.eventHandlers.saveEntireTestConfiguration();
      } else {
        console.error('💾 Event handlers not available');
        window.EnkryptModules.uiComponents.showStatus('❌ Unable to save configuration', 'error');
      }
    });

    // Add hover effects
    saveConfigButton.addEventListener('mouseenter', () => {
      saveConfigButton.style.borderColor = '#FF7404';
      saveConfigButton.style.color = '#FF7404';
    });

    saveConfigButton.addEventListener('mouseleave', () => {
      saveConfigButton.style.borderColor = '#E9EAEB';
      saveConfigButton.style.color = '#374151';
    });

    // Create Validate URL button (main CTA)
    const validateButtonContainer = window.EnkryptModules.uiComponents.createStartButton(async () => {
      try {
        await this.testRunner.startRedTeamTest();
        // Success - the test runner will handle the loading state removal
      } catch (error) {
        console.error('🚨 Start button: Test launch failed:', error);
        
        // Show error message
        const errorMessage = error.message || 'An unexpected error occurred';
        window.EnkryptModules.uiComponents.showStatus(`❌ ${errorMessage}`, 'error');
        
        // Ensure loading state is removed on error (fallback)
        window.EnkryptModules.uiComponents.setStartButtonLoading(false);
      }
    });
    
    // Style the container
    validateButtonContainer.style.cssText = `
      flex: 1 !important;
      display: flex !important;
      flex-direction: column !important;
    `;
    
    // Find and style the actual button within the container
    const validateButton = validateButtonContainer.querySelector('.enkrypt-start-btn');
    if (validateButton) {
      validateButton.style.cssText += `
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 12px 24px !important;
        border: 2px solid transparent !important;
        border-radius: 12px !important;
        background: linear-gradient(135deg, #FF7404 0%, #FF3BA2 100%) !important;
        color: white !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        box-shadow: 0 4px 12px rgba(255, 116, 4, 0.3) !important;
        white-space: nowrap !important;
        margin-top: 0 !important;
      `;
    }

    // Assemble action bar
    actionBar.appendChild(saveConfigButton);
    actionBar.appendChild(validateButtonContainer);

    // Assemble the wrapper container
    wrapperContainer.appendChild(scrollableContent);
    wrapperContainer.appendChild(actionBar);

    // Add wrapper to main container
    container.appendChild(wrapperContainer);

    console.log('🛡️ Enkrypt extension: ✅ Main content sections built with fixed action bar');
  }

  // Create comprehensiveness section
  createComprehensivenessSection() {
    const section = document.createElement('div');
    section.className = 'enkrypt-comprehensiveness-section';
    section.style.cssText = 'margin-bottom: 0px !important;';
    
    section.innerHTML = `
      <div style="display: flex !important; align-items: center !important; gap: 8px !important; margin-bottom: 16px !important;">
        <h4 style="margin: 0 !important; color: #1a1a1a !important; font-size: 16px !important; font-weight: 600 !important;">Comprehensiveness of tests</h4>
        <span style="color: #EF4444 !important; font-weight: 600 !important;">*</span>
      </div>
      
      <div style="display: flex !important; gap: 24px !important; flex-wrap: wrap !important;">
        <label class="enkrypt-radio-option" style="display: flex !important; flex-direction: column !important; align-items: center !important; cursor: pointer !important; min-width: 140px !important;">
          <div style="display: flex !important; align-items: center !important; gap: 8px !important; margin-bottom: 8px !important;">
            <input type="radio" name="comprehensiveness" value="low" checked style="margin: 0 !important;">
            <span style="font-weight: 600 !important; color: #1a1a1a !important;">Low</span>
          </div>
          <div style="text-align: center !important; font-size: 12px !important; color: #666 !important; line-height: 1.4 !important;">
            (For quick report)
          </div>
        </label>
        
        <label class="enkrypt-radio-option" style="display: flex !important; flex-direction: column !important; align-items: center !important; cursor: not-allowed !important; min-width: 140px !important; opacity: 0.6 !important;">
          <div style="display: flex !important; align-items: center !important; gap: 8px !important; margin-bottom: 8px !important;">
            <input type="radio" name="comprehensiveness" value="medium" disabled style="margin: 0 !important; cursor: not-allowed !important;">
            <span style="font-weight: 600 !important; color: #1a1a1a !important;">Medium</span>
          </div>
          <div style="text-align: center !important; font-size: 12px !important; color: #666 !important; line-height: 1.4 !important;">
            (For quick report)
            <div style="margin-top: 4px !important;">
              <span style="border-radius: 12px !important; border: 1px solid #22C55E !important; padding: 2px 8px !important; text-align: center !important; font-size: 10px !important; font-weight: 600 !important; background: #F0FDF4 !important; color: #16A34A !important; display: inline-flex !important; align-items: center !important; gap: 2px !important;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g clip-path="url(#clip0_3858_66820)">
                    <path d="M2.25 11V8.5M2.25 3.5V1M1 2.25H3.5M1 9.75H3.5M6.5 1.5L5.63291 3.75443C5.4919 4.12105 5.4214 4.30435 5.31176 4.45854C5.21459 4.5952 5.0952 4.71459 4.95854 4.81177C4.80435 4.9214 4.62105 4.99191 4.25443 5.13291L2 6L4.25443 6.86709C4.62105 7.00809 4.80435 7.0786 4.95854 7.18823C5.0952 7.28541 5.21459 7.4048 5.31177 7.54146C5.4214 7.69565 5.49191 7.87895 5.63291 8.24557L6.5 10.5L7.36709 8.24557C7.50809 7.87895 7.5786 7.69565 7.68824 7.54146C7.78541 7.4048 7.9048 7.28541 8.04146 7.18823C8.19565 7.0786 8.37895 7.00809 8.74557 6.86709L11 6L8.74557 5.13291C8.37895 4.99191 8.19565 4.9214 8.04146 4.81176C7.9048 4.71459 7.78541 4.5952 7.68823 4.45854C7.5786 4.30435 7.50809 4.12105 7.36709 3.75443L6.5 1.5Z" stroke="#17B26A" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3858_66820">
                      <rect width="12" height="12" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                Upgrade
              </span>
            </div>
          </div>
        </label>
        
        <label class="enkrypt-radio-option" style="display: flex !important; flex-direction: column !important; align-items: center !important; cursor: not-allowed !important; min-width: 140px !important; opacity: 0.6 !important;">
          <div style="display: flex !important; align-items: center !important; gap: 8px !important; margin-bottom: 8px !important;">
            <input type="radio" name="comprehensiveness" value="high" disabled style="margin: 0 !important; cursor: not-allowed !important;">
            <span style="font-weight: 600 !important; color: #1a1a1a !important;">High</span>
          </div>
          <div style="text-align: center !important; font-size: 12px !important; color: #666 !important; line-height: 1.4 !important;">
            (For comprehensive report)
            <div style="margin-top: 4px !important;">
              <span style="border-radius: 12px !important; border: 1px solid #22C55E !important; padding: 2px 8px !important; text-align: center !important; font-size: 10px !important; font-weight: 600 !important; background: #F0FDF4 !important; color: #16A34A !important; display: inline-flex !important; align-items: center !important; gap: 2px !important;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g clip-path="url(#clip0_3858_66820)">
                    <path d="M2.25 11V8.5M2.25 3.5V1M1 2.25H3.5M1 9.75H3.5M6.5 1.5L5.63291 3.75443C5.4919 4.12105 5.4214 4.30435 5.31176 4.45854C5.21459 4.5952 5.0952 4.71459 4.95854 4.81177C4.80435 4.9214 4.62105 4.99191 4.25443 5.13291L2 6L4.25443 6.86709C4.62105 7.00809 4.80435 7.0786 4.95854 7.18823C5.0952 7.28541 5.21459 7.4048 5.31177 7.54146C5.4214 7.69565 5.49191 7.87895 5.63291 8.24557L6.5 10.5L7.36709 8.24557C7.50809 7.87895 7.5786 7.69565 7.68824 7.54146C7.78541 7.4048 7.9048 7.28541 8.04146 7.18823C8.19565 7.0786 8.37895 7.00809 8.74557 6.86709L11 6L8.74557 5.13291C8.37895 4.99191 8.19565 4.9214 8.04146 4.81176C7.9048 4.71459 7.78541 4.5952 7.68823 4.45854C7.5786 4.30435 7.50809 4.12105 7.36709 3.75443L6.5 1.5Z" stroke="#17B26A" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3858_66820">
                      <rect width="12" height="12" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                Upgrade
              </span>
            </div>
          </div>
        </label>
      </div>
    `;
    
    return section;
  }

  // Method to expand custom test section
  expandCustomTestSection() {
    const customTestSection = document.getElementById('custom-test-section');
    const customTestContent = document.getElementById('custom-test-content');
    const chevron = customTestSection?.querySelector('.enkrypt-custom-test-chevron');
    const icon = customTestSection?.querySelector('.enkrypt-custom-test-icon');

    console.log('🛡️ Enkrypt extension: Attempting to expand custom test section');
    console.log('Elements found:', {
      customTestSection: !!customTestSection,
      customTestContent: !!customTestContent,
      chevron: !!chevron,
      icon: !!icon
    });

    if (customTestSection && customTestContent) {
      console.log('🛡️ Enkrypt extension: Expanding custom test section');
      
      // Update event handler state to reflect expanded state
      if (this.eventHandlers) {
        this.eventHandlers.isCustomExpanded = true;
        window.EnkryptModules.state.setUIState('customTestExpanded', true);
      }
      
      // Add expanded class
      customTestSection.classList.add('expanded');
      
      // Set styles for expanded state with important flags
      customTestContent.style.setProperty('max-height', '1000px', 'important');
      customTestContent.style.setProperty('opacity', '1', 'important');
      customTestContent.style.setProperty('overflow', 'visible', 'important');
      
      if (chevron) {
        chevron.style.setProperty('transform', 'rotate(180deg)', 'important');
      }
      
      if (icon) {
        icon.style.setProperty('transform', 'scale(1.1)', 'important');
      }
      
      // Update section background to show it's active
      customTestSection.style.setProperty('border-color', '#FF7404', 'important');
      customTestSection.style.setProperty('background', 'white', 'important');
      customTestSection.style.setProperty('box-shadow', '0 6px 20px rgba(255, 116, 4, 0.1)', 'important');
      
      console.log('🛡️ Enkrypt extension: ✅ Custom test section expanded');
      
      // Additional debugging
      setTimeout(() => {
        const computedMaxHeight = getComputedStyle(customTestContent).maxHeight;
        const computedOpacity = getComputedStyle(customTestContent).opacity;
        console.log('🛡️ Final computed styles:', {
          maxHeight: computedMaxHeight,
          opacity: computedOpacity,
          hasExpandedClass: customTestSection.classList.contains('expanded')
        });
      }, 100);
      
    } else {
      console.error('🛡️ Enkrypt extension: ❌ Custom test section elements not found');
      console.log('Available elements:', {
        customTestSection: !!customTestSection,
        customTestContent: !!customTestContent,
        allCustomSections: document.querySelectorAll('[id*="custom"]'),
        allTestSections: document.querySelectorAll('[class*="test"]')
      });
      
      // Try alternative approach - wait and retry
      setTimeout(() => {
        console.log('🛡️ Retrying custom test section expansion...');
        const retrySection = document.getElementById('custom-test-section');
        const retryContent = document.getElementById('custom-test-content');
        
        if (retrySection && retryContent) {
          console.log('🛡️ Found elements on retry, expanding...');
          retryContent.style.setProperty('max-height', '1000px', 'important');
          retryContent.style.setProperty('opacity', '1', 'important');
          retryContent.style.setProperty('padding', '0 20px 20px 20px', 'important');
        } else {
          console.error('🛡️ Custom test section still not found after retry');
        }
      }, 1000);
    }
  }

  // Cleanup resources
  cleanup() {
    console.log('🛡️ Enkrypt extension: Cleaning up resources');
    
    // Stop any running tests
    if (this.testRunner) {
      this.testRunner.stopTest();
    }
    
    // Clear API timeouts
    if (window.EnkryptModules.apiManager) {
      window.EnkryptModules.apiManager.clearTimeouts();
    }
    
    // Remove UI elements
    const ui = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.extensionId);
    const backdrop = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.extensionId + '-backdrop');
    const trigger = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.triggerId);
    
    if (ui) ui.remove();
    if (backdrop) backdrop.remove();
    if (trigger) trigger.remove();
    
    // Reset state
    window.EnkryptModules.state.reset();
    window.redTeamExtensionActive = false;
    
    this.initialized = false;
    console.log('🛡️ Enkrypt extension: ✅ Cleanup complete');
  }

  // Setup event listeners for setup overlay
  setupSetupOverlayEventListeners(setupOverlay) {
    console.log('🔧 Setting up setup overlay event listeners');
    
    const emailInput = setupOverlay.querySelector('#enkrypt-setup-email');
    const validateBtn = setupOverlay.querySelector('#enkrypt-setup-validate-btn');
    
    if (!emailInput || !validateBtn) {
      console.error('❌ Setup overlay elements not found');
      return;
    }

    // Update validate button state based on input
    const updateValidateButton = () => {
      const hasValue = emailInput.value.trim().length > 0;
      
      if (hasValue) {
        validateBtn.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
        validateBtn.style.color = 'white';
        validateBtn.disabled = false;
        validateBtn.style.cursor = 'pointer';
      } else {
        validateBtn.style.background = '#E5E7EB';
        validateBtn.style.color = '#6B7280';
        validateBtn.disabled = true;
        validateBtn.style.cursor = 'not-allowed';
      }
    };

    // Initial button state
    updateValidateButton();

    // Listen for input changes
    emailInput.addEventListener('input', updateValidateButton);
    emailInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !validateBtn.disabled) {
        this.handleSetupOverlayEmailValidation();
      }
    });

    // Validate button click
    validateBtn.addEventListener('click', () => {
      if (!validateBtn.disabled) {
        this.handleSetupOverlayEmailValidation();
      }
    });

    console.log('✅ Setup overlay event listeners configured');
  }

  // Handle email validation from setup overlay
  async handleSetupOverlayEmailValidation() {
    console.log('🔑 Handling setup overlay email validation');
    
    const setupOverlay = document.getElementById('enkrypt-setup-overlay');
    const emailInput = setupOverlay?.querySelector('#enkrypt-setup-email');
    const validateBtn = setupOverlay?.querySelector('#enkrypt-setup-validate-btn');
    
    if (!emailInput || !validateBtn) {
      console.error('❌ Setup overlay elements not found during validation');
      return;
    }

    const email = emailInput.value.trim();
    if (!email) {
      window.EnkryptModules.uiComponents.showStatus('❌ Please enter an email address', 'error');
      return;
    }

    // Set loading state
    const originalText = validateBtn.textContent;
    validateBtn.textContent = 'Validating...';
    validateBtn.disabled = true;
    validateBtn.style.background = '#E5E7EB';
    validateBtn.style.cursor = 'not-allowed';
    emailInput.disabled = true;

    try {
      // Store the email temporarily
      window.EnkryptModules.state.setEmail(email);
      
      // Validate the email directly through the API manager (which returns a response object)
      const response = await window.EnkryptModules.apiManager.validateEmail(email, true);
      
      if (response.success) {
        console.log('✅ Email validation successful in setup overlay');
        
        // Show success message
        window.EnkryptModules.uiComponents.showStatus('✅ Email validated successfully!', 'success');
        
        // Hide the setup overlay
        this.hideSetupOverlay();
        
        // Rebuild the main content to show the regular interface
        setTimeout(() => {
          const content = document.querySelector('.enkrypt-content');
          if (content) {
            const mainContainer = content.querySelector('div');
            if (mainContainer) {
              // Clear the setup overlay and build main sections
              mainContainer.innerHTML = '';
              this.buildMainSections(mainContainer);
              
              // Re-initialize event handlers for the new content
              if (window.EnkryptModules.eventHandlers) {
                window.EnkryptModules.eventHandlers.initializeAll();
              }
            }
          }
        }, 300);
        
      } else {
        console.log('❌ Email validation failed in setup overlay', response);
        
        // Clear the stored email
        window.EnkryptModules.state.setEmail('', false);
        
        // Show error message
        window.EnkryptModules.uiComponents.showStatus('❌ Invalid email address. Please check and try again.', 'error');
        
        // Reset form state
        validateBtn.textContent = originalText;
        validateBtn.disabled = false;
        validateBtn.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
        validateBtn.style.cursor = 'pointer';
        emailInput.disabled = false;
        emailInput.focus();
      }
      
    } catch (error) {
      console.error('❌ Setup overlay email validation error:', error);
      
      // Clear the stored email
      window.EnkryptModules.state.setEmail('', false);
      
      // Show error message
      window.EnkryptModules.uiComponents.showStatus('❌ Email validation failed. Please try again.', 'error');
      
      // Reset form state
      validateBtn.textContent = originalText;
      validateBtn.disabled = false;
      validateBtn.style.background = 'linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%)';
      validateBtn.style.cursor = 'pointer';
      emailInput.disabled = false;
      emailInput.focus();
    }
  }

  // Hide setup overlay with animation
  hideSetupOverlay() {
    console.log('🫥 Hiding setup overlay');
    
    const setupOverlay = document.getElementById('enkrypt-setup-overlay');
    if (setupOverlay) {
      setupOverlay.style.opacity = '0';
      setupOverlay.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        if (setupOverlay && setupOverlay.parentNode) {
          setupOverlay.remove();
        }
      }, 300);
    }
  }

  // Debug method to check overlay visibility
  debugOverlayVisibility() {
    const setupOverlay = document.getElementById('enkrypt-setup-overlay');
    const mainContainer = document.querySelector('.enkrypt-content > div');
    const extensionContainer = document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.extensionId);
    
    console.log('🔍 OVERLAY VISIBILITY DEBUG:', {
      setupOverlay: {
        element: setupOverlay,
        exists: !!setupOverlay,
        isConnected: setupOverlay?.isConnected,
        parentElement: setupOverlay?.parentElement?.tagName,
        computedStyles: setupOverlay ? {
          display: getComputedStyle(setupOverlay).display,
          visibility: getComputedStyle(setupOverlay).visibility,
          opacity: getComputedStyle(setupOverlay).opacity,
          transform: getComputedStyle(setupOverlay).transform,
          position: getComputedStyle(setupOverlay).position,
          zIndex: getComputedStyle(setupOverlay).zIndex,
          width: getComputedStyle(setupOverlay).width,
          height: getComputedStyle(setupOverlay).height,
          top: getComputedStyle(setupOverlay).top,
          left: getComputedStyle(setupOverlay).left
        } : null
      },
      mainContainer: {
        element: mainContainer,
        exists: !!mainContainer,
        children: mainContainer?.children.length,
        childrenIds: Array.from(mainContainer?.children || []).map(child => child.id || child.tagName)
      },
      extensionContainer: {
        element: extensionContainer,
        exists: !!extensionContainer,
        isVisible: extensionContainer ? getComputedStyle(extensionContainer).opacity !== '0' : false
      },
      domStructure: {
        allOverlays: document.querySelectorAll('[id*="setup"], [class*="setup"]').length,
        setupElements: Array.from(document.querySelectorAll('[id*="setup"], [class*="setup"]')).map(el => ({
          id: el.id,
          className: el.className,
          tagName: el.tagName,
          isVisible: getComputedStyle(el).opacity !== '0'
        }))
      }
    });
  }
}

// Initialize when DOM is ready
async function initializeWhenReady() {
  // Wait for modules to load first
  await waitForModules();
  
  const extension = new EnkryptExtension();
  
  if (document.readyState === 'loading') {
    console.log('🛡️ Enkrypt extension: Waiting for DOM to load');
    document.addEventListener('DOMContentLoaded', () => extension.init());
  } else {
    console.log('🛡️ Enkrypt extension: DOM already loaded, initializing immediately');
    extension.init();
  }
  
  // Store reference globally for debugging
  window.enkryptExtension = extension;
}

// Start initialization
initializeWhenReady(); 