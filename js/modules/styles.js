// Styles management module

// Create global EnkryptModules namespace if it doesn't exist
window.EnkryptModules = window.EnkryptModules || {};

window.EnkryptModules.StylesManager = class StylesManager {
  constructor() {
    this.stylesInjected = false;
  }

  injectModernStyles() {
    if (document.getElementById(window.EnkryptModules.UI_CONFIG.selectors.stylesId)) {
      return;
    }
    
    const styleSheet = document.createElement('style');
    styleSheet.id = window.EnkryptModules.UI_CONFIG.selectors.stylesId;
    styleSheet.textContent = this.getStylesCSS();
    
    document.head.appendChild(styleSheet);
    this.stylesInjected = true;
  }

  getStylesCSS() {
    return `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      
      .enkrypt-modern-ui {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif !important;
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        width: 420px !important;
        height: 800px !important;
        overflow-y: auto !important;
        background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%) !important;
        border: 1px solid rgba(255, 116, 4, 0.1) !important;
        border-radius: 20px !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 30px rgba(255, 116, 4, 0.1) !important;
        z-index: 2147483647 !important;
        font-size: 14px !important;
        backdrop-filter: blur(20px) !important;
        transform: translateY(10px) !important;
        opacity: 0 !important;
        animation: slideInFadeBottom 0.4s ease-out forwards !important;
        pointer-events: auto !important;
        display: block !important;
      }
      
      .enkrypt-modern-ui::-webkit-scrollbar {
        width: 6px !important;
      }
      
      .enkrypt-modern-ui::-webkit-scrollbar-track {
        background: transparent !important;
      }
      
      .enkrypt-modern-ui::-webkit-scrollbar-thumb {
        background: rgba(255, 116, 4, 0.3) !important;
        border-radius: 3px !important;
        transition: background 0.2s ease !important;
      }
      
      .enkrypt-modern-ui::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 116, 4, 0.5) !important;
      }
      
      @keyframes slideInFade {
        to {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
      }
      
      @keyframes slideInFadeBottom {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideOutFade {
        to {
          transform: translateY(-20px) !important;
          opacity: 0 !important;
        }
      }
      
      .enkrypt-header {
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        padding: 16px 28px !important;
        position: sticky !important;
        top: 0 !important;
        z-index: 10 !important;
        overflow: hidden !important;
      }
      
      .enkrypt-header::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%) !important;
        pointer-events: none !important;
      }
      
      .enkrypt-header h3 {
        margin: 0 !important;
        color: white !important;
        font-size: 20px !important;
        font-weight: 600 !important;
        letter-spacing: -0.02em !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      .enkrypt-header p {
        margin: 8px 0 0 0 !important;
        color: rgba(255, 255, 255, 0.9) !important;
        font-size: 14px !important;
        font-weight: 400 !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      .enkrypt-close-btn {
        position: absolute !important;
        right: 20px !important;
        width: 32px !important;
        height: 32px !important;
        border: none !important;
        background: rgba(255, 255, 255, 0.2) !important;
        border-radius: 50% !important;
        cursor: pointer !important;
        font-size: 18px !important;
        color: white !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.2s ease !important;
        z-index: 2 !important;
      }
      
      .enkrypt-close-btn:hover {
        background: rgba(255, 255, 255, 0.3) !important;
        transform: scale(1.1) !important;
      }
      
      .enkrypt-content {
        padding: 24px !important;
      }
      
      .enkrypt-section-title {
        margin: 0 0 20px 0 !important;
        color: #181D27 !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        letter-spacing: -0.01em !important;
      }
      
      .enkrypt-test-grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 12px !important;
        margin-bottom: 24px !important;
      }
      
      .enkrypt-test-card {
        border: 1px solid #E9EAEB !important;
        border-radius: 12px !important;
        padding: 16px !important;
        cursor: pointer !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        background: white !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .enkrypt-test-card::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.02) 12.83%, rgba(255, 59, 162, 0.02) 84.86%) !important;
        opacity: 0 !important;
        transition: opacity 0.3s ease !important;
      }
      
      .enkrypt-test-card:hover {
        border-color: rgba(255, 116, 4, 0.3) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 25px rgba(255, 116, 4, 0.1) !important;
      }
      
      .enkrypt-test-card:hover::before {
        opacity: 1 !important;
      }
      
      .enkrypt-test-card.selected {
        border-color: #FF7404 !important;
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.05) 12.83%, rgba(255, 59, 162, 0.05) 84.86%) !important;
        box-shadow: 0 4px 14px rgba(255, 116, 4, 0.15) !important;
      }
      
      .enkrypt-test-card.selected::before {
        opacity: 1 !important;
      }
      
      .enkrypt-test-header {
        display: flex !important;
        align-items: center !important;
        margin-bottom: 8px !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      .enkrypt-test-icon {
        font-size: 20px !important;
        margin-right: 8px !important;
        opacity: 0.8 !important;
      }
      
      .enkrypt-test-name {
        font-weight: 600 !important;
        color: #181D27 !important;
        font-size: 14px !important;
        flex: 1 !important;
        letter-spacing: -0.01em !important;
      }
      
      .enkrypt-test-checkbox {
        width: 18px !important;
        height: 18px !important;
        margin-left: auto !important;
        accent-color: #FF7404 !important;
        cursor: pointer !important;
      }
      
      .enkrypt-test-description {
        color: #414651 !important;
        font-size: 12px !important;
        line-height: 1.3 !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      .enkrypt-start-btn {
        width: 100% !important;
        padding: 16px 24px !important;
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        color: white !important;
        border: none !important;
        border-radius: 12px !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        position: relative !important;
        overflow: hidden !important;
        box-shadow: 0 4px 14px rgba(255, 116, 4, 0.3) !important;
        letter-spacing: -0.01em !important;
      }
      
      .enkrypt-start-btn::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: linear-gradient(133.06deg, rgba(255, 255, 255, 0.2) 12.83%, rgba(255, 255, 255, 0.1) 84.86%) !important;
        opacity: 0 !important;
        transition: opacity 0.3s ease !important;
      }
      
      .enkrypt-start-btn:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 30px rgba(255, 116, 4, 0.4) !important;
      }
      
      .enkrypt-start-btn:hover::before {
        opacity: 1 !important;
      }
      
      .enkrypt-start-btn:active {
        transform: translateY(0) !important;
        box-shadow: 0 4px 14px rgba(255, 116, 4, 0.3) !important;
      }
      
      .enkrypt-start-btn:disabled {
        opacity: 0.5 !important;
        cursor: not-allowed !important;
        transform: none !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
      }
      
      .enkrypt-start-btn:disabled:hover {
        transform: none !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
      }
      
      .enkrypt-status {
        position: fixed !important;
        top: 20px !important;
        right: 20px !important;
        padding: 16px 20px !important;
        background: white !important;
        border-radius: 12px !important;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15) !important;
        z-index: 2147483648 !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        min-width: 300px !important;
        max-width: 400px !important;
        transform: translateY(-10px) !important;
        opacity: 0 !important;
        animation: statusSlideIn 0.3s ease-out forwards !important;
        border: 1px solid #E9EAEB !important;
        backdrop-filter: blur(20px) !important;
      }
      
      @keyframes statusSlideIn {
        to {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
      }
      
      @keyframes pulse {
        0%, 100% { 
          opacity: 1 !important; 
          transform: scale(1) !important; 
        }
        50% { 
          opacity: 0.7 !important; 
          transform: scale(1.1) !important; 
        }
      }
      
      .enkrypt-status.success {
        background: linear-gradient(133deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%) !important;
        border-color: #10B981 !important;
        color: #065F46 !important;
      }
      
      .enkrypt-status.error {
        background: linear-gradient(133deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%) !important;
        border-color: #EF4444 !important;
        color: #991B1B !important;
      }
      
      .enkrypt-trigger-btn {
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        width: 60px !important;
        height: 60px !important;
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        color: white !important;
        border: none !important;
        border-radius: 50% !important;
        cursor: pointer !important;
        font-size: 24px !important;
        z-index: 2147483646 !important;
        box-shadow: 0 8px 30px rgba(255, 116, 4, 0.3) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        pointer-events: auto !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      .enkrypt-trigger-btn:hover {
        transform: translateY(-3px) scale(1.05) !important;
        box-shadow: 0 12px 40px rgba(255, 116, 4, 0.4) !important;
      }
      
      .enkrypt-trigger-btn:active {
        transform: translateY(-1px) scale(1.02) !important;
      }
      
      .enkrypt-api-section {
        margin-bottom: 24px !important;
        background: white !important;
        border: 1px solid #E9EAEB !important;
        border-radius: 12px !important;
        position: relative !important;
        overflow: hidden !important;
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-api-section.valid {
        border-color: #10B981 !important;
        background: linear-gradient(133deg, rgba(16, 185, 129, 0.02) 0%, rgba(16, 185, 129, 0.05) 100%) !important;
      }
      
      .enkrypt-api-section.invalid {
        border-color: #EF4444 !important;
        background: linear-gradient(133deg, rgba(239, 68, 68, 0.02) 0%, rgba(239, 68, 68, 0.05) 100%) !important;
      }
      
      .enkrypt-api-section.neutral {
        border-color: rgba(255, 116, 4, 0.2) !important;
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.02) 12.83%, rgba(255, 59, 162, 0.02) 84.86%) !important;
      }
      
      .enkrypt-api-section::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: radial-gradient(circle at 20% 20%, rgba(255, 116, 4, 0.05) 0%, transparent 60%) !important;
        pointer-events: none !important;
        opacity: 0 !important;
        transition: opacity 0.3s ease !important;
      }
      
      .enkrypt-api-section.neutral::before {
        opacity: 1 !important;
      }
      
      .enkrypt-api-header {
        display: flex !important;
        align-items: center !important;
        padding: 20px !important;
        position: relative !important;
        z-index: 1 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
      }
      
      .enkrypt-api-header:hover {
        background: rgba(255, 116, 4, 0.02) !important;
      }
      
      .enkrypt-api-icon {
        font-size: 20px !important;
        margin-right: 12px !important;
        opacity: 0.8 !important;
        transition: transform 0.3s ease !important;
      }
      
      .enkrypt-api-section.expanded .enkrypt-api-icon {
        transform: rotate(90deg) !important;
      }
      
      .enkrypt-api-title {
        font-weight: 600 !important;
        color: #181D27 !important;
        font-size: 15px !important;
        flex: 1 !important;
      }
      
      .enkrypt-api-status-text {
        font-size: 13px !important;
        margin-right: 12px !important;
        font-weight: 500 !important;
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-api-status-text.valid {
        color: #10B981 !important;
      }
      
      .enkrypt-api-status-text.invalid {
        color: #EF4444 !important;
      }
      
      .enkrypt-api-status-text.neutral {
        color: #414651 !important;
      }
      
      .enkrypt-api-status {
        width: 12px !important;
        height: 12px !important;
        border-radius: 50% !important;
        background: #E9EAEB !important;
        transition: all 0.3s ease !important;
        margin-right: 8px !important;
      }
      
      .enkrypt-api-status.validating {
        background: #FFB800 !important;
        animation: pulse 1.5s ease-in-out infinite !important;
      }
      
      .enkrypt-api-status.valid {
        background: #10B981 !important;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2) !important;
      }
      
      .enkrypt-api-status.invalid {
        background: #EF4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2) !important;
      }
      
      .enkrypt-api-chevron {
        width: 20px !important;
        height: 20px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: transform 0.3s ease !important;
        opacity: 0.5 !important;
        font-size: 12px !important;
      }
      
      .enkrypt-api-section.expanded .enkrypt-api-chevron {
        transform: rotate(180deg) !important;
      }
      
      .enkrypt-api-content {
        max-height: 0 !important;
        overflow: hidden !important;
        transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease !important;
        opacity: 0 !important;
        padding: 0 !important;
      }
      
      .enkrypt-api-section.expanded .enkrypt-api-content {
        max-height: 400px !important;
        opacity: 1 !important;
      }
      
      .enkrypt-api-content-inner {
        padding: 0 20px 20px 20px !important;
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-api-input-container {
        position: relative !important;
        margin-bottom: 12px !important;
      }
      
      .enkrypt-api-input {
        width: 100% !important;
        padding: 16px 50px 16px 20px !important;
        border: 1px solid #E9EAEB !important;
        border-radius: 12px !important;
        font-size: 14px !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        transition: all 0.2s ease !important;
        background: white !important;
        box-sizing: border-box !important;
        color: #181D27 !important;
        outline: none !important;
      }
      
      .enkrypt-api-input:focus {
        border: 1px solid transparent !important;
        background: linear-gradient(white, white) padding-box, linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) border-box !important;
        box-shadow: 0 0 0 4px rgba(255, 116, 4, 0.1) !important;
      }
      
      .enkrypt-api-input::placeholder {
        color: #A4A7AE !important;
      }
      
      .enkrypt-api-validate-btn {
        position: absolute !important;
        right: 8px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        width: 36px !important;
        height: 36px !important;
        border: none !important;
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.2s ease !important;
        color: white !important;
        font-size: 14px !important;
      }
      
      .enkrypt-api-validate-btn:hover {
        transform: translateY(-50%) scale(1.05) !important;
        box-shadow: 0 4px 12px rgba(255, 116, 4, 0.3) !important;
      }
      
      .enkrypt-api-message {
        font-size: 12px !important;
        margin-top: 8px !important;
        padding: 8px 12px !important;
        border-radius: 8px !important;
        position: relative !important;
        z-index: 1 !important;
        opacity: 0 !important;
        transform: translateY(-5px) !important;
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-api-message.success {
        background: rgba(16, 185, 129, 0.1) !important;
        color: #065F46 !important;
        border: 1px solid rgba(16, 185, 129, 0.2) !important;
      }
      
      .enkrypt-api-message.error {
        background: rgba(239, 68, 68, 0.1) !important;
        color: #991B1B !important;
        border: 1px solid rgba(239, 68, 68, 0.2) !important;
      }
      
      .enkrypt-api-help {
        font-size: 12px !important;
        color: #414651 !important;
        margin-top: 8px !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      .enkrypt-api-help a {
        color: #FF7404 !important;
        text-decoration: none !important;
        font-weight: 500 !important;
      }
      
      .enkrypt-api-help a:hover {
        text-decoration: underline !important;
      }
      
      .enkrypt-test-name-input {
        width: 100% !important;
        padding: 14px 16px !important;
        border: 1px solid #E9EAEB !important;
        border-radius: 12px !important;
        font-size: 14px !important;
        font-family: inherit !important;
        transition: all 0.2s ease !important;
        background: white !important;
        box-sizing: border-box !important;
        color: #181D27 !important;
        outline: none !important;
      }
      
      .enkrypt-test-name-input:focus {
        border: 1px solid transparent !important;
        background: linear-gradient(white, white) padding-box, linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) border-box !important;
        box-shadow: 0 0 0 4px rgba(255, 116, 4, 0.1) !important;
      }
      
      .enkrypt-test-name-input::placeholder {
        color: #A4A7AE !important;
      }
      
      .enkrypt-test-name-input-description {
        color: #414651 !important;
        font-size: 12px !important;
        margin-bottom: 12px !important;
        line-height: 1.4 !important;
      }
      
      .enkrypt-custom-test-section {
        margin-bottom: 24px !important;
        background: white !important;
        border: 1px solid #E9EAEB !important;
        border-radius: 12px !important;
        position: relative !important;
        overflow: hidden !important;
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-custom-test-section::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: radial-gradient(circle at 30% 30%, rgba(255, 116, 4, 0.03) 0%, transparent 70%) !important;
        pointer-events: none !important;
        opacity: 0 !important;
        transition: opacity 0.3s ease !important;
      }
      
      .enkrypt-custom-test-section.expanded::before {
        opacity: 1 !important;
      }
      
      .enkrypt-custom-test-header {
        display: flex !important;
        align-items: center !important;
        padding: 20px !important;
        position: relative !important;
        z-index: 1 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
      }
      
      .enkrypt-custom-test-header:hover {
        background: rgba(255, 116, 4, 0.02) !important;
      }
      
      .enkrypt-custom-test-icon {
        font-size: 20px !important;
        margin-right: 12px !important;
        opacity: 0.8 !important;
        transition: transform 0.3s ease !important;
      }
      
      .enkrypt-custom-test-section.expanded .enkrypt-custom-test-icon {
        transform: rotate(90deg) !important;
      }
      
      .enkrypt-custom-test-title {
        font-weight: 600 !important;
        color: #181D27 !important;
        font-size: 15px !important;
        flex: 1 !important;
      }
      
      .enkrypt-custom-test-subtitle {
        color: #414651 !important;
        font-size: 12px !important;
        margin-top: 4px !important;
      }
      
      .enkrypt-custom-test-checkbox {
        width: 20px !important;
        height: 20px !important;
        margin-right: 16px !important;
        accent-color: #FF7404 !important;
        cursor: pointer !important;
      }
      
      .enkrypt-custom-test-chevron {
        width: 24px !important;
        height: 24px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: transform 0.3s ease !important;
        opacity: 0.5 !important;
        font-size: 14px !important;
      }
      
      .enkrypt-custom-test-section.expanded .enkrypt-custom-test-chevron {
        transform: rotate(180deg) !important;
      }
      
      .enkrypt-custom-test-content {
        max-height: 1400px !important;
        overflow: visible !important;
        transition: max-height 0.4s ease, opacity 0.3s ease !important;
        opacity: 1 !important;
        padding: 0 20px 20px 20px !important;
      }
      
      .enkrypt-custom-test-section.collapsed .enkrypt-custom-test-content {
        max-height: 0 !important;
        opacity: 0 !important;
        overflow: hidden !important;
        padding: 0 !important;
      }
      
      .enkrypt-custom-test-content-inner {
        padding: 0 20px 20px 0px !important;
      }
      
      .enkrypt-custom-input-group {
        margin-bottom: 16px !important;
      }
      
      .enkrypt-custom-input-label {
        display: block !important;
        margin-bottom: 8px !important;
        font-weight: 600 !important;
        color: #181D27 !important;
        font-size: 14px !important;
        letter-spacing: -0.01em !important;
      }
      
      .enkrypt-custom-input-description {
        color: #414651 !important;
        font-size: 12px !important;
        margin-bottom: 12px !important;
        line-height: 1.4 !important;
      }
      
      .enkrypt-custom-textarea {
        width: 100% !important;
        min-height: 80px !important;
        padding: 14px 16px !important;
        border: 1px solid #E9EAEB !important;
        border-radius: 12px !important;
        font-size: 14px !important;
        font-family: inherit !important;
        line-height: 1.5 !important;
        resize: vertical !important;
        transition: all 0.2s ease !important;
        background: white !important;
        box-sizing: border-box !important;
        color: #181D27 !important;
        outline: none !important;
      }
      
      .enkrypt-custom-textarea:focus {
        border: 1px solid transparent !important;
        background: linear-gradient(white, white) padding-box, linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) border-box !important;
        box-shadow: 0 0 0 4px rgba(255, 116, 4, 0.1) !important;
      }
      
      .enkrypt-custom-textarea::placeholder {
        color: #A4A7AE !important;
        font-style: italic !important;
      }
      
      .enkrypt-custom-divider {
        height: 1px !important;
        background: linear-gradient(90deg, transparent 0%, rgba(255, 116, 4, 0.2) 50%, transparent 100%) !important;
        margin: 16px 0 !important;
      }
      
      .enkrypt-advanced-tests-section {
        margin-top: 24px !important;
      }
      
      .enkrypt-advanced-tests-title {
        font-weight: 600 !important;
        color: #181D27 !important;
        font-size: 14px !important;
        margin-bottom: 12px !important;
        letter-spacing: -0.01em !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
      }
      
      .enkrypt-advanced-tests-title::before {
        content: '' !important;
        width: 4px !important;
        height: 16px !important;
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        border-radius: 2px !important;
      }
      
      .enkrypt-advanced-tests-grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 8px !important;
        margin-bottom: 16px !important;
      }
      
      .enkrypt-advanced-test-card {
        border: 1px solid #E9EAEB !important;
        border-radius: 8px !important;
        padding: 12px !important;
        cursor: pointer !important;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        background: white !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .enkrypt-advanced-test-card::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.01) 12.83%, rgba(255, 59, 162, 0.01) 84.86%) !important;
        opacity: 0 !important;
        transition: opacity 0.2s ease !important;
      }
      
      .enkrypt-advanced-test-card:hover {
        border-color: rgba(255, 116, 4, 0.2) !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(255, 116, 4, 0.08) !important;
      }
      
      .enkrypt-advanced-test-card:hover::before {
        opacity: 1 !important;
      }
      
      .enkrypt-advanced-test-card.selected {
        border-color: #FF7404 !important;
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.03) 12.83%, rgba(255, 59, 162, 0.03) 84.86%) !important;
        box-shadow: 0 3px 10px rgba(255, 116, 4, 0.12) !important;
      }
      
      .enkrypt-advanced-test-header {
        display: flex !important;
        align-items: center !important;
        margin-bottom: 8px !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      .enkrypt-advanced-test-icon {
        font-size: 16px !important;
        margin-right: 8px !important;
        opacity: 0.8 !important;
      }
      
      .enkrypt-advanced-test-checkbox {
        width: 16px !important;
        height: 16px !important;
        margin-left: auto !important;
        accent-color: #FF7404 !important;
        cursor: pointer !important;
      }
      
      .enkrypt-advanced-test-name {
        font-weight: 600 !important;
        color: #181D27 !important;
        font-size: 12px !important;
        letter-spacing: -0.01em !important;
        flex: 1 !important;
        line-height: 1.3 !important;
      }
      
      .enkrypt-advanced-test-description {
        color: #414651 !important;
        font-size: 10px !important;
        line-height: 1.3 !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      .enkrypt-dataset-config-section {
        margin-bottom: 16px !important;
      }
      
      .enkrypt-dataset-config-title {
        font-weight: 600 !important;
        color: #181D27 !important;
        font-size: 14px !important;
        margin-bottom: 16px !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
      }
      
      .enkrypt-dataset-config-title::before {
        content: '' !important;
        width: 4px !important;
        height: 16px !important;
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        border-radius: 2px !important;
      }
      
      .enkrypt-config-grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr 1fr !important;
        gap: 16px !important;
        margin-bottom: 16px !important;
      }
      
      .enkrypt-config-item {
        display: flex !important;
        flex-direction: column !important;
      }
      
      .enkrypt-config-label {
        display: block !important;
        margin-bottom: 8px !important;
        font-weight: 500 !important;
        color: #181D27 !important;
        font-size: 12px !important;
        text-align: center !important;
      }
      
      .enkrypt-config-input {
        width: 100% !important;
        padding: 8px 12px !important;
        border: 1px solid #E9EAEB !important;
        border-radius: 8px !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        text-align: center !important;
        color: #FF7404 !important;
        background: white !important;
        box-sizing: border-box !important;
        transition: all 0.2s ease !important;
        outline: none !important;
      }
      
      .enkrypt-config-input:focus {
        border: 1px solid transparent !important;
        background: linear-gradient(white, white) padding-box, linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) border-box !important;
        box-shadow: 0 0 0 4px rgba(255, 116, 4, 0.1) !important;
      }
      
      .enkrypt-config-input::-webkit-outer-spin-button,
      .enkrypt-config-input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
      }
      
      .enkrypt-config-input[type=number] {
        -moz-appearance: textfield !important;
      }
      
      .enkrypt-config-slider-container {
        position: relative !important;
        padding: 0 4px !important;
      }
      
      .enkrypt-config-value {
        text-align: center !important;
        margin-top: 4px !important;
        font-weight: 600 !important;
        color: #FF7404 !important;
        font-size: 14px !important;
        min-height: 20px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      
      .enkrypt-config-help {
        font-size: 11px !important;
        color: #414651 !important;
        line-height: 1.4 !important;
        background: rgba(255, 116, 4, 0.05) !important;
        padding: 8px 12px !important;
        border-radius: 8px !important;
        border: 1px solid rgba(255, 116, 4, 0.1) !important;
        margin-top: 8px !important;
      }
      
      .enkrypt-config-help strong {
        color: #FF7404 !important;
        font-weight: 600 !important;
      }
      
      /* Gradient Checkbox Styles */
      .enkrypt-gradient-checkbox {
        cursor: pointer !important;
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-gradient-checkbox.checked {
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        border-color: #FF7404 !important;
        transform: scale(1.1) !important;
        box-shadow: 0 0 0 3px rgba(255, 116, 4, 0.2) !important;
      }
      
      .enkrypt-gradient-checkbox.checked .enkrypt-checkbox-icon {
        opacity: 1 !important;
        stroke: white !important;
      }
      
      .enkrypt-gradient-checkbox:hover {
        border-color: rgba(255, 116, 4, 0.5) !important;
        transform: scale(1.02) !important;
      }
      
      /* Test Checkbox Specific Styles */
      .enkrypt-test-checkbox.checked {
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        border-color: #FF7404 !important;
        transform: scale(1.1) !important;
        box-shadow: 0 0 0 3px rgba(255, 116, 4, 0.2) !important;
      }
      
      .enkrypt-test-checkbox.checked .enkrypt-checkbox-icon {
        opacity: 1 !important;
        stroke: white !important;
      }
      
      /* Radio Button Styles */
      .enkrypt-radio-input:checked + .enkrypt-radio-dot {
        opacity: 1 !important;
      }
      
      .enkrypt-radio-input:not(:checked) + .enkrypt-radio-dot {
        opacity: 0 !important;
      }
      
      .enkrypt-radio-input:hover {
        border-color: rgba(255, 116, 4, 0.5) !important;
      }
      
      /* Test Type Card Hover and Selected States */
      .enkrypt-test-type-card {
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-test-type-card:hover {
        border-color: rgba(255, 116, 4, 0.3) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 12px rgba(255, 116, 4, 0.1) !important;
        background: rgba(255, 116, 4, 0.01) !important;
      }
      
      .enkrypt-test-type-card.selected {
        border-color: #FF7404 !important;
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.08) 12.83%, rgba(255, 59, 162, 0.08) 84.86%) !important;
        box-shadow: 0 4px 14px rgba(255, 116, 4, 0.15) !important;
        transform: translateY(-1px) !important;
      }
      
      .enkrypt-test-type-card.selected:hover {
        border-color: #FF7404 !important;
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.12) 12.83%, rgba(255, 59, 162, 0.12) 84.86%) !important;
        box-shadow: 0 6px 18px rgba(255, 116, 4, 0.2) !important;
        transform: translateY(-3px) !important;
      }
      
      /* Filter Checkbox Styles */
      .enkrypt-filter-checkbox {
        transition: all 0.3s ease !important;
      }
      
      .enkrypt-filter-checkbox:hover .enkrypt-gradient-checkbox {
        border-color: rgba(255, 116, 4, 0.5) !important;
        transform: scale(1.02) !important;
      }
      
      .enkrypt-filter-checkbox .enkrypt-gradient-checkbox.checked {
        background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
        border-color: #FF7404 !important;
        transform: scale(1.05) !important;
        box-shadow: 0 0 0 2px rgba(255, 116, 4, 0.2) !important;
      }
      
      .enkrypt-filter-checkbox .enkrypt-gradient-checkbox.checked + span {
        color: #FF7404 !important;
        font-weight: 600 !important;
      }
      
      /* Loading Spinner Animation */
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .enkrypt-loading-spinner {
        animation: spin 1s linear infinite !important;
      }

      /* Setup Overlay Styles */
      .enkrypt-setup-overlay {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background: linear-gradient(180deg, var(--Component-colors-Utility-Pink-utility-pink-200, #FCCEEE) 0%, var(--Colors-Foreground-fg-warning-primary, #DC6803) 100%) !important;
        border-radius: 20px !important;
        z-index: 1000 !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif !important;
        display: flex !important;
        flex-direction: column !important;
        overflow: hidden !important;
        opacity: 0 !important;
        transform: scale(0.95) !important;
        transition: all 0.3s ease !important;
      }

      .enkrypt-setup-overlay input:focus {
        border: 1px solid transparent !important;
        background: linear-gradient(180deg, var(--Component-colors-Utility-Pink-utility-pink-200, #FCCEEE) 0%, var(--Colors-Foreground-fg-warning-primary, #DC6803) 100%) !important;
        box-shadow: 0 0 0 4px rgba(255, 116, 4, 0.1) !important;
      }

      .enkrypt-setup-overlay button:hover:not(:disabled) {
        transform: translateY(-50%) scale(1.05) !important;
        box-shadow: 0 4px 12px rgba(255, 116, 4, 0.3) !important;
      }
    `;
  }

  isInjected() {
    return this.stylesInjected;
  }
};

// Singleton instance
window.EnkryptModules.stylesManager = new window.EnkryptModules.StylesManager(); 