window.EnkryptModules = window.EnkryptModules || {};

// ===== API CONFIGURATION (URLs are in background.js only) =====
var BASE_API_CONFIG = {
  timeouts: {
    validation: 120000,
    request: 120000
  }
};

// Make it available globally for background scripts
if (typeof globalThis !== 'undefined') {
  globalThis.ENKRYPT_API_CONFIG = BASE_API_CONFIG;
}

// Export for background script usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BASE_API_CONFIG;
}

window.EnkryptModules.TEST_CONFIG = {
  availableTestTypes: [
    { id: 'bias_test', name: 'Bias Test', description: 'Tests for bias in AI responses', icon: '⚖️' },
    { id: 'cbrn_test', name: 'CBRN Test', description: 'Tests for Chemical, Biological, Radiological, Nuclear content', icon: '☢️' },
    { id: 'insecure_code_test', name: 'Insecure Code Test', description: 'Tests for insecure code generation', icon: '🔓' },
    { id: 'toxicity_test', name: 'Toxicity Test', description: 'Tests for toxic content generation', icon: '☠️' },
    { id: 'harmful_test', name: 'Harmful Test', description: 'Tests for harmful content generation', icon: '⚠️' },
    { id: 'hallucination_test', name: 'Hallucination Test', description: 'Tests for AI hallucinations and false information generation', icon: '🌫️' },
    { id: 'pii_test', name: 'PII Test', description: 'Tests for Personal Identifiable Information leakage', icon: '🔒' },
    { id: 'sponge_test', name: 'Sponge Test', description: 'Tests for resource consumption and denial of service vulnerabilities', icon: '🧽' },
    { id: 'misinformation_test', name: 'Misinformation Test', description: 'Tests for spread of false or misleading information', icon: '📰' },
    { id: 'copyright_test', name: 'Copyright Test', description: 'Tests for copyright infringement and intellectual property violations', icon: '©️' },
    { id: 'custom_test', name: 'Custom Use-Case Test', description: 'Custom test based on your specific use case and policies', icon: '🎯', isCustom: true }
  ],

  advancedTestTypes: [
    { id: 'adv_bias_test', name: 'Advanced Bias Test', description: 'Deep analysis of bias patterns and discriminatory outputs', icon: '⚖️' },
    { id: 'adv_info_test', name: 'Advanced Info Test', description: 'Tests for advanced information disclosure vulnerabilities', icon: '🔍' },
    { id: 'adv_tool_test', name: 'Advanced Tool Test', description: 'Tests for advanced tool manipulation and misuse', icon: '🛠️' },
    { id: 'adv_command_test', name: 'Advanced Command Test', description: 'Tests for advanced command injection and system manipulation', icon: '⚡' }
  ]
};

// Use the base config for the main application
window.EnkryptModules.API_CONFIG = BASE_API_CONFIG;

window.EnkryptModules.UI_CONFIG = {
  selectors: {
    extensionId: 'enkrypt-redteam-ui',
    triggerId: 'enkrypt-trigger-button',
    stylesId: 'enkrypt-modern-styles'
  },
  animations: {
    slideInDuration: 400,
    slideOutDuration: 300,
    statusSlideIn: 300
  }
};

window.EnkryptModules.STORAGE_KEYS = {
  email: 'enkryptEmail'
}; 