// State management module

// Create global EnkryptModules namespace if it doesn't exist
window.EnkryptModules = window.EnkryptModules || {};

window.EnkryptModules.ExtensionState = class ExtensionState {
  constructor() {
    this.emailValidFlag = false;
    this.currentEmail = '';
    this.isExtensionActive = false;
    this.selectedTestTypes = [];
    this.selectedCustomTestTypes = [];
    this.uiStates = {
      apiSectionExpanded: false,
      customTestExpanded: false
    };
  }

  // Email management
  setEmail(email, isValid = false) {
    this.currentEmail = email;
    this.emailValidFlag = isValid;
  }

  getEmail() {
    return this.currentEmail;
  }

  isEmailValid() {
    return this.emailValidFlag && this.currentEmail;
  }

  // UI State management
  setUIState(key, value) {
    this.uiStates[key] = value;
  }

  getUIState(key) {
    return this.uiStates[key];
  }

  // Extension lifecycle
  setActive(active) {
    this.isExtensionActive = active;
    if (active) {
      window.redTeamExtensionActive = true;
    }
  }

  isActive() {
    return this.isExtensionActive;
  }

  // Test Types management
  setSelectedTestTypes(testTypes) {
    this.selectedTestTypes = testTypes || [];
  }

  getSelectedTestTypes() {
    return this.selectedTestTypes;
  }

  addTestType(testType) {
    if (!this.selectedTestTypes.includes(testType)) {
      this.selectedTestTypes.push(testType);
    }
  }

  removeTestType(testType) {
    this.selectedTestTypes = this.selectedTestTypes.filter(t => t !== testType);
  }

  hasSelectedTests() {
    return this.selectedTestTypes.length > 0;
  }

  // Custom Test Types management
  setSelectedCustomTestTypes(customTestTypes) {
    this.selectedCustomTestTypes = customTestTypes || [];
  }

  getSelectedCustomTestTypes() {
    return this.selectedCustomTestTypes;
  }

  addCustomTestType(testType) {
    if (!this.selectedCustomTestTypes.includes(testType)) {
      this.selectedCustomTestTypes.push(testType);
    }
  }

  removeCustomTestType(testType) {
    this.selectedCustomTestTypes = this.selectedCustomTestTypes.filter(t => t !== testType);
  }

  hasSelectedCustomTests() {
    return this.selectedCustomTestTypes.length > 0;
  }

  // Reset state
  reset() {
    this.emailValidFlag = false;
    this.currentEmail = '';
    this.selectedTestTypes = [];
    this.selectedCustomTestTypes = [];
    this.uiStates = {
      apiSectionExpanded: false,
      customTestExpanded: false
    };
  }
};

// Singleton instance
window.EnkryptModules.state = new window.EnkryptModules.ExtensionState(); 