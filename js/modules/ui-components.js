// UI Components module

// Create global EnkryptModules namespace if it doesn't exist
window.EnkryptModules = window.EnkryptModules || {};

window.EnkryptModules.UIComponents = class UIComponents {
  
  // Create header component
  createHeader() {
    const header = document.createElement('div');
    header.className = 'enkrypt-header';
    header.style.cssText = `
      background: white !important;
      padding: 16px 20px !important;
      border-bottom: 1px solid #E9EAEB !important;
      position: sticky !important;
      top: 0 !important;
      z-index: 10 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      height: 64px !important;
      min-height: 64px !important;
      box-sizing: border-box !important;
    `;
    
    header.innerHTML = `
      <div style="display: flex !important; align-items: center !important; gap: 12px !important; flex: 1 !important; height: 100% !important;">
        <div style="width: 32px !important; height: 32px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important;">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="14.6819" fill="url(#paint0_linear_3858_78085)"/>
            <path d="M12.198 24.2572C10.6672 23.1011 9.7168 21.2079 9.7168 19.0836C9.7168 16.4751 12.8691 13.2199 14.4471 10.5645C16.094 7.77173 15.9307 6.5 15.9307 6.5C15.9307 6.5 19.5945 9.59261 18.2959 13.7727C17.9259 14.9722 14.6285 19.322 14.146 20.041C12.4955 22.5122 12.198 24.2572 12.198 24.2572Z" fill="white"/>
            <path d="M20.9375 14.1172C21.7029 16.1043 22.2833 18.1564 22.2833 19.0813C22.2833 22.6146 19.4103 25.5013 15.8372 25.5013C15.4201 25.5013 15.0029 25.4543 14.6075 25.3857C14.6075 25.3857 14.5531 23.3806 17.5966 19.6123C20.6401 15.8441 20.9375 14.1172 20.9375 14.1172Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_3858_78085" x1="4.29268" y1="3.90244" x2="28.0976" y2="26.1463" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF7404"/>
                <stop offset="1" stop-color="#FF3BA2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3 style="margin: 0 !important; color: #1a1a1a !important; font-size: 18px !important; font-weight: 600 !important; line-height: 1.2 !important; display: flex !important; align-items: center !important;">Enkrypt AI - R.A.Y.D.E.R</h3>
      </div>
      <div style="display: flex !important; align-items: center !important; gap: 12px !important; flex-shrink: 0 !important; height: 100% !important;">
        <button id="enkrypt-settings-btn" class="enkrypt-settings-btn" title="Settings" style="width: 32px !important; height: 32px !important; min-width: 32px !important; min-height: 32px !important; border: none !important; background: rgba(243, 244, 246, 0) !important; border-radius: 8px !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; color: #6B7280 !important; transition: all 0.2s ease !important; padding: 0 !important; margin: 0 50px 0 0 !important; box-sizing: border-box !important; flex-shrink: 0 !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style="display: block !important;">
            <g clip-path="url(#clip0_3858_78098)">
              <path d="M9.99984 12.4974C11.3805 12.4974 12.4998 11.3781 12.4998 9.9974C12.4998 8.61668 11.3805 7.4974 9.99984 7.4974C8.61913 7.4974 7.49984 8.61668 7.49984 9.9974C7.49984 11.3781 8.61913 12.4974 9.99984 12.4974Z" stroke="#181D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.6059 12.2701C15.5051 12.4986 15.475 12.7521 15.5195 12.9978C15.5641 13.2436 15.6812 13.4704 15.8559 13.6489L15.9014 13.6944C16.0422 13.8351 16.154 14.0022 16.2302 14.1861C16.3065 14.3701 16.3457 14.5672 16.3457 14.7663C16.3457 14.9655 16.3065 15.1626 16.2302 15.3465C16.154 15.5305 16.0422 15.6976 15.9014 15.8383C15.7606 15.9792 15.5935 16.0909 15.4096 16.1672C15.2257 16.2434 15.0285 16.2827 14.8294 16.2827C14.6303 16.2827 14.4331 16.2434 14.2492 16.1672C14.0652 16.0909 13.8981 15.9792 13.7574 15.8383L13.712 15.7929C13.5334 15.6182 13.3066 15.501 13.0609 15.4565C12.8151 15.4119 12.5617 15.442 12.3332 15.5429C12.1091 15.6389 11.918 15.7983 11.7834 16.0016C11.6488 16.2048 11.5766 16.443 11.5756 16.6868V16.8156C11.5756 17.2174 11.416 17.6028 11.1318 17.887C10.8477 18.1711 10.4623 18.3307 10.0604 18.3307C9.6586 18.3307 9.27322 18.1711 8.98907 17.887C8.70492 17.6028 8.54529 17.2174 8.54529 16.8156V16.7474C8.53943 16.4966 8.45826 16.2535 8.31235 16.0494C8.16643 15.8454 7.96252 15.69 7.72711 15.6035C7.49861 15.5026 7.24515 15.4725 6.99939 15.5171C6.75364 15.5616 6.52687 15.6788 6.34832 15.8535L6.30287 15.8989C6.16215 16.0398 5.99505 16.1515 5.81111 16.2278C5.62717 16.304 5.43001 16.3433 5.2309 16.3433C5.03178 16.3433 4.83462 16.304 4.65069 16.2278C4.46675 16.1515 4.29965 16.0398 4.15893 15.8989C4.01805 15.7582 3.9063 15.5911 3.83005 15.4072C3.7538 15.2232 3.71455 15.0261 3.71455 14.8269C3.71455 14.6278 3.7538 14.4307 3.83005 14.2467C3.9063 14.0628 4.01805 13.8957 4.15893 13.755L4.20438 13.7095C4.37903 13.531 4.49619 13.3042 4.54075 13.0584C4.58531 12.8127 4.55523 12.5592 4.45438 12.3307C4.35835 12.1067 4.19889 11.9156 3.99564 11.781C3.79239 11.6464 3.55422 11.5741 3.31044 11.5732H3.18166C2.77981 11.5732 2.39443 11.4135 2.11028 11.1294C1.82614 10.8452 1.6665 10.4598 1.6665 10.058C1.6665 9.65616 1.82614 9.27077 2.11028 8.98663C2.39443 8.70248 2.77981 8.54285 3.18166 8.54285H3.24984C3.50059 8.53699 3.74378 8.45582 3.94779 8.3099C4.1518 8.16399 4.3072 7.96007 4.39378 7.72467C4.49462 7.49617 4.5247 7.2427 4.48014 6.99695C4.43558 6.7512 4.31843 6.52443 4.14378 6.34588L4.09832 6.30043C3.95745 6.15971 3.84569 5.99261 3.76944 5.80867C3.69319 5.62473 3.65395 5.42757 3.65395 5.22846C3.65395 5.02934 3.69319 4.83218 3.76944 4.64824C3.84569 4.46431 3.95745 4.2972 4.09832 4.15649C4.23904 4.01561 4.40614 3.90386 4.59008 3.82761C4.77402 3.75136 4.97118 3.71211 5.17029 3.71211C5.36941 3.71211 5.56657 3.75136 5.7505 3.82761C5.93444 3.90386 6.10154 4.01561 6.24226 4.15649L6.28772 4.20194C6.46626 4.37659 6.69303 4.49375 6.93879 4.53831C7.18454 4.58287 7.43801 4.55279 7.6665 4.45194H7.72711C7.95118 4.35591 8.14228 4.19645 8.27688 3.9932C8.41148 3.78995 8.48371 3.55178 8.48469 3.308V3.17921C8.48469 2.77737 8.64432 2.39199 8.92846 2.10784C9.21261 1.82369 9.59799 1.66406 9.99984 1.66406C10.4017 1.66406 10.7871 1.82369 11.0712 2.10784C11.3554 2.39199 11.515 2.77737 11.515 3.17921V3.2474C11.516 3.49117 11.5882 3.72935 11.7228 3.9326C11.8574 4.13585 12.0485 4.2953 12.2726 4.39134C12.5011 4.49218 12.7545 4.52226 13.0003 4.4777C13.246 4.43314 13.4728 4.31598 13.6514 4.14134L13.6968 4.09588C13.8375 3.95501 14.0046 3.84325 14.1886 3.767C14.3725 3.69075 14.5697 3.65151 14.7688 3.65151C14.9679 3.65151 15.1651 3.69075 15.349 3.767C15.5329 3.84325 15.7 3.95501 15.8407 4.09588C15.9816 4.2366 16.0934 4.4037 16.1696 4.58764C16.2459 4.77157 16.2851 4.96874 16.2851 5.16785C16.2851 5.36696 16.2459 5.56413 16.1696 5.74806C16.0934 5.932 15.9816 6.0991 15.8407 6.23982L15.7953 6.28527C15.6206 6.46382 15.5035 6.69059 15.4589 6.93634C15.4144 7.1821 15.4444 7.43557 15.5453 7.66406V7.72467C15.6413 7.94874 15.8008 8.13983 16.004 8.27444C16.2073 8.40904 16.4455 8.48127 16.6892 8.48224H16.818C17.2199 8.48224 17.6052 8.64188 17.8894 8.92602C18.1735 9.21017 18.3332 9.59555 18.3332 9.9974C18.3332 10.3992 18.1735 10.7846 17.8894 11.0688C17.6052 11.3529 17.2199 11.5125 16.818 11.5125H16.7498C16.5061 11.5135 16.2679 11.5858 16.0646 11.7204C15.8614 11.855 15.7019 12.0461 15.6059 12.2701Z" stroke="#181D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_3858_78098">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button id="enkrypt-close-btn" class="enkrypt-close-btn" title="Close" style="width: 32px !important; height: 32px !important; min-width: 32px !important; min-height: 32px !important; border: none !important; background: rgba(243, 244, 246, 0) !important; border-radius: 8px !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; color: #6B7280 !important; transition: all 0.2s ease !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box !important; flex-shrink: 0 !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="#181D27" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    `;

    return header;
  }

  // Create close button
  createCloseButton(onClose) {
    // Close button is now integrated into the header layout
    // Just return the onclick handler for use with the button in header
    setTimeout(() => {
      const closeButton = document.getElementById('enkrypt-close-btn');
      if (closeButton) {
        closeButton.onclick = onClose;
      }
    }, 100);
    
    // Return empty div since button is now in header
    return document.createElement('div');
  }

  // Create API section
  createApiSection() {
    const apiSection = document.createElement('div');
    apiSection.className = 'enkrypt-api-section neutral';
    apiSection.style.cssText = `
      margin-bottom: 24px !important;
      background: white !important;
      border: 2px solid #f1f1f1 !important;
      border-radius: 16px !important;
      position: relative !important;
      overflow: hidden !important;
      transition: all 0.3s ease !important;
    `;
    
    apiSection.innerHTML = `
      <div class="enkrypt-api-header" style="display: flex !important; align-items: center !important; padding: 20px !important; position: relative !important; z-index: 1 !important; cursor: pointer !important; transition: all 0.2s ease !important;">
        <div class="enkrypt-api-icon" style="font-size: 20px !important; margin-right: 12px !important; opacity: 0.8 !important; transition: transform 0.3s ease !important;">✉️</div>
        <div class="enkrypt-api-title" style="font-weight: 600 !important; color: #1a1a1a !important; font-size: 15px !important; flex: 1 !important;">email</div>
        <div class="enkrypt-api-status-text neutral" id="api-status-text" style="font-size: 13px !important; margin-right: 12px !important; font-weight: 500 !important; color: #666 !important; transition: all 0.3s ease !important;">Not configured</div>
        <div class="enkrypt-api-status" id="api-status" style="width: 12px !important; height: 12px !important; border-radius: 50% !important; background: #f1f1f1 !important; transition: all 0.3s ease !important; margin-right: 8px !important;"></div>
        <div class="enkrypt-api-chevron" style="width: 20px !important; height: 20px !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: transform 0.3s ease !important; opacity: 0.5 !important; font-size: 12px !important;">▼</div>
      </div>
      <div class="enkrypt-api-content" id="api-content" style="max-height: 0 !important; overflow: hidden !important; transition: all 0.3s ease !important; opacity: 0 !important; padding: 0 !important;">
        <div style="padding: 0 20px 20px 20px !important;">
          <div class="enkrypt-api-input-container" style="position: relative !important; margin-bottom: 12px !important;">
            <input type="email" id="enkrypt-api-key" class="enkrypt-api-input" placeholder="Enter your email address..." 
                   style="width: 100% !important; padding: 16px 50px 16px 20px !important; border: 2px solid #f1f1f1 !important; border-radius: 12px !important; font-size: 14px !important; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important; transition: all 0.2s ease !important; background: white !important; box-sizing: border-box !important; color: #333 !important;">
            <button type="button" id="api-validate-btn" class="enkrypt-api-validate-btn" 
                    style="position: absolute !important; right: 8px !important; top: 50% !important; transform: translateY(-50%) !important; width: 36px !important; height: 36px !important; border: none !important; background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important; border-radius: 8px !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: all 0.2s ease !important; color: white !important; font-size: 14px !important;">
              ✓
            </button>
          </div>
          <div class="enkrypt-api-message" id="api-message" style="font-size: 12px !important; margin-top: 8px !important; padding: 8px 12px !important; border-radius: 8px !important; position: relative !important; z-index: 1 !important; opacity: 0 !important; transform: translateY(-5px) !important; transition: all 0.3s ease !important;"></div>
          <div class="enkrypt-api-help" style="font-size: 12px !important; color: #666 !important; margin-top: 8px !important; position: relative !important; z-index: 1 !important;">
            You can view the red team results on the <a href="https://app.enkryptai.com/red-teaming" target="_blank" style="color: #FF7F00 !important; text-decoration: none !important; font-weight: 500 !important;">Enkrypt AI Dashboard</a> using your email address
          </div>
        </div>
      </div>
    `;

    return apiSection;
  }

  // Create test name section
  createTestNameSection() {
    const testNameSection = document.createElement('div');
    testNameSection.className = 'enkrypt-test-name-section';
    testNameSection.style.cssText = 'margin-bottom: 0px !important;';
    testNameSection.innerHTML = `
      <h4 class="enkrypt-section-title" style="margin: 0 0 12px 0 !important; color: #1a1a1a !important; font-size: 16px !important; font-weight: 600 !important;">Test Name (Optional)</h4>
      <div class="enkrypt-test-name-input-group">
        <div class="enkrypt-test-name-input-description" style="color: #666 !important; font-size: 12px !important; margin-bottom: 12px !important; line-height: 1.4 !important;">Provide a descriptive name for your red team test. If not, the URL will be used.</div>
        <input 
          type="text" 
          id="test-name-input" 
          class="enkrypt-test-name-input" 
          placeholder="Red Team Test 1"
          style="width: 100% !important; padding: 14px 16px !important; border: 2px solid #f1f1f1 !important; border-radius: 12px !important; font-size: 14px !important; font-family: inherit !important; transition: all 0.2s ease !important; background: white !important; box-sizing: border-box !important; color: #333 !important;"
        />
      </div>
    `;
    return testNameSection;
  }

  // Create test grid with filters (TaskConfig equivalent)
  createTestGrid() {
    const testGridSection = document.createElement('div');
    testGridSection.className = 'enkrypt-test-types-section';
    testGridSection.style.cssText = `
      margin-bottom: 0px !important;
      background: white !important;
      border: 2px solid #f1f1f1 !important;
      border-radius: 16px !important;
      position: relative !important;
      overflow: hidden !important;
      transition: all 0.3s ease !important;
    `;
    
    // Define test types matching the reference structure
    const testTypes = [
      {
        key: "bias",
        label: "Bias & Fairness Testing",
        value: "bias_test",
        tags: ["EU AI ACT", "NIST AI 600"],
        comingSoon: false,
        tooltip: "Assess inherent bias of the AI System against race, religion, gender and health."
      },
      {
        key: "toxicity",
        label: "Toxicity & Hate Speech",
        value: "toxicity_test",
        tags: ["EU AI ACT", "NIST AI 600"],
        comingSoon: false,
        tooltip: "Detect AI System capability to generate harmful, offensive, or toxic language."
      },
      {
        key: "harmful",
        label: "Harmful Test",
        value: "harmful_test",
        tags: ["OWASP Top 10", "NIST AI 600"],
        comingSoon: false,
        tooltip: "Evaluate AI System behavior to attack promots related to physical, emotional, or social harm."
      },
      {
        key: "cbrn",
        label: "CBRN / Dangerous Know.",
        value: "cbrn_test",
        tags: ["EU AI ACT", "NIST AI 600"],
        comingSoon: false,
        tooltip: "Assess AI System responses to attack prompts related to chemical, biological and cybersecurity threats."
      },
      {
        key: "insecure",
        value: "insecure_code_test",
        label: "Insecure Code Tests",
        tags: ["EU AI ACT", "NIST AI 600"],
        comingSoon: false,
        tooltip: "Identify generation of unsafe, exploitable, or harmful code outputs."
      },
      {
        key: "hallucination",
        label: "Hallucination Test",
        value: "hallucination_test",
        tags: ["NIST AI 600"],
        comingSoon: false,
        tooltip: "Tests for AI hallucinations and false information generation."
      },
      {
        key: "pii",
        label: "PII Test",
        value: "pii_test",
        tags: ["OWASP Top 10", "EU AI ACT"],
        comingSoon: false,
        tooltip: "Tests for Personal Identifiable Information leakage."
      },
      {
        key: "sponge",
        label: "Sponge Test",
        value: "sponge_test",
        tags: ["OWASP Top 10"],
        comingSoon: false,
        tooltip: "Tests for resource consumption and denial of service vulnerabilities."
      },
      {
        key: "misinformation",
        label: "Misinformation Test",
        value: "misinformation_test",
        tags: ["EU AI ACT", "NIST AI 600"],
        comingSoon: false,
        tooltip: "Tests for spread of false or misleading information."
      },
      {
        key: "copyright",
        label: "Copyright Test",
        value: "copyright_test",
        tags: ["EU AI ACT"],
        comingSoon: false,
        tooltip: "Tests for copyright infringement and intellectual property violations."
      }
    ];

    testGridSection.innerHTML = `
      <!-- Header -->
      <div class="enkrypt-test-types-header" id="test-types-header" style="display: flex !important; align-items: center !important; padding: 20px !important; position: relative !important; z-index: 1 !important; cursor: pointer !important; transition: all 0.2s ease !important; background: white !important;">
        <div class="enkrypt-test-types-icon" style="margin-right: 12px !important; opacity: 0.8 !important; transition: transform 0.3s ease !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.6668 10.4141V5.66406C16.6668 4.26393 16.6668 3.56387 16.3943 3.02909C16.1547 2.55868 15.7722 2.17623 15.3018 1.93655C14.767 1.66406 14.067 1.66406 12.6668 1.66406H7.3335C5.93336 1.66406 5.2333 1.66406 4.69852 1.93655C4.22811 2.17623 3.84566 2.55868 3.60598 3.02909C3.3335 3.56387 3.3335 4.26393 3.3335 5.66406V14.3307C3.3335 15.7309 3.3335 16.4309 3.60598 16.9657C3.84566 17.4361 4.22811 17.8186 4.69852 18.0582C5.2333 18.3307 5.93336 18.3307 7.3335 18.3307H10.0002M11.6668 9.16406H6.66683M8.3335 12.4974H6.66683M13.3335 5.83073H6.66683M12.0835 15.8307L13.7502 17.4974L17.5002 13.7474" stroke="url(#paint0_linear_3858_10957)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_3858_10957" x1="5.2339" y1="3.69658" x2="17.3383" y2="13.3106" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF7404"/>
                <stop offset="1" stop-color="#FF3BA2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div style="flex: 1 !important; display: flex !important; flex-direction: column !important;">
          <div class="enkrypt-test-types-title" style="font-weight: 600 !important; color: #181D27 !important; font-size: 16px !important; display: flex !important; align-items: center !important; gap: 8px !important;">
            Test Types
            <span style="color: #EF4444 !important; font-weight: 600 !important;">*</span>
            <div class="enkrypt-tooltip" title="Each Test type contains a list of attack prompts specifc to the test. These attack prompts are bucketed into risk categories. The Red teaming report contains an analysis of successful attacks for various test types and their risk categories." style="width: 16px !important; height: 16px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: help !important;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_3858_10962)">
                  <path d="M6.06016 6.0026C6.2169 5.55705 6.52626 5.18134 6.93347 4.94203C7.34067 4.70271 7.81943 4.61523 8.28495 4.69508C8.75047 4.77493 9.17271 5.01695 9.47688 5.37829C9.78106 5.73963 9.94753 6.19695 9.94683 6.66927C9.94683 8.0026 7.94683 8.66927 7.94683 8.66927M8.00016 11.3359H8.00683M14.6668 8.0026C14.6668 11.6845 11.6821 14.6693 8.00016 14.6693C4.31826 14.6693 1.3335 11.6845 1.3335 8.0026C1.3335 4.32071 4.31826 1.33594 8.00016 1.33594C11.6821 1.33594 14.6668 4.32071 14.6668 8.0026Z" stroke="#A4A7AE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_3858_10962">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="enkrypt-test-types-chevron" style="width: 24px !important; height: 24px !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: transform 0.3s ease !important; opacity: 0.5 !important; font-size: 14px !important;">▼</div>
      </div>

      <!-- Content -->
      <div class="enkrypt-test-types-content" id="test-types-content" style="max-height: 1000px !important; overflow: hidden !important; transition: max-height 0.4s ease, opacity 0.3s ease !important; opacity: 1 !important; visibility: visible !important;">
        <div class="enkrypt-test-types-content-inner" style="padding: 0 20px 20px 20px !important;">
          
          <!-- Filter Checkboxes -->
          <div style="display: flex !important; flex-wrap: wrap !important; gap: 16px !important; margin-bottom: 20px !important;">
            <label class="enkrypt-filter-checkbox" style="display: flex !important; align-items: center !important; gap: 8px !important; cursor: pointer !important;">
              <div class="enkrypt-gradient-checkbox" data-filter="select-all" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E9EAEB !important; border-radius: 6px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span style="font-size: 14px !important; color: #181D27 !important; font-weight: 500 !important;">Select All</span>
            </label>
            
            <label class="enkrypt-filter-checkbox" style="display: flex !important; align-items: center !important; gap: 8px !important; cursor: pointer !important;">
              <div class="enkrypt-gradient-checkbox" data-filter="nist-ai-600" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E9EAEB !important; border-radius: 6px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span style="font-size: 14px !important; color: #181D27 !important; font-weight: 500 !important;">NIST AI 600</span>
            </label>
            
            <label class="enkrypt-filter-checkbox" style="display: flex !important; align-items: center !important; gap: 8px !important; cursor: pointer !important;">
              <div class="enkrypt-gradient-checkbox" data-filter="owasp-top-10" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E9EAEB !important; border-radius: 6px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span style="font-size: 14px !important; color: #181D27 !important; font-weight: 500 !important;">OWASP Top 10</span>
            </label>
            
            <label class="enkrypt-filter-checkbox" style="display: flex !important; align-items: center !important; gap: 8px !important; cursor: pointer !important;">
              <div class="enkrypt-gradient-checkbox" data-filter="eu-ai-act" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E9EAEB !important; border-radius: 6px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span style="font-size: 14px !important; color: #181D27 !important; font-weight: 500 !important;">EU AI Act</span>
            </label>
          </div>

          <!-- Test Type Grid -->
          <div class="enkrypt-test-types-grid" style="display: grid !important; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important; gap: 16px !important;">
            ${testTypes.map(testType => `
              <label class="enkrypt-test-type-card" data-test-key="${testType.key}" data-tags="${testType.tags.join(',')}" style="display: flex !important; cursor: pointer !important; align-items: flex-start !important; gap: 12px !important; border-radius: 12px !important; border: 1px solid #E9EAEB !important; padding: 16px !important; transition: all 0.3s ease !important; background: white !important;">
                <div style="margin-top: 4px !important;">
                  <div class="enkrypt-gradient-checkbox enkrypt-test-checkbox" data-test-value="${testType.value}" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E9EAEB !important; border-radius: 6px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important;">
                      <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                        <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
                </div>
                <div style="flex: 1 !important; display: flex !important; flex-direction: column !important; gap: 8px !important;">
                  <div style="display: flex !important; align-items: center !important; gap: 8px !important;">
                    <span style="font-weight: 600 !important; color: #181D27 !important; font-size: 14px !important; flex: 1 !important;">${testType.label}</span>
                    <div class="enkrypt-tooltip" title="${testType.tooltip}" style="width: 16px !important; height: 16px !important; border-radius: 50% !important; background: rgba(233, 234, 235, 0) !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: help !important;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_3858_10962)">
                          <path d="M6.06016 6.0026C6.2169 5.55705 6.52626 5.18134 6.93347 4.94203C7.34067 4.70271 7.81943 4.61523 8.28495 4.69508C8.75047 4.77493 9.17271 5.01695 9.47688 5.37829C9.78106 5.73963 9.94753 6.19695 9.94683 6.66927C9.94683 8.0026 7.94683 8.66927 7.94683 8.66927M8.00016 11.3359H8.00683M14.6668 8.0026C14.6668 11.6845 11.6821 14.6693 8.00016 14.6693C4.31826 14.6693 1.3335 11.6845 1.3335 8.0026C1.3335 4.32071 4.31826 1.33594 8.00016 1.33594C11.6821 1.33594 14.6668 4.32071 14.6668 8.0026Z" stroke="#A4A7AE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_3858_10962">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  ${testType.tags.length > 0 ? `
                    <div style="display: flex !important; gap: 8px !important; flex-wrap: wrap !important;">
                      ${testType.tags.map((tag, i) => `
                        <span style="border-radius: 12px !important; border: 1px solid ${i === 0 ? '#FF7404' : '#22C55E'} !important; padding: 2px 8px !important; text-align: center !important; font-size: 10px !important; font-weight: 600 !important; ${i === 0 ? 'background: linear-gradient(to right, #FF7404, #FF3BA2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent;' : 'background: #F0FDF4; color: #16A34A;'}">${tag}</span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </label>
            `).join('')}
          </div>
          
        </div>
      </div>
    `;

    return testGridSection;
  }

  // Create custom test section (updated to match reference design)
  createCustomTestSection() {
    const customTestSection = document.createElement('div');
    customTestSection.className = 'enkrypt-custom-test-section collapsed';
    customTestSection.id = 'custom-test-section';
    customTestSection.style.cssText = `
      margin-bottom: 0px !important;
      background: white !important;
      border: 2px solid #f1f1f1 !important;
      border-radius: 16px !important;
      position: relative !important;
      overflow: hidden !important;
      transition: all 0.3s ease !important;
      z-index: 10 !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      height: auto !important;
      min-height: 60px !important;
    `;

    // Force visibility with style attribute for maximum specificity
    customTestSection.setAttribute('style', customTestSection.style.cssText + 'display: block !important; visibility: visible !important; opacity: 1 !important;');
    
    customTestSection.innerHTML = `
      <!-- Header -->
      <div class="enkrypt-custom-test-header" id="custom-test-header" style="display: flex !important; align-items: center !important; padding: 20px !important; position: relative !important; z-index: 1 !important; cursor: pointer !important; transition: all 0.2s ease !important; background: white !important; visibility: visible !important; opacity: 1 !important;">
        <div class="enkrypt-custom-test-icon" style="margin-right: 12px !important; opacity: 0.8 !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 4.9974V8.7484C7.5 9.2075 7.5 9.43706 7.44277 9.64978C7.39206 9.83825 7.30864 10.0164 7.19631 10.176C7.06953 10.3561 6.89319 10.5031 6.54049 10.797L3.45951 13.3645C3.10681 13.6584 2.93047 13.8053 2.80369 13.9855C2.69136 14.1451 2.60794 14.3232 2.55723 14.5117C2.5 14.7244 2.5 14.954 2.5 15.4131V15.6641C2.5 16.5975 2.5 17.0642 2.68166 17.4207C2.84144 17.7343 3.09641 17.9893 3.41002 18.1491C3.76654 18.3307 4.23325 18.3307 5.16667 18.3307H14.8333C15.7668 18.3307 16.2335 18.3307 16.59 18.1491C16.9036 17.9893 17.1586 17.7343 17.3183 17.4207C17.5 17.0642 17.5 16.5975 17.5 15.6641V15.4131C17.5 14.954 17.5 14.7244 17.4428 14.5117C17.3921 14.3232 17.3086 14.1451 17.1963 13.9855C17.0695 13.8053 16.8932 13.6584 16.5405 13.3645L13.4595 10.797C13.1068 10.5031 12.9305 10.3561 12.8037 10.176C12.6914 10.0164 12.6079 9.83825 12.5572 9.64978C12.5 9.43706 12.5 9.2075 12.5 8.7484V4.9974M6.91667 4.9974H13.0833C13.3167 4.9974 13.4334 4.9974 13.5225 4.95198C13.6009 4.91203 13.6646 4.84829 13.7046 4.76989C13.75 4.68076 13.75 4.56408 13.75 4.33073V2.33073C13.75 2.09737 13.75 1.9807 13.7046 1.89157C13.6646 1.81317 13.6009 1.74942 13.5225 1.70948C13.4334 1.66406 13.3167 1.66406 13.0833 1.66406H6.91667C6.68331 1.66406 6.56663 1.66406 6.4775 1.70948C6.3991 1.74942 6.33536 1.81317 6.29541 1.89157C6.25 1.9807 6.25 2.09737 6.25 2.33073V4.33073C6.25 4.56408 6.25 4.68076 6.29541 4.76989C6.33536 4.84829 6.3991 4.91203 6.4775 4.95198C6.56663 4.9974 6.68331 4.9974 6.91667 4.9974ZM4.58333 14.1641H15.4167C15.8039 14.1641 15.9975 14.1641 16.1585 14.1961C16.8196 14.3276 17.3365 14.8444 17.468 15.5056C17.5 15.6666 17.5 15.8602 17.5 16.2474C17.5 16.6346 17.5 16.8282 17.468 16.9892C17.3365 17.6504 16.8196 18.1672 16.1585 18.2987C15.9975 18.3307 15.8039 18.3307 15.4167 18.3307H4.58333C4.19612 18.3307 4.00251 18.3307 3.84152 18.2987C3.18037 18.1672 2.66354 17.6504 2.53202 16.9892C2.5 16.8282 2.5 16.6346 2.5 16.2474C2.5 15.8602 2.5 15.6666 2.53202 15.5056C2.66354 14.8444 3.18037 14.3276 3.84152 14.1961C4.00251 14.1641 4.19612 14.1641 4.58333 14.1641Z" stroke="url(#paint0_linear_3858_75289)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_3858_75289" x1="4.5122" y1="3.69658" x2="16.755" y2="13.9926" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF7404"/>
                <stop offset="1" stop-color="#FF3BA2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div style="flex: 1 !important; display: flex !important; flex-direction: column !important;">
          <div class="enkrypt-custom-test-title" style="font-weight: 600 !important; color: #181D27 !important; font-size: 16px !important;">Custom Tests</div>
        </div>
        <div class="enkrypt-custom-test-chevron" style="width: 24px !important; height: 24px !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: transform 0.3s ease !important; opacity: 0.5 !important; font-size: 14px !important;">▼</div>
      </div>

      <!-- Content -->
      <div class="enkrypt-custom-test-content" id="custom-test-content" style="max-height: 0 !important; overflow: hidden !important; transition: max-height 0.4s ease, opacity 0.3s ease !important; opacity: 0 !important; visibility: hidden !important; position: relative !important; z-index: 5 !important;">
        <div class="enkrypt-custom-test-content-inner" style="padding: 0 20px 20px 0px !important;">
          
          <!-- Test Type Cards (2x2 Grid) -->
          <div style="display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 12px !important; margin-bottom: 20px !important;">
            
            <!-- Advanced Bias Test -->
            <label class="enkrypt-custom-test-type" data-test-value="adv_bias_test" style="display: flex !important; cursor: pointer !important; align-items: flex-start !important; gap: 12px !important; border-radius: 8px !important; border: 1px solid #E5E7EB !important; padding: 16px !important; transition: all 0.3s ease !important; background: white !important;">
              <div class="enkrypt-gradient-checkbox enkrypt-custom-test-checkbox" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E5E7EB !important; border-radius: 4px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-top: 2px !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div style="flex: 1 !important;">
                <div style="font-weight: 600 !important; color: #111827 !important; font-size: 14px !important; margin-bottom: 4px !important;">Advanced Bias Test</div>
                <div style="font-size: 12px !important; color: #6B7280 !important; line-height: 1.4 !important;">Deep analysis of bias patterns and discriminatory outputs</div>
              </div>
            </label>

            <!-- Advanced Info Test -->
            <label class="enkrypt-custom-test-type" data-test-value="adv_info_test" style="display: flex !important; cursor: pointer !important; align-items: flex-start !important; gap: 12px !important; border-radius: 8px !important; border: 1px solid #E5E7EB !important; padding: 16px !important; transition: all 0.3s ease !important; background: white !important;">
              <div class="enkrypt-gradient-checkbox enkrypt-custom-test-checkbox" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E5E7EB !important; border-radius: 4px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-top: 2px !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div style="flex: 1 !important;">
                <div style="font-weight: 600 !important; color: #111827 !important; font-size: 14px !important; margin-bottom: 4px !important;">Advanced Info Test</div>
                <div style="font-size: 12px !important; color: #6B7280 !important; line-height: 1.4 !important;">Tests for advanced information disclosure vulnerabilities</div>
              </div>
            </label>

            <!-- Advanced Tool Test -->
            <label class="enkrypt-custom-test-type" data-test-value="adv_tool_test" style="display: flex !important; cursor: pointer !important; align-items: flex-start !important; gap: 12px !important; border-radius: 8px !important; border: 1px solid #E5E7EB !important; padding: 16px !important; transition: all 0.3s ease !important; background: white !important;">
              <div class="enkrypt-gradient-checkbox enkrypt-custom-test-checkbox" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E5E7EB !important; border-radius: 4px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-top: 2px !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div style="flex: 1 !important;">
                <div style="font-weight: 600 !important; color: #111827 !important; font-size: 14px !important; margin-bottom: 4px !important;">Advanced Tool Test</div>
                <div style="font-size: 12px !important; color: #6B7280 !important; line-height: 1.4 !important;">Tests for advanced tool manipulation and misuse</div>
              </div>
            </label>

            <!-- Advanced Command Test -->
            <label class="enkrypt-custom-test-type" data-test-value="adv_command_test" style="display: flex !important; cursor: pointer !important; align-items: flex-start !important; gap: 12px !important; border-radius: 8px !important; border: 1px solid #E5E7EB !important; padding: 16px !important; transition: all 0.3s ease !important; background: white !important;">
              <div class="enkrypt-gradient-checkbox enkrypt-custom-test-checkbox" style="position: relative !important; width: 20px !important; height: 20px !important; border: 2px solid #E5E7EB !important; border-radius: 4px !important; background: white !important; transition: all 0.3s ease !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-top: 2px !important;">
                <svg class="enkrypt-checkbox-icon" style="width: 12px !important; height: 12px !important; stroke: white !important; stroke-width: 3 !important; opacity: 0 !important; transition: opacity 0.3s ease !important;" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div style="flex: 1 !important;">
                <div style="font-weight: 600 !important; color: #111827 !important; font-size: 14px !important; margin-bottom: 4px !important;">Advanced Command Test</div>
                <div style="font-size: 12px !important; color: #6B7280 !important; line-height: 1.4 !important;">Tests for advanced command injection and system manipulation</div>
              </div>
            </label>
            
          </div>

          <!-- Show Advance Settings Toggle -->
          <div style="display: flex !important; align-items: center !important; gap: 12px !important; margin-bottom: 20px !important;">
            <label style="position: relative !important; display: inline-block !important; width: 48px !important; height: 24px !important;">
              <input type="checkbox" id="advanced-settings-toggle" style="opacity: 0 !important; width: 0 !important; height: 0 !important;">
              <span style="position: absolute !important; cursor: pointer !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; background-color: #E5E7EB !important; transition: 0.3s !important; border-radius: 24px !important;">
                <span style="position: absolute !important; content: '' !important; height: 18px !important; width: 18px !important; left: 3px !important; bottom: 3px !important; background-color: white !important; transition: 0.3s !important; border-radius: 50% !important; transform: translateX(0px) !important;"></span>
              </span>
            </label>
            <span style="font-weight: 500 !important; color: #374151 !important; font-size: 14px !important;">Show Advance Settings</span>
          </div>

          <!-- Advanced Settings (Initially Hidden) -->
          <div id="advanced-settings-container" style="display: none !important;">
            
            <!-- All Parameters in One Row -->
            <div style="display: grid !important; grid-template-columns: 1fr 1fr 1fr auto !important; gap: 16px !important; margin-bottom: 20px !important; align-items: end !important;">
              
              <!-- Attack Scenarios -->
              <div>
                <label style="display: block !important; margin-bottom: 6px !important; font-weight: 500 !important; color: #374151 !important; font-size: 14px !important;">Attack Scenarios</label>
                <input 
                  type="number" 
                  id="attack-scenarios-input" 
                  min="1" 
                  max="3" 
                  value="1" 
                  style="width: 100% !important; padding: 8px 12px !important; border: 1px solid #D1D5DB !important; border-radius: 6px !important; font-size: 14px !important; background: white !important; box-sizing: border-box !important; transition: all 0.2s ease !important; color: #111827 !important;"
                />
              </div>
              
              <!-- Risk Categories -->
              <div>
                <label style="display: block !important; margin-bottom: 6px !important; font-weight: 500 !important; color: #374151 !important; font-size: 14px !important;">Risk Categories</label>
                <input 
                  type="number" 
                  id="categories-input" 
                  min="1" 
                  max="3" 
                  value="1" 
                  style="width: 100% !important; padding: 8px 12px !important; border: 1px solid #D1D5DB !important; border-radius: 6px !important; font-size: 14px !important; background: white !important; box-sizing: border-box !important; transition: all 0.2s ease !important; color: #111827 !important;"
                />
              </div>
              
              <!-- Attack Goals per Risk Category -->
              <div>
                <label style="display: block !important; margin-bottom: 6px !important; font-weight: 500 !important; color: #374151 !important; font-size: 14px !important;">Attack Goals per Risk Category</label>
                <input 
                  type="number" 
                  id="depth-input" 
                  min="1" 
                  max="3" 
                  value="1" 
                  style="width: 100% !important; padding: 8px 12px !important; border: 1px solid #D1D5DB !important; border-radius: 6px !important; font-size: 14px !important; background: white !important; box-sizing: border-box !important; transition: all 0.2s ease !important; color: #111827 !important;"
                />
              </div>
              
              <!-- Upgrade Now Button -->
              <div>
                <button style="background: linear-gradient(135deg, rgba(255,116,4,0) 0%, rgba(255,59,162,0) 100%) !important; color: white !important; border: 1px solid var(--Colors-Border-border-primary, #D5D7DA) !important; border-radius: var(--radius-md, 8px) !important; padding: 8px 16px !important; font-size: 14px !important; font-weight: 500 !important; cursor: pointer !important; transition: all 0.2s ease !important; display: flex !important; align-items: center !important; gap: 6px !important; white-space: nowrap !important;">
                  <span style="background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;">Upgrade now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_3858_78752)">
                      <path d="M9.99984 13.3307L13.3332 9.9974M13.3332 9.9974L9.99984 6.66406M13.3332 9.9974H6.6665M18.3332 9.9974C18.3332 14.5998 14.6022 18.3307 9.99984 18.3307C5.39746 18.3307 1.6665 14.5998 1.6665 9.9974C1.6665 5.39502 5.39746 1.66406 9.99984 1.66406C14.6022 1.66406 18.3332 5.39502 18.3332 9.9974Z" stroke="url(#paint0_linear_3858_78752)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3858_78752" x1="3.90228" y1="3.69658" x2="16.3007" y2="15.2819" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF7404"/>
                        <stop offset="1" stop-color="#FF3BA2"/>
                      </linearGradient>
                      <clipPath id="clip0_3858_78752">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              
            </div>

          </div>
          
          <!-- Risk Categories Text Input -->
          <div style="margin-bottom: 20px !important;">
            <label style="display: block !important; margin-bottom: 8px !important; font-weight: 500 !important; color: #374151 !important; font-size: 14px !important;">Risk Categories (Optional)</label>
            <input 
              type="text" 
              id="risk-categories-input" 
              placeholder="Ex: Order cancellations, Wrong refund"
              style="width: 100% !important; padding: 12px 16px !important; border: 1px solid #D1D5DB !important; border-radius: 8px !important; font-size: 14px !important; background: white !important; box-sizing: border-box !important; transition: all 0.2s ease !important; color: #111827 !important;"
            />
          </div>

          <!-- Two Text Areas Side by Side -->
          <div style="display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px !important; margin-bottom: 20px !important;">
            
            <!-- AI System Description -->
            <div>
              <label style="display: block !important; margin-bottom: 8px !important; font-weight: 500 !important; color: #374151 !important; font-size: 14px !important;">
                AI System Description *
                <span style="color: #9CA3AF !important; margin-left: 4px !important;">ⓘ</span>
              </label>
              <textarea 
                id="system-description-textarea" 
                placeholder="Describe the AI system and its functionality..."
                rows="6"
                style="width: 100% !important; min-height: 120px !important; padding: 12px 16px !important; border: 1px solid #D1D5DB !important; border-radius: 8px !important; font-size: 14px !important; font-family: inherit !important; line-height: 1.5 !important; resize: vertical !important; transition: all 0.2s ease !important; background: white !important; box-sizing: border-box !important; color: #111827 !important;"
              ></textarea>
              <div id="system-description-error" style="color: #EF4444 !important; font-size: 12px !important; margin-top: 4px !important; display: none !important;">
                System description is required
              </div>
            </div>
            
            <!-- Policy Description -->
            <div>
              <label style="display: block !important; margin-bottom: 8px !important; font-weight: 500 !important; color: #374151 !important; font-size: 14px !important;">
                Policy Description (Optional)
                <span style="color: #9CA3AF !important; margin-left: 4px !important;">ⓘ</span>
              </label>
              <textarea 
                id="policy-input" 
                placeholder="Enter policy guidelines..."
                rows="6"
                style="width: 100% !important; min-height: 120px !important; padding: 12px 16px !important; border: 1px solid #D1D5DB !important; border-radius: 8px !important; font-size: 14px !important; font-family: inherit !important; line-height: 1.5 !important; resize: vertical !important; transition: all 0.2s ease !important; background: white !important; box-sizing: border-box !important; color: #111827 !important;"
              ></textarea>
            </div>
            
          </div>
        </div>
      </div>
    `;

    return customTestSection;
  }

  // Create additional instructions section
  createAdditionalInstructionsSection() {
    const additionalInstructionsSection = document.createElement('div');
    additionalInstructionsSection.className = 'enkrypt-additional-instructions-section';
    additionalInstructionsSection.style.cssText = 'margin-bottom: 0px !important;';
    additionalInstructionsSection.innerHTML = `
      <h4 class="enkrypt-section-title" style="margin: 0 0 20px 0 !important; color: #181D27 !important; font-size: 16px !important; font-weight: 600 !important;">Additional Instructions (Optional)</h4>
      <div class="enkrypt-custom-input-group" style="margin-bottom: 0 !important;">
        <div class="enkrypt-custom-input-description" style="color: #414651 !important; font-size: 12px !important; margin-bottom: 12px !important; line-height: 1.4 !important;">Provide specific instructions on how to access or interact with the chatbot from the URL. Include any special steps, authentication requirements, or navigation needed.</div>
        <textarea 
          id="additional-instructions" 
          class="enkrypt-custom-textarea" 
          placeholder="e.g., Click the chat bubble in the bottom right corner, then say 'Hello' to initiate the conversation. The chatbot requires logging in first via the login button in the top navigation..."
          rows="3"
          style="width: 100% !important; min-height: 80px !important; padding: 14px 16px !important; border: 1px solid #E9EAEB !important; border-radius: 12px !important; font-size: 14px !important; font-family: inherit !important; line-height: 1.5 !important; resize: vertical !important; transition: all 0.2s ease !important; background: white !important; box-sizing: border-box !important; color: #181D27 !important;"
        ></textarea>
      </div>
    `;
    return additionalInstructionsSection;
  }

  // Create start button
  createStartButton(onClick) {
    const startButton = document.createElement('button');
    startButton.className = 'enkrypt-start-btn';
    startButton.innerHTML = '<span>🔒</span><span>Email Required</span>';
    startButton.disabled = true;
    startButton.style.cssText = `
      width: 100% !important;
      padding: 16px 24px !important;
      background: linear-gradient(133.06deg, #FF7404 12.83%, #FF3BA2 84.86%) !important;
      color: white !important;
      border: none !important;
      border-radius: 12px !important;
      cursor: pointer !important;
      font-weight: 600 !important;
      font-size: 16px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      opacity: 0.5 !important;
      margin-top: 24px !important;
    `;
    
    // Add click handler that switches between validation and launch
    startButton.onclick = () => {
      // Show loading state immediately
      this.setStartButtonLoading(true);
      
      // Call the onClick function (which should be the test runner)
      onClick().then(() => {
        // Success - keep loading until test actually starts
        // The loading will be removed when test starts successfully
      }).catch((error) => {
        // Error - reset button state
        console.error('Launch failed:', error);
        this.setStartButtonLoading(false);
        this.showStatus('❌ Failed to start test: ' + error.message, 'error');
      });
    };
    
    // Create container for button and status
    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(startButton);
    
    return buttonContainer;
  }
  // Set loading state for start button
setStartButtonLoading(isLoading) {
  const startBtn = document.querySelector('.enkrypt-start-btn');
  
  if (!startBtn) return;

  if (isLoading) {
    // Show loading state
    startBtn.disabled = true;
    startBtn.style.opacity = '0.8';
    startBtn.style.cursor = 'not-allowed';
    startBtn.innerHTML = `
      <div class="enkrypt-loading-spinner" style="
        width: 20px !important; 
        height: 20px !important; 
        border: 2px solid rgba(255,255,255,0.3) !important; 
        border-radius: 50% !important; 
        border-top: 2px solid white !important; 
        animation: spin 1s linear infinite !important;
        margin-right: 8px !important;
      "></div>
      <span>Validating & Launching...</span>
    `;
    
    // Add spinner animation if not already added
    this.addSpinnerAnimation();
  } else {
    // Reset to normal state
    startBtn.disabled = false;
    startBtn.style.opacity = '1';
    startBtn.style.cursor = 'pointer';
    
    // Call updateStartButton to restore proper state
    this.updateStartButton();
  }
}

// Add spinner animation CSS
addSpinnerAnimation() {
  if (!document.getElementById('enkrypt-spinner-animation')) {
    const style = document.createElement('style');
    style.id = 'enkrypt-spinner-animation';
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
}
  // Create trigger button
  createTriggerButton(onClick) {
    const triggerButton = document.createElement('button');
    triggerButton.id = window.EnkryptModules.UI_CONFIG.selectors.triggerId;
    triggerButton.className = 'enkrypt-trigger-btn';
    triggerButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="57" viewBox="0 0 59 57" fill="none">
        <path d="M18.0697 56.8401C17.2433 56.6375 16.9205 56.0166 17.0988 54.9726C17.2851 53.8822 17.752 52.9532 18.5118 52.1612C19.0817 51.5672 19.7491 51.1243 20.4051 50.9047C20.7965 50.7737 21.6456 50.6124 22.2914 50.5463L22.8241 50.4919L22.8372 49.9327C22.8843 47.9162 23.3914 45.7591 24.2425 43.9546C24.3693 43.6859 24.6263 43.2134 24.8136 42.9048C25.001 42.596 25.1543 42.3243 25.1543 42.3011C25.1543 42.2778 25.0994 42.2341 25.0322 42.2039C24.8067 42.1024 23.938 41.5001 23.4467 41.1045C23.1788 40.8887 22.7042 40.4597 22.3922 40.1511L21.8249 39.5899L21.5033 39.6272C21.0529 39.6794 19.2882 39.6773 18.6028 39.6236C16.6854 39.4735 14.8905 38.9942 13.2812 38.2026C11.9278 37.5369 10.8736 36.7666 9.86496 35.7069C8.8473 34.6377 8.03469 33.3805 7.53029 32.0953L7.32115 31.5622L6.94849 31.427C6.14636 31.136 5.40521 30.6647 4.8258 30.0769C3.97875 29.2177 3.42092 28.1542 3.00707 26.6097C2.72549 25.5588 2.67418 25.4202 2.16002 24.3212C1.49317 22.8953 1.23556 22.2165 1.03139 21.3463C0.969601 21.0832 1.00325 20.4626 1.09548 20.1639C1.3277 19.4117 2.00493 18.8227 2.75647 18.7196L2.94724 18.6933L2.99082 18.2623C3.04187 17.7577 3.19677 17.3809 3.48732 17.054C4.03051 16.443 4.96127 16.2149 5.7579 16.4974C5.94094 16.5624 6.1065 16.6205 6.12576 16.6267C6.14494 16.6329 6.19571 16.5381 6.2385 16.416C6.53393 15.5737 7.30153 15.0613 8.2678 15.0613C8.91583 15.0613 9.39279 15.2659 9.86816 15.748C10.1899 16.0745 10.5515 16.6852 10.5515 16.9023C10.5515 17.0627 10.5981 17.0651 10.7746 16.914C11.0192 16.7044 11.4825 16.4881 11.865 16.4052C12.682 16.2278 13.4041 16.5901 13.9654 17.4593C14.2797 17.9459 14.3369 18.1531 14.3583 18.8811C14.3758 19.4746 14.3642 19.5983 14.2122 20.458C14.1216 20.971 14.0122 21.5256 13.969 21.6905C13.9259 21.8555 13.9032 21.9898 13.9188 21.9893C13.9343 21.9887 14.0069 21.9072 14.0802 21.8081C14.2405 21.5909 14.6627 21.2996 14.9166 21.2309C15.3936 21.1018 16.0528 21.2772 16.4013 21.6259C17.175 22.4001 17.1335 23.7148 16.2717 25.7336C15.5752 27.365 14.7874 28.6803 14.127 29.3139C13.7864 29.6408 13.7893 29.6114 14.0349 30.2519C14.3465 31.0644 14.9194 31.8064 15.678 32.3797C16.0708 32.6766 16.9372 33.1026 17.4407 33.2467C17.9495 33.3922 18.4965 33.494 18.4965 33.4432C18.4965 33.421 18.4483 33.1386 18.3894 32.8157C18.2272 31.9259 18.1723 31.1934 18.1695 29.8744C18.1665 28.4947 18.2252 27.7308 18.4138 26.6996C18.6522 25.3947 18.8874 24.526 19.3039 23.4124C20.3481 20.6197 21.9412 18.0214 24.4354 15.0426C25.879 13.3185 26.1556 12.9813 26.8234 12.1297C27.696 11.017 27.9836 10.6175 28.5509 9.73121C29.0592 8.93668 29.7626 7.56507 30.0086 6.88851C30.6703 5.06847 30.9287 3.23102 30.745 1.64995C30.687 1.15088 30.7147 1.06542 30.9545 1.00519C31.165 0.952335 31.7937 1.29763 33.299 2.29293C36.3799 4.33017 38.167 6.13804 39.2247 8.28765C39.9483 9.75839 40.2096 10.9621 40.213 12.8404C40.2151 14.0079 40.1498 14.5586 39.8895 15.5721C39.5071 17.061 38.8475 18.5565 38.1092 19.6086C37.99 19.7783 37.902 19.9265 37.9133 19.9379C37.9428 19.9674 38.8438 19.4392 39.1357 19.2212C40.7391 18.0245 41.612 16.9698 42.4785 15.1823C42.8698 14.3749 43.1817 13.3452 43.3291 12.374C43.4316 11.698 43.4326 11.6941 43.5309 11.5957C43.5904 11.5361 43.6786 11.5079 43.8046 11.5079C43.9829 11.5079 44.0096 11.5276 44.4509 11.9854C45.3386 12.9061 46.3863 14.2086 47.1637 15.3585C48.7959 17.7728 49.9622 20.6534 50.5854 23.8099C50.9226 25.5176 51.0399 26.6998 51.0572 28.563L51.0709 30.0501L51.4837 30.1899C52.6617 30.5892 54.334 31.4092 55.334 32.078C56.6625 32.9665 57.7212 34.0862 58.2448 35.1567C58.797 36.2851 58.9483 37.7526 58.6277 38.8689C58.2681 40.1213 57.7129 41.0064 56.5144 42.2388C55.708 43.0679 54.7219 43.8479 53.7864 44.3968C53.4282 44.6069 53.4278 44.6074 53.4278 44.7935C53.4278 45.0434 53.2005 45.7313 52.972 46.1725C52.8234 46.4596 52.6892 46.628 52.2971 47.0199C51.5581 47.7583 50.9026 48.1052 49.9883 48.2417C49.1041 48.3736 48.0681 48.0506 47.5547 47.483C47.3703 47.279 47.2877 47.2213 47.1465 47.1974C46.8587 47.1488 46.2742 46.951 46.0653 46.8316C45.9586 46.7705 45.7938 46.6505 45.6992 46.5649C45.5533 46.4331 45.5272 46.4225 45.5272 46.4951C45.5272 46.5915 45.6259 47.3263 45.7289 47.9966C45.7664 48.2409 45.8092 48.9056 45.824 49.4735L45.851 50.5062H46.0344C46.1353 50.5062 46.4669 50.5367 46.7713 50.574C48.2168 50.7515 49.2163 51.2198 50.1005 52.134C50.7279 52.7826 51.1617 53.4807 51.426 54.2677C51.554 54.649 51.666 55.3335 51.6362 55.5524C51.5637 56.0846 51.2225 56.5826 50.7993 56.7741L50.5649 56.88L45.1623 56.8919C39.2486 56.9051 39.3466 56.9089 38.9298 56.6484C38.5487 56.4101 38.3016 55.8709 38.3572 55.3985C38.3733 55.2606 38.4149 54.9679 38.4493 54.748C38.6822 53.2607 38.7397 52.8517 38.801 52.2459C38.9843 50.437 38.9255 48.8725 38.6228 47.5066C38.3662 46.3487 37.9227 45.3841 37.331 44.6966L37.2049 44.5502L36.1175 44.6186C34.471 44.7223 33.1511 44.7 32.0127 44.5496L31.6585 44.5027L31.5563 44.6285C30.9084 45.425 30.4156 46.6123 30.1764 47.9522C30.0209 48.8233 29.9796 49.5357 30.0045 50.9193C30.0284 52.2512 30.0616 52.6252 30.3059 54.3202C30.4599 55.3894 30.4706 55.8225 30.3498 56.089C30.2265 56.3609 29.9348 56.6551 29.6695 56.775L29.4375 56.88L23.8671 56.8878C19.5319 56.8939 18.2463 56.8834 18.0697 56.8401ZM28.6884 55.0648C28.62 54.7923 28.3079 52.8195 28.2552 52.3273C28.1782 51.6075 28.1759 49.2717 28.2515 48.6406C28.4457 47.0208 28.7583 45.8784 29.3303 44.6982C29.4991 44.3498 29.6372 44.0549 29.6372 44.0429C29.6372 44.031 29.6005 44.0213 29.5556 44.0213C29.4293 44.0213 28.0147 43.5551 27.5358 43.3557C27.0487 43.1527 27.008 43.1463 26.924 43.2594C26.8905 43.3045 26.7377 43.5069 26.5844 43.7092C25.8682 44.6543 25.3425 45.9017 25.0299 47.3982C24.7976 48.5107 24.777 48.76 24.777 50.4642V52.0436L23.6452 52.0951C22.1455 52.1631 21.4408 52.3056 20.5826 52.7145C20.1042 52.9424 19.6076 53.4492 19.329 53.9942C19.1434 54.357 18.896 55.0017 18.896 55.1224C18.896 55.1563 20.3269 55.1701 23.8052 55.1696L28.7145 55.1689L28.6884 55.0648ZM49.798 55.1455C49.8114 55.132 49.7825 54.987 49.7335 54.8233C49.457 53.8986 48.6919 52.9821 47.8349 52.5492C47.5013 52.3807 46.9559 52.2107 46.5617 52.1524C46.3861 52.1264 45.7417 52.1052 45.1294 52.1052H44.0163L44.0505 51.6721C44.0693 51.434 44.0828 50.6994 44.0806 50.0398C44.0772 49.0742 44.0575 48.6977 43.9789 48.1076C43.6914 45.9473 43.0706 44.361 42.0848 43.2692L41.9238 43.0908L41.744 43.1827C41.3417 43.3881 40.3251 43.7466 39.4404 43.995L39.1902 44.0651L39.5523 44.7872C40.2022 46.0832 40.5218 47.328 40.65 49.0626C40.7453 50.3519 40.6188 52.3776 40.3329 54.1404C40.2603 54.5879 40.201 55.0026 40.201 55.0619V55.17H44.9871C47.6195 55.17 49.7845 55.159 49.798 55.1455ZM50.0861 46.4576C50.4328 46.329 50.6462 46.1759 50.9942 45.8068C51.5709 45.1951 51.7782 44.4537 51.5833 43.7007C51.5453 43.554 51.5247 43.4235 51.5375 43.4106C51.5504 43.3978 51.7562 43.3042 51.995 43.2027C52.7098 42.8986 53.6009 42.3667 54.3377 41.8043C54.7888 41.46 55.5967 40.6456 55.9418 40.1873C56.2954 39.7174 56.7063 38.9277 56.8238 38.4913C56.931 38.0933 56.9577 37.2721 56.8757 36.8923C56.7316 36.2241 56.3357 35.4764 55.7905 34.8424C54.9198 33.8302 53.04 32.6736 51.2779 32.0659C50.9378 31.9487 50.6524 31.8597 50.6438 31.8682C50.6353 31.8767 50.5612 32.1711 50.4792 32.5225C50.2876 33.3434 50.0898 34.0205 49.8722 34.6007C49.7767 34.855 49.7047 35.0692 49.7122 35.0765C49.7197 35.084 49.9345 35.1623 50.1897 35.2506C51.1352 35.5776 52.0344 36.0892 52.5237 36.579C52.9916 37.0471 53.0544 37.5088 52.7338 38.1195C52.4277 38.7022 51.6962 39.3665 50.6376 40.0228C50.0861 40.3648 48.9522 40.9966 48.3329 41.3072C47.7962 41.5764 47.7845 41.5854 47.5916 41.8837C47.2489 42.4139 46.8666 43.135 46.7194 43.5288C46.5973 43.8555 46.5763 43.9708 46.5735 44.3322C46.5708 44.6848 46.5862 44.7838 46.6669 44.9348C46.8898 45.3516 47.3908 45.6293 47.924 45.6318C48.1887 45.633 48.405 45.5746 48.8689 45.3769C48.9406 45.3463 48.9394 45.358 48.8563 45.4989C48.8057 45.5847 48.7529 45.7521 48.7391 45.8708C48.7074 46.1421 48.8138 46.2945 49.1411 46.4471C49.4278 46.5807 49.7452 46.5843 50.0861 46.4576ZM45.1035 44.2689C45.1399 44.0785 45.3088 43.5002 45.4789 42.9837C45.8195 41.9493 45.9828 41.2049 45.9622 40.779L45.9489 40.5018L45.3275 41.0235C44.9857 41.3103 44.5014 41.6866 44.2511 41.8596C44.0009 42.0326 43.7962 42.1911 43.7962 42.2117C43.7962 42.2323 43.9371 42.4875 44.1095 42.779C44.4365 43.3319 44.921 44.3091 44.9743 44.523C44.9913 44.5914 45.0124 44.6401 45.0212 44.6312C45.0301 44.6223 45.0671 44.4594 45.1035 44.2689ZM35.7624 42.7309C40.4924 42.3012 44.1047 40.3003 46.6239 36.7146C48.0533 34.6803 48.8109 32.5642 49.0335 29.9854C49.0951 29.2725 49.0944 27.2831 49.0325 26.5653C48.8499 24.45 48.324 22.2837 47.4693 20.1248C47.1341 19.2784 46.3916 17.7835 45.9789 17.1243C45.6739 16.6374 44.9235 15.5616 44.5415 15.3258C44.3916 15.7266 43.9892 16.5495 43.706 17.0341C42.9443 18.3377 41.8953 19.584 40.8667 20.4075C38.9565 21.937 37.0883 22.5679 34.0875 22.6968C33.605 22.7175 33.2058 22.7309 33.2003 22.7263C33.1948 22.7218 33.4448 22.4594 33.7558 22.1432C35.5186 20.3515 37.0143 17.9214 37.7374 15.6742C38.1981 14.2424 38.3345 13.0248 38.1812 11.7137C38.101 11.0277 38.031 10.7089 37.8189 10.0643C37.3548 8.65445 36.3733 7.257 35.0395 6.10704C34.1612 5.34972 32.6785 4.23006 32.625 4.28353C32.6096 4.2989 32.5805 4.5265 32.5601 4.78936C32.4646 6.02193 32.0971 7.24953 31.3867 8.70962C30.3441 10.8527 29.0718 12.6364 26.1755 16.0162C24.1007 18.4373 22.9115 20.1704 21.8478 22.3235C20.7987 24.4469 20.2753 26.3288 20.0949 28.6261C19.8914 31.2193 20.455 33.9222 21.6251 35.9643C22.2714 37.092 22.772 37.7691 23.5545 38.5745C24.1816 39.2198 24.7818 39.7203 25.514 40.2083C26.1217 40.6134 27.1692 41.1755 27.2207 41.1241C27.2385 41.1064 27.1596 40.8065 27.0456 40.4578C26.7919 39.6828 26.6828 39.1578 26.6179 38.4025C26.5384 37.4765 26.6247 36.4789 26.8672 35.5215C26.9622 35.1463 27.3686 33.9233 27.5082 33.5923C27.5668 33.453 27.5621 33.4056 27.4897 33.4056C27.456 33.4056 27.2312 33.3235 26.9904 33.2233C26.1275 32.864 25.5002 32.4326 24.777 31.7009C23.6014 30.5114 22.8709 28.9351 22.6661 27.1449C22.5979 26.5499 22.6361 25.0169 22.7345 24.3944C22.8381 23.7389 23.1579 22.56 23.2899 22.3459C23.3217 22.2945 23.6638 22.3626 25.2512 22.7362C27.7941 23.3349 28.0372 23.3887 29.1154 23.5922C33.4882 24.4174 37.0002 24.3968 41.1813 23.5211C41.9103 23.3685 44.133 22.8087 45.2156 22.505C45.7408 22.3577 46.0909 22.2797 46.1073 22.3062C46.1545 22.3828 46.2796 23.322 46.3284 23.9669C46.5172 26.4584 45.6843 29.1442 44.187 30.8724C42.5897 32.716 40.1979 33.7034 37.8088 33.5056C36.1427 33.3677 34.8664 32.845 33.6082 31.7854L33.3984 31.6088L33.2658 31.7632C32.1012 33.1186 31.0851 34.6407 30.2568 36.2705C29.4102 37.9363 28.8993 39.6526 28.8031 41.1535C28.7814 41.4935 28.7856 41.6858 28.8152 41.7094C28.8935 41.7722 29.6811 42.0531 30.2574 42.2239C31.1361 42.4843 31.9623 42.6366 33.0993 42.7482C33.4743 42.785 35.2978 42.7731 35.7624 42.7309ZM48.4659 39.3751C48.9856 39.0917 49.6007 38.7331 49.8326 38.5784C50.2658 38.2891 50.9866 37.6966 50.9866 37.6298C50.9866 37.5722 49.8502 37.0654 49.4997 36.9668C48.911 36.801 48.9988 36.7649 48.6352 37.3217C48.272 37.8782 47.6311 38.7394 47.5401 38.7934C47.4951 38.82 47.4801 38.9613 47.4801 39.3597C47.4801 39.6517 47.4893 39.8905 47.5004 39.8905C47.5116 39.8905 47.946 39.6586 48.4659 39.3751ZM20.5382 37.8226C20.5382 37.809 20.4306 37.6142 20.2993 37.3895C20.0403 36.9468 19.6319 36.1527 19.459 35.7556L19.3509 35.5072L18.8544 35.477C18.1854 35.4364 17.5523 35.3082 16.8497 35.0714C14.5851 34.3078 13.0076 32.8127 12.2098 30.6739C12.0312 30.1953 11.8215 29.3837 11.8543 29.2981C11.8672 29.2645 12.0478 29.1237 12.2556 28.9853C12.7109 28.6822 13.194 28.1873 13.534 27.6757C14.0601 26.8843 14.8187 25.1758 15.1072 24.1329C15.2542 23.6011 15.275 23.0264 15.155 22.803C15.0588 22.6237 14.8553 22.5745 14.6188 22.6735C14.1686 22.8617 13.5008 23.8404 13.0099 25.0319L12.8638 25.3863L12.5677 25.441C12.0047 25.545 11.4568 25.7619 11.0472 26.0429C10.6303 26.3288 10.1016 26.9513 9.8987 27.3947C9.83727 27.5291 9.77051 27.6223 9.75054 27.6018C9.68707 27.537 9.6386 26.9976 9.67091 26.7135C9.71876 26.2919 9.89248 25.9725 10.2874 25.5803C10.5643 25.3054 10.711 25.2008 11.0461 25.0397C11.2745 24.9298 11.6132 24.807 11.7987 24.7669L12.1361 24.6938L12.1629 23.8418C12.1929 22.8876 12.2523 22.3292 12.5086 20.5912C12.7103 19.2224 12.7353 18.7182 12.6138 18.4622C12.5091 18.2411 12.3165 18.1264 12.0496 18.1262C11.8691 18.1261 11.8131 18.1495 11.6578 18.2899C11.4222 18.5029 11.2924 18.7667 11.1098 19.4043C10.9331 20.0213 10.669 21.4396 10.59 22.1952L10.5339 22.7332L10.1322 22.7605C9.41827 22.8092 8.45661 23.091 7.60228 23.5016C7.04507 23.7693 6.2037 24.2329 5.92123 24.4276C5.80352 24.5088 5.70108 24.5681 5.69363 24.5597C5.68617 24.5513 5.61497 24.3944 5.53561 24.2112C5.2464 23.5441 4.10463 21.3642 3.74919 20.8009C3.5017 20.4084 3.23876 20.2949 2.97618 20.467C2.72957 20.6287 2.67063 21.0771 2.83254 21.5587C2.88368 21.7106 3.12584 22.2647 3.37076 22.7899C4.11031 24.3759 4.26743 24.8004 4.62944 26.1878C4.92185 27.3081 5.2709 28.0586 5.81027 28.7263C6.45199 29.5207 7.34086 29.9861 8.35266 30.0577L8.75391 30.0862L8.85582 30.503C9.04827 31.2897 9.49248 32.2749 9.98871 33.0156C11.3421 35.0357 13.1606 36.4051 15.5227 37.183C16.4656 37.4935 17.201 37.6428 18.6518 37.8179C18.875 37.8448 20.5382 37.849 20.5382 37.8226ZM39.5453 30.4555C40.5385 30.2654 41.4887 29.6407 42.0508 28.8084C42.4593 28.2034 42.7615 27.4569 42.8809 26.7576C42.9546 26.3258 43.0072 25.8546 42.9816 25.8546C42.9726 25.8546 42.7977 25.9317 42.5929 26.0261C42.1439 26.2328 41.53 26.4765 40.0012 27.0548C39.3665 27.295 38.6175 27.5839 38.3368 27.6971C37.5401 28.0179 36.4369 28.4353 36.0969 28.5444C35.9268 28.5989 35.7821 28.6607 35.7752 28.6815C35.7453 28.7726 36.4467 29.5997 36.7309 29.8087C37.5565 30.4153 38.5557 30.6449 39.5453 30.4555ZM29.7187 30.0624C30.4857 29.7913 30.9896 29.3523 31.4312 28.5705L31.5873 28.2942L31.4888 28.2569C31.4347 28.2363 31.1508 28.1349 30.8578 28.0316C29.5747 27.5788 26.4718 26.4264 25.6124 26.0834L25.3824 25.9916L25.3548 26.1174C25.3121 26.3125 25.4096 27.2635 25.5074 27.6038C25.8789 28.897 26.8711 29.8508 28.1503 30.1446C28.5762 30.2423 29.3194 30.2034 29.7187 30.0624ZM6.57689 22.9736C6.82226 22.8548 7.09958 22.7302 7.19332 22.6968C7.35577 22.6387 7.3626 22.6285 7.33819 22.4796C7.29842 22.237 6.58098 19.8748 6.39847 19.3855C6.1776 18.7933 6.05137 18.5533 5.84027 18.3242C5.63521 18.1015 5.42359 18.0151 5.19065 18.0589C4.43947 18.1999 4.46371 18.9712 5.29132 21.2575C5.52585 21.9052 6.06726 23.1896 6.10579 23.1896C6.11955 23.1896 6.33153 23.0924 6.57689 22.9736ZM8.8267 22.1902C9.12071 22.1048 9.39989 22.0348 9.44721 22.0348C9.52568 22.0348 9.53092 22.0109 9.50766 21.7572C9.49372 21.6045 9.43407 20.8499 9.3753 20.0804C9.23283 18.2145 9.11911 17.6048 8.82812 17.1457C8.61259 16.8058 8.17326 16.6878 7.85244 16.8835C7.43273 17.1396 7.44827 17.6383 7.9808 21.0132C8.19643 22.3794 8.18968 22.3457 8.24649 22.3457C8.27153 22.3457 8.53269 22.2757 8.8267 22.1902Z" fill="#3A0A07" stroke="#3A0A07" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.5748 40.8393C25.4441 40.242 24.4496 39.4963 23.5547 38.5745C22.7715 37.7678 22.2712 37.0909 21.6253 35.9638C20.4551 33.9218 19.8915 31.2189 20.0951 28.6257C20.2755 26.3284 20.7989 24.4464 21.848 22.323C22.9117 20.17 24.1009 18.4369 26.1757 16.0158C29.072 12.636 30.3443 10.8522 31.3869 8.70918C32.0972 7.2491 32.4648 6.0215 32.5603 4.78892C32.5807 4.52606 32.6098 4.29847 32.6252 4.2831C32.6787 4.22962 34.1613 5.34929 35.0396 6.1066C35.8247 6.78352 36.6348 7.72632 37.1069 8.51303C37.5117 9.18728 37.8726 10.0833 38.0473 10.8474C38.147 11.2834 38.2484 12.2247 38.2475 12.7065C38.2434 14.9171 37.2653 17.5228 35.488 20.0578C34.9287 20.8556 34.4204 21.4676 33.756 22.1428C33.445 22.459 33.195 22.7214 33.2005 22.7258C33.206 22.7304 33.6052 22.7171 34.0877 22.6964C35.8446 22.6209 37.2591 22.3613 38.3327 21.9174C40.5077 21.0181 42.3635 19.3315 43.7062 17.0337C43.9893 16.5491 44.3918 15.7261 44.7102 15.3051C44.9237 15.5611 45.6741 16.6369 45.979 17.1238C46.3593 17.7312 47.1185 19.2448 47.4228 20.0022C47.6257 20.5076 47.6412 20.5686 47.5661 20.5686C47.377 20.5686 47.4155 20.9726 47.6355 21.297C47.7085 21.4045 47.7466 21.5221 47.7466 21.6392C47.7466 21.7373 47.8066 21.9951 47.8798 22.212C47.953 22.4289 48.013 22.6437 48.013 22.689C48.013 22.7983 47.9285 22.8783 47.8132 22.8783C47.685 22.8783 47.6135 22.9613 47.6135 23.1105C47.6135 23.1906 47.5473 23.3199 47.4309 23.4674C47.1853 23.7783 47.1521 23.878 47.2167 24.1091C47.2612 24.2681 47.2579 24.3219 47.1964 24.4517C47.147 24.5558 47.1323 24.661 47.1508 24.7768C47.1959 25.0594 46.997 25.1377 46.8406 24.8989C46.7533 24.7655 46.7357 24.1793 46.81 23.8776C46.8717 23.6271 46.8432 23.1663 46.7527 22.9493C46.6705 22.7525 46.3961 22.5513 46.2573 22.5862C46.1619 22.6102 46.1487 22.5986 46.1481 22.4904C46.1468 22.2471 46.133 22.2473 45.2158 22.5045C44.1331 22.8083 41.9105 23.3681 41.1815 23.5207C37.0004 24.3963 33.4884 24.417 29.1156 23.5918C28.0374 23.3883 27.7943 23.3344 25.2513 22.7358C23.664 22.3621 23.3219 22.2941 23.2901 22.3454C23.158 22.5595 22.8383 23.7384 22.7347 24.3939C22.6362 25.0165 22.5981 26.5495 22.6662 27.1444C22.8186 28.4757 23.2778 29.7219 24.0147 30.8037C24.5178 31.5424 25.4402 32.394 26.2419 32.8599C26.5652 33.0478 27.383 33.4051 27.4899 33.4051C27.5623 33.4051 27.567 33.4526 27.5083 33.5918C27.3688 33.9228 26.9624 35.1458 26.8674 35.5211C26.4437 37.1937 26.5007 38.8084 27.0412 40.4437C27.1509 40.7757 27.2406 41.0666 27.2406 41.0904C27.2406 41.1736 27.1256 41.1302 26.5748 40.8393Z" fill="url(#paint0_linear_3691_85399)" stroke="#FF491E" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.8975 55.1241C18.8975 55.0034 19.1449 54.3586 19.3305 53.9958C19.6091 53.4509 20.1057 52.944 20.5841 52.7161C21.4423 52.3072 22.147 52.1647 23.6467 52.0967L24.7785 52.0453V50.4659C24.7785 48.7617 24.7991 48.5123 25.0314 47.3998C25.344 45.9033 25.8697 44.6559 26.5859 43.7108C26.7392 43.5085 26.892 43.3062 26.9255 43.2611C27.0095 43.148 27.0502 43.1544 27.5373 43.3573C28.0162 43.5567 29.4308 44.0229 29.5571 44.0229C29.602 44.0229 29.6387 44.0327 29.6387 44.0446C29.6387 44.0566 29.5006 44.3514 29.3318 44.6998C28.7598 45.8801 28.4472 47.0225 28.253 48.6423C28.1774 49.2734 28.1797 51.6092 28.2567 52.3289C28.3094 52.8211 28.6215 54.794 28.6899 55.0664L28.716 55.1705L23.8067 55.1712C20.3284 55.1717 18.8975 55.1579 18.8975 55.1241Z" fill="url(#paint1_linear_3691_85399)" stroke="url(#paint2_linear_3691_85399)" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6517 37.8166C17.2009 37.6415 16.4655 37.4923 15.5226 37.1817C13.1605 36.4038 11.342 35.0344 9.9886 33.0143C9.49237 32.2736 9.04816 31.2885 8.85571 30.5018L8.7538 30.0849L8.35255 30.0565C7.34075 29.9849 6.45188 29.5194 5.81016 28.7251C5.27079 28.0574 4.92174 27.3069 4.62933 26.1865C4.26732 24.7991 4.1102 24.3747 3.37065 22.7886C3.12573 22.2634 2.88357 21.7094 2.83243 21.5575C2.67052 21.0759 2.72946 20.6275 2.97607 20.4658C3.23865 20.2936 3.50159 20.4072 3.74908 20.7996C4.10452 21.363 5.24629 23.5428 5.5355 24.21C5.61487 24.3932 5.68606 24.55 5.69352 24.5585C5.70097 24.5669 5.80341 24.5076 5.92112 24.4264C6.20359 24.2317 7.04496 23.7681 7.60218 23.5004C8.4565 23.0898 9.41816 22.808 10.1321 22.7593L10.5338 22.7319L10.5899 22.194C10.6688 21.4383 10.9329 20.0201 11.1097 19.4031C11.2923 18.7655 11.4221 18.5017 11.6577 18.2886C11.813 18.1483 11.8689 18.1248 12.0495 18.125C12.3163 18.1252 12.509 18.2399 12.6137 18.461C12.7352 18.717 12.7102 19.2212 12.5084 20.59C12.2522 22.3279 12.1928 22.8863 12.1628 23.8406L12.136 24.6926L11.7986 24.7656C11.6131 24.8058 11.2744 24.9286 11.0459 25.0384C10.7109 25.1996 10.5642 25.3041 10.2873 25.5791C9.89237 25.9713 9.71865 26.2907 9.6708 26.7123C9.63849 26.9964 9.68696 27.5358 9.75043 27.6006C9.7704 27.621 9.83716 27.5278 9.89859 27.3934C10.1015 26.9501 10.6302 26.3276 11.0471 26.0416C11.4567 25.7607 12.0046 25.5437 12.5676 25.4398L12.8637 25.3851L13.0098 25.0307C13.5007 23.8392 14.1685 22.8605 14.6187 22.6723C15.3464 22.3679 15.4432 23.3692 14.839 24.9533C14.4282 26.0306 13.9141 27.1026 13.5339 27.6745C13.1938 28.1861 12.7108 28.681 12.2555 28.9841C12.0477 29.1225 11.8671 29.2632 11.8542 29.2969C11.8214 29.3824 12.0311 30.194 12.2096 30.6727C13.0075 32.8114 14.585 34.3065 16.8496 35.0702C17.5522 35.307 18.1853 35.4352 18.8543 35.4758L19.3508 35.506L19.4589 35.7544C19.6318 36.1514 20.0402 36.9456 20.2991 37.3883C20.4305 37.6129 20.5381 37.8078 20.5381 37.8213C20.5381 37.8477 18.8749 37.8436 18.6517 37.8166Z" fill="url(#paint3_linear_3691_85399)" stroke="url(#paint4_linear_3691_85399)" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M40.2017 55.0727C40.2017 55.0134 40.2611 54.5987 40.3336 54.1511C40.6195 52.3884 40.746 50.3626 40.6507 49.0734C40.5225 47.3388 40.2029 46.0939 39.553 44.7979L39.1909 44.0759L39.4411 44.0057C40.3258 43.7573 41.3424 43.3988 41.7447 43.1934L41.9245 43.1016L42.0856 43.2799C43.0713 44.3717 43.6921 45.958 43.9797 48.1184C44.0582 48.7084 44.0779 49.0849 44.0813 50.0505C44.0835 50.7101 44.07 51.4447 44.0512 51.6829L44.017 52.1159H45.1301C45.7424 52.1159 46.3869 52.1372 46.5624 52.1632C46.9566 52.2215 47.502 52.3914 47.8356 52.5599C48.6926 52.9928 49.4577 53.9093 49.7342 54.8341C49.7832 54.9977 49.8122 55.1427 49.7987 55.1562C49.7852 55.1697 47.6202 55.1807 44.9878 55.1807H40.2017V55.0727Z" fill="url(#paint5_linear_3691_85399)" stroke="url(#paint6_linear_3691_85399)" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M47.481 39.3675C47.481 38.9691 47.4959 38.8278 47.5409 38.8012C47.6319 38.7472 48.2728 37.886 48.636 37.3295C48.9996 36.7727 48.9118 36.8088 49.5005 36.9746C49.851 37.0733 50.9874 37.58 50.9874 37.6376C50.9874 37.7044 50.2666 38.2969 49.8334 38.5862C49.482 38.8207 47.5668 39.8983 47.5012 39.8983C47.4901 39.8983 47.481 39.6595 47.481 39.3675Z" fill="white" stroke="white" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.2663 30.4788C37.7725 30.4064 37.2027 30.1592 36.732 29.8134C36.4478 29.6045 35.7464 28.7773 35.7763 28.6863C35.7832 28.6655 35.9279 28.6036 36.098 28.5491C36.438 28.44 37.5413 28.0227 38.3379 27.7018C38.6186 27.5886 39.3676 27.2997 40.0023 27.0595C41.5312 26.4812 42.145 26.2375 42.594 26.0308C42.7988 25.9365 42.9738 25.8594 42.9827 25.8594C43.0516 25.8594 42.8432 27.0704 42.7013 27.4952C42.3578 28.5236 41.7692 29.3379 40.9944 29.8566C40.1786 30.4026 39.2269 30.6197 38.2663 30.4788Z" fill="white" stroke="white" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.7911 22.5174C4.89398 20.423 4.48244 18.8484 4.71467 18.3989C4.85244 18.1324 5.21613 17.9883 5.50792 18.0846C5.6962 18.1468 5.98107 18.4473 6.12745 18.7379C6.18702 18.8562 6.30917 19.1499 6.399 19.3906C6.58152 19.88 7.29896 22.2421 7.33873 22.4848C7.36314 22.6337 7.35631 22.6438 7.19386 22.7019C7.10011 22.7353 6.82279 22.8599 6.57743 22.9787C6.33207 23.0976 6.12009 23.1948 6.10633 23.1948C6.09257 23.1948 5.95071 22.89 5.7911 22.5174Z" fill="#FF4D0F" stroke="#FF4D0F" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M49.1411 46.4545C48.8138 46.3019 48.7074 46.1495 48.7391 45.8782C48.7529 45.7595 48.8057 45.5921 48.8563 45.5063C48.9394 45.3654 48.9406 45.3537 48.8689 45.3842C48.405 45.582 48.1887 45.6404 47.924 45.6392C47.3908 45.6367 46.8898 45.359 46.6669 44.9422C46.5862 44.7912 46.5708 44.6921 46.5735 44.3396C46.5763 43.9782 46.5973 43.8629 46.7194 43.5361C46.8666 43.1424 47.2489 42.4213 47.5916 41.8911C47.7845 41.5928 47.7962 41.5837 48.3329 41.3146C48.9522 41.004 50.0861 40.3722 50.6376 40.0302C51.6962 39.3739 52.4277 38.7096 52.7338 38.1268C53.0544 37.5162 52.9916 37.0544 52.5237 36.5864C52.0344 36.0966 51.1352 35.5849 50.1897 35.2579C49.9345 35.1697 49.7197 35.0914 49.7122 35.0839C49.7047 35.0765 49.7767 34.8624 49.8722 34.6081C50.0898 34.0278 50.2876 33.3507 50.4792 32.5299C50.5612 32.1785 50.6353 31.8841 50.6439 31.8756C50.6524 31.867 50.9378 31.9561 51.2779 32.0733C53.04 32.6809 54.9199 33.8376 55.7905 34.8497C56.3357 35.4838 56.7316 36.2315 56.8757 36.8997C56.9577 37.2794 56.931 38.1007 56.8238 38.4987C56.7063 38.9351 56.2954 39.7248 55.9418 40.1946C55.5967 40.6529 54.7888 41.4674 54.3377 41.8117C53.6009 42.3741 52.7098 42.9059 51.995 43.21C51.7562 43.3116 51.5504 43.4052 51.5375 43.418C51.5247 43.4309 51.5453 43.5614 51.5833 43.7081C51.7783 44.4611 51.5709 45.2025 50.9942 45.8142C50.6463 46.1833 50.4328 46.3364 50.0861 46.465C49.7452 46.5917 49.4278 46.588 49.1411 46.4545Z" fill="url(#paint7_linear_3691_85399)" stroke="url(#paint8_linear_3691_85399)" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.1501 30.153C26.8709 29.8591 25.8786 28.9054 25.5072 27.6122C25.4094 27.2718 25.3118 26.3209 25.3546 26.1258L25.3822 26L25.6121 26.0918C26.4716 26.4348 29.5745 27.5872 30.8576 28.04C31.1505 28.1433 31.4345 28.2447 31.4886 28.2653L31.587 28.3026L31.4309 28.5789C30.9893 29.3607 30.4854 29.7997 29.7185 30.0707C29.3192 30.2118 28.576 30.2507 28.1501 30.153Z" fill="white" stroke="white" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.0989 42.7495C31.962 42.6379 31.1358 42.4856 30.257 42.2252C29.6807 42.0545 28.8931 41.7736 28.8149 41.7108C28.7852 41.6871 28.781 41.4948 28.8028 41.1548C28.8989 39.6539 29.4098 37.9376 30.2565 36.2718C31.0847 34.642 32.1009 33.1199 33.2655 31.7645L33.3981 31.6101L33.6079 31.7867C34.5741 32.6005 35.5266 33.0839 36.6653 33.3383C39.105 33.8836 41.5837 33.255 43.4399 31.6204C44.9522 30.2888 45.9073 28.4057 46.2622 26.0558C46.3552 25.4394 46.3648 24.1107 46.2812 23.413C46.1965 22.707 46.1979 22.5966 46.2915 22.5781C46.4001 22.5566 46.6832 22.7857 46.7521 22.9511C46.8427 23.168 46.8712 23.6289 46.8095 23.8794C46.7352 24.1811 46.7528 24.7673 46.84 24.9006C46.9964 25.1394 47.1954 25.0612 47.1503 24.7786C47.1317 24.6627 47.1465 24.5576 47.1959 24.4534C47.2573 24.3237 47.2606 24.2698 47.2161 24.1109C47.1515 23.8797 47.1847 23.7801 47.4303 23.4692C47.5467 23.3217 47.613 23.1923 47.613 23.1122C47.613 22.9631 47.6844 22.88 47.8127 22.88C47.9279 22.88 48.0124 22.8001 48.0124 22.6908C48.0124 22.6455 47.9525 22.4307 47.8793 22.2137C47.806 21.9968 47.7461 21.739 47.7461 21.6409C47.7461 21.5239 47.7079 21.4062 47.635 21.2988C47.4161 20.9759 47.3765 20.5703 47.5639 20.5703C47.6293 20.5703 47.6841 20.6786 47.8285 21.0922C48.4906 22.9904 48.8739 24.7334 49.0321 26.5666C49.0941 27.2844 49.0947 29.2738 49.0331 29.9868C48.842 32.2016 48.2572 34.0664 47.2018 35.8276C45.6437 38.4274 43.4287 40.3857 40.7554 41.5263C39.2646 42.1624 37.5943 42.5658 35.7621 42.7322C35.2974 42.7745 33.4739 42.7863 33.0989 42.7495Z" fill="#FF3448" stroke="#FF3448" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.18005 22.2576C8.14428 22.0844 7.80695 19.927 7.68524 19.0929C7.54507 18.1331 7.52501 17.3939 7.63234 17.1506C7.77126 16.8357 8.18795 16.7117 8.54224 16.8799C8.83385 17.0184 9.0579 17.506 9.201 18.3135C9.23811 18.5223 9.31641 19.3228 9.37517 20.0923C9.43394 20.8617 9.49359 21.6163 9.50753 21.769C9.53079 22.0227 9.52555 22.0466 9.44708 22.0466C9.39976 22.0466 9.12058 22.1166 8.82657 22.2021C8.53256 22.2875 8.2714 22.3575 8.24636 22.3575C8.22115 22.3575 8.19141 22.3126 8.18005 22.2576Z" fill="#FF4D0F" stroke="#FF4D0F" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44.975 44.529C44.9217 44.3151 44.4372 43.3379 44.1102 42.785C43.9378 42.4935 43.7969 42.2383 43.7969 42.2177C43.7969 42.1971 44.0016 42.0386 44.2518 41.8656C44.5021 41.6926 44.9864 41.3163 45.3282 41.0294L45.9496 40.5078L45.9629 40.785C45.9835 41.2108 45.8202 41.9553 45.4796 42.9897C45.3095 43.5062 45.1406 44.0845 45.1042 44.2749C45.0678 44.4654 45.0308 44.6283 45.0219 44.6372C45.0131 44.6461 44.992 44.5974 44.975 44.529Z" fill="#FF295F" stroke="#FF295F" stroke-width="0.145944" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_3691_85399" x1="23.8048" y1="8.77474" x2="49.7303" y2="27.1567" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint1_linear_3691_85399" x1="20.3384" y1="44.6489" x2="29.135" y2="52.0165" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint2_linear_3691_85399" x1="20.3384" y1="44.6489" x2="29.135" y2="52.0165" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint3_linear_3691_85399" x1="5.12902" y1="20.5292" x2="19.6179" y2="32.7509" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint4_linear_3691_85399" x1="5.12902" y1="20.5292" x2="19.6179" y2="32.7509" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint5_linear_3691_85399" x1="40.6144" y1="44.5746" x2="49.4481" y2="51.8258" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint6_linear_3691_85399" x1="40.6144" y1="44.5746" x2="49.4481" y2="51.8258" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint7_linear_3691_85399" x1="47.9617" y1="33.6655" x2="58.02" y2="40.2912" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
          <linearGradient id="paint8_linear_3691_85399" x1="47.9617" y1="33.6655" x2="58.02" y2="40.2912" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF7404"/>
            <stop offset="1" stop-color="#FF3BA2"/>
          </linearGradient>
        </defs>
      </svg>
    `;
    triggerButton.title = 'R.A.Y.D.E.R - Enkrypt AI Security Testing';
    triggerButton.onclick = onClick;

    triggerButton.style.cssText = `
      position: fixed !important;
      bottom: 20px !important;
      right: 20px !important;
      width: 60px !important;
      height: 60px !important;
      background: #FFFFFF !important;
      color: white !important;
      border: none !important;
      border-radius: 50% !important;
      cursor: pointer !important;
      font-size: 24px !important;
      z-index: 2147483646 !important;
      box-shadow: 0 8px 30px rgba(255, 116, 4, 0.3) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      pointer-events: auto !important;
      opacity: 1 !important;
      visibility: visible !important;
      transition: all 0.3s ease !important;
    `;

    return triggerButton;
  }

  // Show status message
  showStatus(message, type) {
    // Remove existing popup
    const existingPopup = document.getElementById('enkrypt-status-popup');
    if (existingPopup) {
      existingPopup.remove();
    }
    
    // Create popup container
    const popup = document.createElement('div');
    popup.id = 'enkrypt-status-popup';
    popup.textContent = message;
    
    // Base styles for popup positioned at top right of main window
    const baseStyles = `
      position: absolute !important;
      top: 80px !important;
      right: 20px !important;
      padding: 16px 20px !important;
      border-radius: 12px !important;
      font-weight: 500 !important;
      font-family: inherit !important;
      font-size: 14px !important;
      z-index: 2147483649 !important;
      max-width: 350px !important;
      min-width: 250px !important;
      text-align: left !important;
      line-height: 1.4 !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
      border: 1px solid !important;
      transform: translateX(100%) !important;
      transition: all 0.3s ease !important;
      cursor: pointer !important;
      word-wrap: break-word !important;
    `;
    
    if (type === 'success') {
      popup.style.cssText = baseStyles + `
        background: linear-gradient(133deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%) !important;
        border-color: #10B981 !important;
        color: white !important;
      `;
    } else if (type === 'error') {
      popup.style.cssText = baseStyles + `
        background: linear-gradient(133deg, rgba(239, 68, 68, 0.95) 0%, rgba(220, 38, 38, 0.95) 100%) !important;
        border-color: #EF4444 !important;
        color: white !important;
      `;
    } else {
      popup.style.cssText = baseStyles + `
        background: linear-gradient(133deg, rgba(255, 117, 0, 0.95) 12.83%, rgba(255, 59, 162, 0.95) 84.86%) !important;
        border-color: #FF7404 !important;
        color: white !important;
      `;
    }
    
    // Find the main extension container and add popup to it
    const mainContainer = document.getElementById('enkrypt-redteam-ui');
    if (mainContainer) {
      mainContainer.appendChild(popup);
    } else {
      // Fallback to body if main container not found
      document.body.appendChild(popup);
    }
    
    // Animate in
    setTimeout(() => {
      popup.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      if (popup && popup.parentNode) {
        popup.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (popup && popup.parentNode) {
            popup.remove();
          }
        }, 300);
      }
    }, 4000);
    
    // Hide on click
    popup.addEventListener('click', () => {
      popup.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (popup && popup.parentNode) {
          popup.remove();
        }
      }, 300);
    });
  }

  // Update start button state
  updateStartButton() {
    const startBtn = document.querySelector('.enkrypt-start-btn');
    if (startBtn) {
      const hasValidEmail = window.EnkryptModules.state.isEmailValid();
      const hasSelectedTests = window.EnkryptModules.state.hasSelectedTests();
      const hasSelectedCustomTests = window.EnkryptModules.state.hasSelectedCustomTests();
      const hasAnyTests = hasSelectedTests || hasSelectedCustomTests;
      
      if (hasValidEmail && hasAnyTests) {
        // Ready to launch
        startBtn.disabled = false;
        startBtn.style.opacity = '1';
        startBtn.style.cursor = 'pointer';
        startBtn.innerHTML = '<span>🚀</span><span>Start Red Team Test</span>';
      } else if (!hasValidEmail && !hasAnyTests) {
        // Missing both email and tests
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
        startBtn.innerHTML = '<span>🔒</span><span>Email & Test Types Required</span>';
      } else if (!hasValidEmail) {
        // Missing email only
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
        startBtn.innerHTML = '<span>🔒</span><span>Valid Email Required</span>';
      } else if (!hasAnyTests) {
        // Missing tests only
        startBtn.disabled = true;
        startBtn.style.opacity = '0.5';
        startBtn.style.cursor = 'not-allowed';
        startBtn.innerHTML = '<span>⚠️</span><span>Select Test Types</span>';
      }
    } else {
      console.warn('🚀 Start Button: Button element not found');
    }
  }

  // Create settings dropdown
  createSettingsDropdown() {
    const settingsDropdown = document.createElement('div');
    settingsDropdown.id = 'enkrypt-settings-dropdown';
    settingsDropdown.className = 'enkrypt-settings-dropdown';
    settingsDropdown.style.cssText = `
      position: absolute !important;
      top: 60px !important;
      right: 20px !important;
      width: 350px !important;
      background: white !important;
      border: 1px solid #E9EAEB !important;
      border-radius: 12px !important;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
      z-index: 1000 !important;
      opacity: 0 !important;
      transform: translateY(-10px) !important;
      transition: all 0.3s ease !important;
      pointer-events: none !important;
    `;

    settingsDropdown.innerHTML = `
      <div style="padding: 20px !important;">
        <div style="display: flex !important; align-items: center !important; gap: 8px !important; margin-bottom: 16px !important;">
          <h4 style="margin: 0 !important; color: #1a1a1a !important; font-size: 16px !important; font-weight: 600 !important;">Settings</h4>
        </div>
        
        <div class="enkrypt-api-section" style="background: #F9FAFB !important; border: 1px solid #E9EAEB !important; border-radius: 8px !important; padding: 16px !important;">
          <div style="display: flex !important; align-items: center !important; gap: 8px !important; margin-bottom: 12px !important;">
            <div style="font-size: 16px !important;">✉️</div>
            <div style="font-weight: 600 !important; color: #1a1a1a !important; font-size: 14px !important; flex: 1 !important;">email</div>
            <div class="enkrypt-api-status-text" id="settings-api-status-text" style="font-size: 12px !important; font-weight: 500 !important; color: #666 !important;">Not configured</div>
            <div class="enkrypt-api-status" id="settings-api-status" style="width: 8px !important; height: 8px !important; border-radius: 50% !important; background: #E9EAEB !important;"></div>
          </div>
          
          <div class="enkrypt-api-input-container" style="position: relative !important; margin-bottom: 12px !important;">
            <input type="email" id="settings-enkrypt-api-key" class="enkrypt-api-input" placeholder="Enter your email address..." 
                   style="width: 100% !important; padding: 12px 50px 12px 16px !important; border: 1px solid #E9EAEB !important; border-radius: 8px !important; font-size: 14px !important; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important; transition: all 0.2s ease !important; background: white !important; box-sizing: border-box !important; color: #333 !important;">
            <button type="button" id="settings-api-validate-btn" class="enkrypt-api-validate-btn" 
                    style="position: absolute !important; right: 8px !important; top: 50% !important; transform: translateY(-50%) !important; width: 32px !important; height: 32px !important; border: none !important; background: linear-gradient(135deg, #FF7404 0%, #FF3BA2 100%) !important; border-radius: 6px !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: all 0.2s ease !important; color: white !important; font-size: 12px !important;">
              ✓
            </button>
          </div>
          
          <div style="font-size: 12px !important; color: #666 !important; margin-top: 8px !important;">
            You can view the red team results on the <a href="https://app.enkryptai.com/red-teaming" target="_blank" style="color: #FF7F00 !important; text-decoration: none !important; font-weight: 500 !important;">Enkrypt AI Dashboard</a> using your email address
          </div>
        </div>
      </div>
    `;

    return settingsDropdown;
  }

  // Create success confirmation modal
  createSuccessConfirmationModal(testName = "Task Name here") {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'enkrypt-success-overlay';
    overlay.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background: linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 105, 180, 0.05) 100%) !important;
      backdrop-filter: blur(10px) !important;
      z-index: 2147483647 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      opacity: 0 !important;
      transition: opacity 0.3s ease !important;
    `;

    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
      background: white !important;
      border-radius: 24px !important;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;
      max-width: 480px !important;
      width: 90% !important;
      padding: 40px !important;
      text-align: center !important;
      transform: scale(0.9) translateY(20px) !important;
      transition: all 0.3s ease !important;
      position: relative !important;
    `;

    modal.innerHTML = `
      <!-- Success Icon -->
      <div style="width: 80px !important; height: 80px !important; margin: 0 auto 24px auto !important; background: linear-gradient(135deg, rgba(255, 116, 4, 0.1) 0%, rgba(255, 59, 162, 0.1) 100%) !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; border: 2px solid rgba(255, 116, 4, 0.2) !important;">
        <div style="width: 50px !important; height: 50px !important; background: #22C55E !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important;">
          <svg style="width: 28px !important; height: 28px !important; color: white !important;" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Success Message -->
      <h2 style="margin: 0 0 16px 0 !important; color: #1F2937 !important; font-size: 24px !important; font-weight: 700 !important; line-height: 1.3 !important;">
        Your Red-Teaming task "${testName}" has been started successfully
      </h2>
      
      <p style="margin: 0 0 32px 0 !important; color: #6B7280 !important; font-size: 16px !important; line-height: 1.5 !important;">
        You can track the progress of the Red-Teaming from Enkrypt AI Portal
      </p>

      <!-- Red-Teaming Button -->
      <button id="enkrypt-goto-portal-btn" style="width: 100% !important; padding: 16px 24px !important; background: white !important; color: #FF7404 !important; border: 2px solid transparent !important; border-image: linear-gradient(135deg, #FF7404 0%, #FF3BA2 100%) 1 !important; border-radius: 12px !important; font-size: 16px !important; font-weight: 600 !important; cursor: pointer !important; transition: all 0.2s ease !important; display: flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important; margin-bottom: 24px !important;">
        <span style="background: linear-gradient(135deg, #FF7404 0%, #FF3BA2 100%) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;">Red-Teaming</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_3865_71644)">
            <path d="M9.99984 13.3307L13.3332 9.9974M13.3332 9.9974L9.99984 6.66406M13.3332 9.9974H6.6665M18.3332 9.9974C18.3332 14.5998 14.6022 18.3307 9.99984 18.3307C5.39746 18.3307 1.6665 14.5998 1.6665 9.9974C1.6665 5.39502 5.39746 1.66406 9.99984 1.66406C14.6022 1.66406 18.3332 5.39502 18.3332 9.9974Z" stroke="url(#paint0_linear_3865_71644)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_3865_71644" x1="3.90228" y1="3.69658" x2="16.3007" y2="15.2819" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF7404"/>
              <stop offset="1" stop-color="#FF3BA2"/>
            </linearGradient>
            <clipPath id="clip0_3865_71644">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>

      <!-- Action Buttons -->
      <div style="display: flex !important; gap: 12px !important; align-items: center !important;">
        <button id="enkrypt-back-btn" style="flex: 1 !important; padding: 12px 20px !important; background: white !important; color: #6B7280 !important; border: 1px solid #D1D5DB !important; border-radius: 8px !important; font-size: 14px !important; font-weight: 500 !important; cursor: pointer !important; transition: all 0.2s ease !important; display: flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important;">
          <svg style="width: 16px !important; height: 16px !important;" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </button>
        
        <button id="enkrypt-new-test-btn" style="flex: 1 !important; padding: 12px 20px !important; background: linear-gradient(135deg, #FF7404 0%, #FF3BA2 100%) !important; color: white !important; border: none !important; border-radius: 8px !important; font-size: 14px !important; font-weight: 600 !important; cursor: pointer !important; transition: all 0.2s ease !important; display: flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_3865_65433)">
              <path d="M9.99984 6.66406V13.3307M6.6665 9.9974H13.3332M18.3332 9.9974C18.3332 14.5998 14.6022 18.3307 9.99984 18.3307C5.39746 18.3307 1.6665 14.5998 1.6665 9.9974C1.6665 5.39502 5.39746 1.66406 9.99984 1.66406C14.6022 1.66406 18.3332 5.39502 18.3332 9.9974Z" stroke="white" stroke-opacity="0.98" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_3865_65433">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          Launch New Test
        </button>
      </div>
    `;

    overlay.appendChild(modal);

    // Add event listeners
    const gotoPortalBtn = modal.querySelector('#enkrypt-goto-portal-btn');
    const backBtn = modal.querySelector('#enkrypt-back-btn');
    const newTestBtn = modal.querySelector('#enkrypt-new-test-btn');

    if (gotoPortalBtn) {
      gotoPortalBtn.addEventListener('click', () => {
        window.open('https://app.enkryptai.com/red-teaming', '_blank');
      });
      
      // Add hover effects
      gotoPortalBtn.addEventListener('mouseenter', () => {
        gotoPortalBtn.style.background = '#FF7404';
        gotoPortalBtn.style.color = 'white';
      });
      
      gotoPortalBtn.addEventListener('mouseleave', () => {
        gotoPortalBtn.style.background = 'white';
        gotoPortalBtn.style.color = '#FF7404';
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.hideSuccessConfirmationModal();
      });
    }

    if (newTestBtn) {
      newTestBtn.addEventListener('click', () => {
        this.hideSuccessConfirmationModal();
        // Reset the form to start a new test
        this.resetFormForNewTest();
      });
    }

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.hideSuccessConfirmationModal();
      }
    });

    return overlay;
  }

  // Show success confirmation modal
  showSuccessConfirmationModal(testName = "Task Name here") {
    
    // Hide existing modal if any
    this.hideSuccessConfirmationModal();
    
    // Create and show new modal
    const modal = this.createSuccessConfirmationModal(testName);
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
      modal.style.opacity = '1';
      const modalContent = modal.querySelector('div');
      if (modalContent) {
        modalContent.style.transform = 'scale(1) translateY(0)';
      }
    }, 10);
  }

  // Hide success confirmation modal
  hideSuccessConfirmationModal() {
    const modal = document.getElementById('enkrypt-success-overlay');
    if (modal) {
      modal.style.opacity = '0';
      const modalContent = modal.querySelector('div');
      if (modalContent) {
        modalContent.style.transform = 'scale(0.9) translateY(20px)';
      }
      
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  }

  // Reset form for new test
  resetFormForNewTest() {    
    // Reset test name
    const testNameInput = document.getElementById('test-name-input');
    if (testNameInput) testNameInput.value = '';
    
    // Reset additional instructions
    const additionalInstructions = document.getElementById('additional-instructions');
    if (additionalInstructions) additionalInstructions.value = '';
    
    // Reset custom test configuration
    if (window.EnkryptModules.eventHandlers) {
      window.EnkryptModules.eventHandlers.clearCustomTestConfiguration();
    }
    
    // Reset test type selections
    const checkedTests = document.querySelectorAll('.enkrypt-test-checkbox.checked');
    checkedTests.forEach(checkbox => {
      checkbox.classList.remove('checked');
      const card = checkbox.closest('.enkrypt-test-type-card');
      if (card) card.classList.remove('selected');
      
      const icon = checkbox.querySelector('.enkrypt-checkbox-icon');
      if (icon) icon.style.opacity = '0';
      
      checkbox.style.background = 'white';
      checkbox.style.borderColor = '#E9EAEB';
    });
    
    // Reset state
    window.EnkryptModules.state.setSelectedTestTypes([]);
    window.EnkryptModules.state.setSelectedCustomTestTypes([]);
    
    // Update start button
    this.updateStartButton();
    
  }

  // Create setup screen for initial API key configuration
  createSetupScreen() {    
    const setupOverlay = document.createElement('div');
    setupOverlay.className = 'enkrypt-setup-overlay';
    setupOverlay.style.cssText = `
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
    `;

    setupOverlay.innerHTML = `
      <!-- Character and branding section -->
      <div style="flex: 1 !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; padding: 0px !important; text-align: center !important; position: relative !important;">
        
        <!-- Character illustration -->
        <div style="width: 200px !important; height: 200px !important; margin-bottom: 12px !important; position: relative !important;">
          <div style="width: 100% !important; height: 100% !important; background: rgba(255, 255, 255, 0) !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 0px !important; box-sizing: border-box !important;">
            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="184" viewBox="0 0 190 184" fill="none">
              <path d="M56.5266 182.644C53.8385 181.985 52.7882 179.965 53.3684 176.569C53.9745 173.022 55.4931 170 57.9647 167.424C59.8185 165.492 61.9895 164.051 64.1235 163.337C65.3969 162.911 68.1587 162.386 70.2597 162.171L71.9923 161.994L72.0351 160.175C72.1881 153.615 73.8378 146.599 76.6065 140.729C77.0189 139.855 77.8548 138.317 78.4641 137.314C79.0737 136.309 79.5724 135.425 79.5724 135.35C79.5724 135.274 79.394 135.132 79.1754 135.034C78.4416 134.704 75.6157 132.744 74.0177 131.457C73.1462 130.755 71.6025 129.36 70.5875 128.356L68.742 126.53L67.6961 126.652C66.2309 126.822 60.4902 126.815 58.2609 126.64C52.0236 126.152 46.185 124.593 40.95 122.018C36.5475 119.852 33.1181 117.346 29.8372 113.899C26.5268 110.421 23.8834 106.332 22.2426 102.151L21.5623 100.417L20.3501 99.9772C17.7408 99.0305 15.3299 97.4973 13.4451 95.5854C10.6897 92.7905 8.87509 89.3309 7.52886 84.3068C6.6129 80.8883 6.44599 80.4372 4.77346 76.8623C2.60425 72.224 1.76626 70.016 1.10209 67.1852C0.901114 66.3293 1.01056 64.3105 1.31058 63.339C2.06599 60.892 4.26899 58.9761 6.71368 58.6406L7.33423 58.5553L7.47602 57.1532C7.64206 55.5119 8.14595 54.2861 9.09108 53.2226C10.858 51.2351 13.8857 50.493 16.4771 51.4119C17.0726 51.6235 17.6111 51.8125 17.6738 51.8327C17.7361 51.8529 17.9013 51.5446 18.0405 51.1472C19.0015 48.4072 21.4985 46.7404 24.6417 46.7404C26.7497 46.7404 28.3012 47.4062 29.8476 48.9745C30.894 50.0364 32.0705 52.0228 32.0705 52.7291C32.0705 53.251 32.2221 53.2588 32.7961 52.7672C33.5917 52.0855 35.099 51.3819 36.343 51.112C39.0008 50.5349 41.3497 51.7136 43.1755 54.5409C44.1981 56.1239 44.384 56.7978 44.4536 59.1662C44.5105 61.0968 44.473 61.4991 43.9786 64.2955C43.6838 65.9643 43.3277 67.7683 43.1874 68.305C43.047 68.8416 42.9734 69.2785 43.0239 69.2768C43.0745 69.2751 43.3107 69.0098 43.5489 68.6873C44.0704 67.981 45.4438 67.0332 46.2697 66.8098C47.8215 66.3899 49.9659 66.9604 51.0995 68.0949C53.6161 70.6133 53.4813 74.8898 50.6779 81.457C48.4123 86.7637 45.8495 91.0422 43.7014 93.1034C42.5934 94.1666 42.6026 94.0709 43.4016 96.1547C44.4152 98.7976 46.2789 101.211 48.7467 103.076C50.0242 104.042 52.8425 105.428 54.4804 105.897C56.1356 106.37 57.915 106.701 57.915 106.536C57.915 106.463 57.7582 105.545 57.5667 104.494C57.0389 101.6 56.8604 99.2172 56.8512 94.9266C56.8417 90.4385 57.0325 87.9536 57.6459 84.5993C58.4215 80.3542 59.1867 77.5287 60.5413 73.9061C63.9381 64.8217 69.1203 56.3695 77.234 46.6797C81.9299 41.0713 82.8294 39.9744 85.0018 37.2043C87.8403 33.5847 88.7759 32.2851 90.6212 29.4021C92.2749 26.8175 94.5628 22.3558 95.3633 20.1549C97.5157 14.2345 98.356 8.25738 97.7586 3.11425C97.57 1.4908 97.6601 1.21281 98.4401 1.01689C99.1247 0.844948 101.17 1.96818 106.067 5.20583C116.089 11.8328 121.902 17.7137 125.342 24.7063C127.696 29.4905 128.546 33.4061 128.557 39.5161C128.564 43.3138 128.352 45.1054 127.505 48.402C126.261 53.2455 124.115 58.1103 121.714 61.5326C121.326 62.0846 121.04 62.5668 121.077 62.6038C121.173 62.6998 124.104 60.9815 125.053 60.2724C130.269 56.3797 133.108 52.9487 135.927 47.134C137.2 44.5078 138.214 41.158 138.694 37.999C139.027 35.7999 139.03 35.7872 139.35 35.467C139.544 35.2734 139.831 35.1815 140.241 35.1815C140.821 35.1815 140.907 35.2457 142.343 36.7347C145.231 39.7296 148.639 43.9669 151.167 47.7073C156.477 55.561 160.271 64.9312 162.298 75.1993C163.395 80.7542 163.777 84.5998 163.833 90.6607L163.878 95.4981L165.22 95.953C169.052 97.2516 174.492 99.9191 177.745 102.095C182.067 104.985 185.51 108.627 187.214 112.109C189.01 115.78 189.502 120.554 188.459 124.185C187.289 128.259 185.484 131.138 181.585 135.147C178.961 137.844 175.754 140.381 172.711 142.167C171.546 142.85 171.544 142.852 171.544 143.457C171.544 144.27 170.805 146.508 170.062 147.943C169.578 148.877 169.142 149.425 167.866 150.7C165.462 153.102 163.33 154.23 160.356 154.674C157.48 155.103 154.109 154.053 152.44 152.206C151.839 151.543 151.571 151.355 151.112 151.277C150.175 151.119 148.274 150.476 147.595 150.087C147.248 149.889 146.711 149.498 146.404 149.22C145.929 148.791 145.844 148.756 145.844 148.993C145.844 149.306 146.165 151.697 146.5 153.877C146.622 154.672 146.762 156.834 146.81 158.681L146.898 162.04H147.494C147.822 162.04 148.901 162.14 149.891 162.261C154.593 162.839 157.845 164.362 160.721 167.336C162.762 169.446 164.173 171.716 165.033 174.276C165.449 175.517 165.813 177.743 165.716 178.455C165.48 180.187 164.371 181.807 162.994 182.429L162.232 182.774L144.657 182.813C125.42 182.856 125.739 182.868 124.383 182.021C123.143 181.245 122.34 179.491 122.521 177.955C122.573 177.506 122.708 176.554 122.82 175.839C123.578 171.001 123.765 169.67 123.964 167.7C124.561 161.815 124.369 156.726 123.384 152.283C122.55 148.516 121.107 145.379 119.182 143.142L118.772 142.666L115.235 142.888C109.879 143.226 105.586 143.153 101.882 142.664L100.73 142.512L100.398 142.921C98.2902 145.512 96.687 149.374 95.909 153.732C95.4031 156.566 95.2688 158.883 95.3497 163.384C95.4274 167.717 95.5354 168.934 96.3301 174.447C96.8311 177.925 96.866 179.334 96.473 180.201C96.0719 181.085 95.123 182.042 94.2602 182.433L93.5053 182.774L75.3853 182.8C61.2832 182.819 57.1012 182.785 56.5266 182.644ZM91.0685 176.869C90.8461 175.983 89.8308 169.566 89.6596 167.964C89.4089 165.623 89.4014 158.025 89.6474 155.972C90.2793 150.703 91.296 146.987 93.1565 143.147C93.7057 142.014 94.1551 141.055 94.1551 141.016C94.1551 140.977 94.0355 140.945 93.8894 140.945C93.4788 140.945 88.877 139.429 87.3194 138.78C85.7347 138.12 85.6024 138.099 85.3292 138.467C85.2201 138.614 84.7231 139.272 84.2244 139.93C81.8947 143.005 80.1846 147.062 79.1678 151.93C78.4121 155.549 78.3452 156.36 78.3452 161.904V167.042L74.6634 167.209C69.785 167.43 67.4928 167.894 64.701 169.224C63.1448 169.965 61.5295 171.614 60.623 173.387C60.0192 174.567 59.2144 176.664 59.2144 177.057C59.2144 177.167 63.869 177.212 75.1838 177.21L91.1536 177.208L91.0685 176.869ZM159.737 177.132C159.781 177.088 159.686 176.616 159.527 176.084C158.627 173.076 156.139 170.094 153.351 168.686C152.266 168.138 150.492 167.585 149.209 167.396C148.638 167.311 146.542 167.242 144.55 167.242H140.929L141.04 165.833C141.102 165.058 141.146 162.669 141.138 160.523C141.127 157.382 141.063 156.157 140.808 154.238C139.872 147.211 137.853 142.05 134.646 138.499L134.123 137.919L133.538 138.217C132.229 138.886 128.922 140.052 126.044 140.86L125.23 141.088L126.408 143.437C128.522 147.653 129.562 151.702 129.979 157.345C130.289 161.538 129.877 168.128 128.947 173.862C128.711 175.318 128.518 176.667 128.518 176.86V177.211H144.087C152.65 177.211 159.693 177.176 159.737 177.132ZM160.674 148.871C161.802 148.452 162.496 147.954 163.628 146.754C165.504 144.764 166.178 142.352 165.544 139.903C165.421 139.425 165.354 139.001 165.395 138.959C165.437 138.917 166.107 138.613 166.884 138.283C169.209 137.293 172.107 135.563 174.504 133.734C175.972 132.614 178.6 129.964 179.722 128.474C180.873 126.945 182.209 124.376 182.591 122.957C182.94 121.662 183.027 118.991 182.76 117.755C182.291 115.582 181.004 113.149 179.23 111.087C176.398 107.794 170.283 104.032 164.551 102.056C163.444 101.674 162.516 101.385 162.488 101.412C162.461 101.44 162.219 102.398 161.953 103.541C161.329 106.211 160.686 108.413 159.978 110.301C159.668 111.128 159.433 111.825 159.458 111.849C159.482 111.873 160.181 112.128 161.011 112.415C164.087 113.479 167.011 115.143 168.603 116.736C170.125 118.259 170.33 119.761 169.287 121.747C168.291 123.643 165.912 125.804 162.468 127.939C160.674 129.051 156.986 131.106 154.971 132.117C153.225 132.992 153.187 133.022 152.56 133.992C151.445 135.717 150.201 138.063 149.722 139.343C149.325 140.406 149.257 140.781 149.248 141.957C149.239 143.104 149.289 143.426 149.552 143.917C150.277 145.273 151.906 146.176 153.641 146.184C154.502 146.188 155.205 145.998 156.714 145.355C156.948 145.256 156.944 145.294 156.673 145.752C156.509 146.031 156.337 146.576 156.292 146.962C156.189 147.844 156.535 148.34 157.6 148.837C158.532 149.271 159.565 149.283 160.674 148.871ZM144.466 141.751C144.584 141.132 145.134 139.25 145.687 137.57C146.795 134.205 147.326 131.784 147.259 130.398L147.216 129.497L145.194 131.194C144.083 132.127 142.507 133.351 141.693 133.914C140.879 134.476 140.213 134.992 140.213 135.059C140.213 135.126 140.672 135.956 141.233 136.904C142.296 138.703 143.872 141.882 144.046 142.578C144.101 142.8 144.17 142.958 144.198 142.929C144.227 142.901 144.347 142.371 144.466 141.751ZM114.08 136.748C129.466 135.35 141.217 128.841 149.412 117.177C154.061 110.56 156.526 103.676 157.25 95.2878C157.45 92.9685 157.448 86.4972 157.247 84.1623C156.653 77.2813 154.942 70.2344 152.162 63.2118C151.071 60.4585 148.656 55.5957 147.313 53.4512C146.321 51.8674 143.88 48.3679 142.638 47.601C142.15 48.9045 140.841 51.5816 139.92 53.1579C137.442 57.3983 134.03 61.4526 130.684 64.1313C124.47 69.1066 118.393 71.1589 108.631 71.5785C107.062 71.6458 105.763 71.6891 105.746 71.6741C105.728 71.6597 106.541 70.806 107.553 69.7776C113.287 63.9493 118.152 56.0442 120.504 48.7343C122.003 44.0767 122.447 40.116 121.948 35.8511C121.687 33.6193 121.46 32.5825 120.769 30.4857C119.26 25.8994 116.067 21.3536 111.728 17.6129C108.871 15.1494 104.048 11.5072 103.874 11.6811C103.824 11.7311 103.729 12.4715 103.663 13.3265C103.352 17.336 102.157 21.3293 99.8461 26.0789C96.4545 33.0501 92.3159 38.8526 82.8944 49.8469C76.1451 57.7225 72.2768 63.3601 68.8165 70.3639C65.4038 77.2712 63.7013 83.3931 63.1145 90.8659C62.4524 99.3016 64.2857 108.094 68.0922 114.736C70.1945 118.405 71.8228 120.608 74.3683 123.227C76.4081 125.326 78.3607 126.955 80.7425 128.542C82.7194 129.86 86.1268 131.688 86.2943 131.521C86.3521 131.464 86.0956 130.488 85.7246 129.354C84.8996 126.833 84.5444 125.125 84.3333 122.668C84.0748 119.656 84.3555 116.41 85.1444 113.296C85.4534 112.076 86.7754 108.097 87.2293 107.021C87.4202 106.568 87.4049 106.413 87.1693 106.413C87.0595 106.413 86.3284 106.146 85.545 105.82C82.7382 104.652 80.6974 103.248 78.3452 100.868C74.5207 96.9988 72.1448 91.871 71.4783 86.0476C71.2565 84.1123 71.3807 79.1255 71.701 77.1004C72.0379 74.9681 73.0781 71.1331 73.5078 70.4367C73.6111 70.2697 74.724 70.4911 79.8875 71.7065C88.1594 73.6538 88.9504 73.829 92.4577 74.491C106.682 77.1753 118.106 77.1082 131.707 74.2598C134.079 73.7634 141.309 71.9423 144.831 70.9543C146.539 70.4752 147.678 70.2214 147.731 70.3078C147.885 70.5569 148.292 73.6119 148.451 75.7099C149.064 83.8144 146.355 92.5512 141.485 98.1729C136.289 104.17 128.508 107.382 120.737 106.739C115.317 106.29 111.165 104.59 107.072 101.143L106.39 100.568L105.959 101.071C102.17 105.48 98.8648 110.431 96.1707 115.733C93.4164 121.151 91.7546 126.734 91.4418 131.617C91.3711 132.723 91.3847 133.348 91.4811 133.425C91.7358 133.629 94.2977 134.543 96.1724 135.099C99.0309 135.946 101.718 136.441 105.417 136.804C106.637 136.924 112.568 136.885 114.08 136.748ZM155.403 125.832C157.094 124.91 159.095 123.743 159.849 123.24C161.258 122.299 163.603 120.372 163.603 120.154C163.603 119.967 159.907 118.319 158.766 117.998C156.851 117.458 157.137 117.341 155.954 119.152C154.773 120.962 152.688 123.764 152.392 123.939C152.245 124.026 152.197 124.486 152.197 125.782C152.197 126.731 152.227 127.508 152.263 127.508C152.299 127.508 153.712 126.754 155.403 125.832ZM64.5566 120.781C64.5566 120.737 64.2066 120.104 63.7792 119.373C62.9369 117.933 61.6083 115.349 61.0461 114.058L60.6944 113.25L59.0793 113.151C56.9032 113.019 54.8437 112.602 52.5581 111.832C45.1914 109.348 40.06 104.485 37.4646 97.5273C36.8839 95.9703 36.2015 93.3303 36.3084 93.052C36.3503 92.9425 36.9379 92.4847 37.6136 92.0345C39.0947 91.0485 40.6662 89.4387 41.7724 87.7745C43.4836 85.2 45.9514 79.6422 46.8899 76.2497C47.3681 74.5199 47.4357 72.6505 47.0453 71.9238C46.7323 71.3406 46.0704 71.1805 45.3011 71.5024C43.8365 72.1148 41.6644 75.2984 40.0675 79.1744L39.5922 80.3271L38.6289 80.5051C36.7976 80.8432 35.0153 81.5489 33.6829 82.4629C32.3269 83.3931 30.607 85.4179 29.9469 86.8602C29.7471 87.2974 29.5299 87.6005 29.4649 87.5341C29.2585 87.3231 29.1008 85.5685 29.2059 84.6443C29.3616 83.2729 29.9267 82.234 31.2114 80.9582C32.1121 80.0638 32.5894 79.7237 33.6792 79.1995C34.4222 78.8421 35.5241 78.4427 36.1276 78.3121L37.2249 78.0746L37.3121 75.303C37.4097 72.1989 37.6029 70.3824 38.4366 64.7289C39.093 60.2765 39.1741 58.6362 38.7791 57.8034C38.4383 57.0842 37.8117 56.7111 36.9437 56.7105C36.3563 56.71 36.1744 56.7862 35.6691 57.2428C34.9027 57.9358 34.4805 58.794 33.8865 60.868C33.3116 62.8752 32.4525 67.4886 32.1958 69.9466L32.0133 71.6966L30.7063 71.7856C28.3841 71.944 25.2559 72.8606 22.4768 74.1963C20.6642 75.0672 17.9273 76.5751 17.0085 77.2085C16.6256 77.4726 16.2923 77.6657 16.2681 77.6382C16.2438 77.6107 16.0122 77.1004 15.7541 76.5046C14.8133 74.3344 11.0992 67.2436 9.94294 65.4109C9.13786 64.1342 8.28254 63.7649 7.42837 64.325C6.62618 64.8509 6.43444 66.3096 6.96115 67.8761C7.12748 68.3703 7.91523 70.1726 8.71193 71.881C11.1176 77.0403 11.6288 78.421 12.8063 82.9342C13.7575 86.5787 14.893 89.02 16.6475 91.1919C18.735 93.7759 21.6264 95.2901 24.9177 95.523L26.223 95.6155L26.5545 96.9713C27.1805 99.5305 28.6255 102.735 30.2397 105.145C34.6422 111.716 40.5576 116.17 48.2413 118.701C51.3086 119.711 53.7007 120.197 58.4203 120.766C59.1463 120.854 64.5566 120.867 64.5566 120.781ZM126.385 96.817C129.616 96.1983 132.707 94.1663 134.535 91.4589C135.864 89.491 136.847 87.0625 137.236 84.7877C137.476 83.3833 137.647 81.8506 137.563 81.8506C137.534 81.8506 136.965 82.1014 136.299 82.4083C134.838 83.0807 132.842 83.8734 127.868 85.7546C125.804 86.5359 123.367 87.4757 122.454 87.8438C119.863 88.8876 116.274 90.2452 115.168 90.6001C114.615 90.7775 114.144 90.9786 114.121 91.0462C114.024 91.3424 116.306 94.0331 117.23 94.7127C119.916 96.6861 123.166 97.4331 126.385 96.817ZM94.4202 95.538C96.9151 94.6564 98.5541 93.2283 99.9907 90.685L100.498 89.7863L100.178 89.6649C100.002 89.5979 99.0785 89.2682 98.1256 88.9321C93.9518 87.4592 83.8583 83.7104 81.0624 82.5947L80.3145 82.2961L80.2247 82.7053C80.0855 83.3399 80.4029 86.4334 80.7211 87.5404C81.9293 91.7473 85.1571 94.8497 89.3183 95.8056C90.7037 96.1235 93.1213 95.9969 94.4202 95.538ZM19.1413 72.4786C19.9394 72.0922 20.8415 71.6868 21.1465 71.5782C21.6749 71.3892 21.6971 71.3562 21.6177 70.8719C21.4884 70.0824 19.1546 62.3987 18.5609 60.8067C17.8424 58.8804 17.4318 58.0999 16.7451 57.3544C16.0781 56.6302 15.3896 56.349 14.6319 56.4915C12.1884 56.9501 12.2672 59.4592 14.9594 66.8962C15.7223 69.0034 17.4835 73.1814 17.6088 73.1814C17.6536 73.1814 18.3431 72.8652 19.1413 72.4786ZM26.4598 69.9304C27.4161 69.6525 28.3243 69.4247 28.4782 69.4247C28.7335 69.4247 28.7505 69.347 28.6749 68.5217C28.6295 68.025 28.4355 65.5704 28.2443 63.0673C27.7809 56.9978 27.4109 55.0143 26.4644 53.5209C25.7633 52.4152 24.3342 52.0315 23.2906 52.6681C21.9253 53.5012 21.9758 55.1232 23.7081 66.1016C24.4095 70.546 24.3876 70.4361 24.5724 70.4361C24.6538 70.4361 25.5034 70.2084 26.4598 69.9304Z" fill="#3A0A07" stroke="#3A0A07" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M84.1926 130.593C80.5143 128.65 77.2796 126.224 74.3682 123.226C71.8207 120.601 70.1932 118.399 68.0922 114.733C64.2857 108.091 62.4523 99.2983 63.1145 90.8627C63.7012 83.3898 65.4038 77.268 68.8164 70.3607C72.2767 63.3568 76.145 57.7193 82.8943 49.8436C92.3159 38.8494 96.4545 33.0468 99.846 26.0756C102.157 21.3261 103.352 17.3328 103.663 13.3233C103.729 12.4682 103.824 11.7279 103.874 11.6779C104.048 11.5039 108.871 15.1461 111.728 17.6096C114.282 19.8116 116.917 22.8785 118.453 25.4376C119.77 27.6309 120.944 30.5455 121.512 33.0312C121.836 34.4495 122.166 37.5114 122.163 39.0785C122.15 46.2696 118.968 54.7457 113.187 62.9919C111.367 65.5871 109.714 67.5779 107.553 69.7743C106.541 70.8028 105.728 71.6564 105.745 71.6709C105.763 71.6859 107.062 71.6425 108.631 71.5752C114.347 71.3296 118.948 70.4852 122.44 69.0412C129.516 66.1156 135.552 60.6292 139.92 53.1547C140.841 51.5783 142.15 48.9013 143.186 47.5318C143.88 48.3647 146.321 51.8641 147.313 53.448C148.55 55.4237 151.02 60.3475 152.01 62.8112C152.67 64.4552 152.72 64.6535 152.476 64.6535C151.861 64.6535 151.986 65.9677 152.702 67.023C152.939 67.3727 153.063 67.7553 153.063 68.1361C153.063 68.4552 153.258 69.2938 153.496 69.9994C153.735 70.7051 153.929 71.4038 153.929 71.5512C153.929 71.9067 153.655 72.1667 153.28 72.1667C152.863 72.1667 152.63 72.4369 152.63 72.9221C152.63 73.1828 152.415 73.6035 152.036 74.0832C151.237 75.0946 151.129 75.4188 151.339 76.1707C151.484 76.6877 151.473 76.8628 151.273 77.285C151.113 77.6237 151.065 77.9658 151.125 78.3427C151.272 79.2619 150.625 79.5165 150.116 78.7397C149.832 78.3059 149.775 76.399 150.016 75.4177C150.217 74.6028 150.124 73.1036 149.83 72.3979C149.562 71.7575 148.67 71.1033 148.218 71.2166C147.908 71.2946 147.865 71.257 147.863 70.9051C147.859 70.1136 147.814 70.1142 144.83 70.951C141.309 71.939 134.079 73.7601 131.707 74.2566C118.106 77.105 106.682 77.172 92.4577 74.4878C88.9503 73.8257 88.1594 73.6506 79.8874 71.7032C74.724 70.4878 73.6111 70.2665 73.5077 70.4335C73.078 71.1299 72.0379 74.9649 71.7009 77.0972C71.3807 79.1223 71.2565 84.1091 71.4783 86.0443C71.9738 90.3749 73.4676 94.4286 75.8646 97.9477C77.5013 100.351 80.5016 103.121 83.1097 104.637C84.1614 105.248 86.8215 106.41 87.1692 106.41C87.4048 106.41 87.4201 106.564 87.2293 107.017C86.7753 108.094 85.4534 112.072 85.1444 113.293C83.7661 118.734 83.9515 123.986 85.7098 129.306C86.0664 130.386 86.3583 131.332 86.3583 131.41C86.3583 131.68 85.9841 131.539 84.1926 130.593Z" fill="url(#paint0_linear_3691_81474)" stroke="#FF491E" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M59.2139 177.055C59.2139 176.663 60.0187 174.565 60.6225 173.385C61.5289 171.613 63.1443 169.964 64.7004 169.223C67.4922 167.892 69.7844 167.429 74.6628 167.208L78.3446 167.04V161.903C78.3446 156.359 78.4116 155.548 79.1673 151.929C80.184 147.061 81.8941 143.003 84.2239 139.929C84.7225 139.271 85.2195 138.613 85.3287 138.466C85.6018 138.098 85.7341 138.119 87.3188 138.779C88.8764 139.428 93.4782 140.944 93.8888 140.944C94.035 140.944 94.1545 140.976 94.1545 141.015C94.1545 141.054 93.7052 142.013 93.1559 143.146C91.2954 146.985 90.2787 150.701 89.6469 155.971C89.4008 158.023 89.4084 165.622 89.659 167.963C89.8302 169.564 90.8455 175.982 91.0679 176.868L91.1531 177.207L75.1832 177.209C63.8685 177.21 59.2139 177.166 59.2139 177.055Z" fill="url(#paint1_linear_3691_81474)" stroke="url(#paint2_linear_3691_81474)" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M58.4204 120.767C53.7008 120.197 51.3086 119.712 48.2414 118.701C40.5576 116.171 34.6422 111.716 30.2397 105.145C28.6255 102.736 27.1805 99.5309 26.5545 96.9717L26.223 95.6159L24.9178 95.5234C21.6264 95.2905 18.735 93.7763 16.6475 91.1923C14.893 89.0204 13.7576 86.5791 12.8064 82.9346C11.6288 78.4214 11.1177 77.0407 8.71196 71.8814C7.91525 70.173 7.1275 68.3707 6.96117 67.8765C6.43446 66.31 6.6262 64.8513 7.42839 64.3254C8.28256 63.7653 9.13788 64.1346 9.94296 65.4113C11.0992 67.244 14.8133 74.3348 15.7541 76.505C16.0122 77.1008 16.2438 77.6112 16.2681 77.6386C16.2923 77.6661 16.6256 77.473 17.0085 77.2089C17.9273 76.5755 20.6643 75.0676 22.4768 74.1967C25.2559 72.861 28.3841 71.9444 30.7064 71.7861L32.0133 71.697L32.1958 69.947C32.4525 67.489 33.3116 62.8756 33.8865 60.8684C34.4805 58.7944 34.9027 57.9362 35.6691 57.2432C36.1744 56.7867 36.3564 56.7104 36.9437 56.7109C37.8117 56.7115 38.4384 57.0846 38.7791 57.8038C39.1741 58.6367 39.093 60.2769 38.4366 64.7293C37.6029 70.3828 37.4098 72.1993 37.3122 75.3034L37.225 78.075L36.1276 78.3125C35.5241 78.4431 34.4222 78.8425 33.6792 79.1999C32.5894 79.7241 32.1121 80.0642 31.2114 80.9586C29.9267 82.2344 29.3616 83.2733 29.2059 84.6447C29.1008 85.5689 29.2585 87.3235 29.465 87.5345C29.5299 87.6009 29.7471 87.2978 29.9469 86.8606C30.607 85.4183 32.3269 83.3935 33.683 82.4633C35.0153 81.5493 36.7976 80.8436 38.6289 80.5055L39.5923 80.3275L40.0676 79.1748C41.6644 75.2988 43.8365 72.1152 45.3012 71.5029C47.6685 70.5128 47.9832 73.7701 46.0179 78.9231C44.6815 82.4275 43.0092 85.9145 41.7724 87.7749C40.6662 89.4391 39.0947 91.049 37.6136 92.0349C36.9379 92.4851 36.3503 92.9429 36.3084 93.0524C36.2016 93.3307 36.8839 95.9707 37.4646 97.5277C40.0601 104.485 45.1914 109.348 52.5581 111.832C54.8437 112.603 56.9032 113.02 59.0793 113.152L60.6944 113.25L61.0461 114.058C61.6083 115.35 62.9369 117.933 63.7793 119.373C64.2066 120.104 64.5566 120.738 64.5566 120.782C64.5566 120.868 59.1463 120.854 58.4204 120.767Z" fill="url(#paint3_linear_3691_81474)" stroke="url(#paint4_linear_3691_81474)" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M128.518 176.863C128.518 176.67 128.712 175.321 128.947 173.865C129.878 168.131 130.289 161.542 129.979 157.348C129.562 151.705 128.522 147.656 126.408 143.44L125.23 141.091L126.044 140.863C128.922 140.055 132.229 138.889 133.538 138.221L134.123 137.922L134.647 138.502C137.853 142.054 139.873 147.214 140.808 154.241C141.063 156.161 141.128 157.385 141.139 160.526C141.146 162.672 141.102 165.062 141.041 165.836L140.929 167.245H144.55C146.542 167.245 148.638 167.314 149.21 167.399C150.492 167.588 152.266 168.141 153.351 168.689C156.139 170.097 158.628 173.079 159.527 176.087C159.687 176.619 159.781 177.091 159.737 177.135C159.693 177.179 152.65 177.215 144.087 177.215H128.518V176.863Z" fill="url(#paint5_linear_3691_81474)" stroke="url(#paint6_linear_3691_81474)" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M152.196 125.782C152.196 124.486 152.245 124.026 152.391 123.94C152.687 123.764 154.772 120.963 155.954 119.152C157.136 117.341 156.851 117.458 158.766 117.998C159.906 118.319 163.603 119.967 163.603 120.155C163.603 120.372 161.258 122.299 159.849 123.24C158.706 124.003 152.476 127.508 152.262 127.508C152.226 127.508 152.196 126.732 152.196 125.782Z" fill="#FDFCFC" stroke="#FDFCFC" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M122.221 96.8781C120.615 96.6429 118.761 95.8387 117.23 94.7137C116.305 94.0341 114.024 91.3434 114.121 91.0472C114.144 90.9796 114.614 90.7785 115.168 90.6011C116.274 90.2462 119.862 88.8886 122.454 87.8448C123.367 87.4767 125.803 86.537 127.868 85.7556C132.841 83.8744 134.838 83.0817 136.299 82.4093C136.965 82.1024 137.534 81.8516 137.563 81.8516C137.787 81.8516 137.109 85.7908 136.648 87.1727C135.53 90.5181 133.616 93.1671 131.095 94.8542C128.442 96.6305 125.346 97.3364 122.221 96.8781Z" fill="#FDFCFC" stroke="#FDFCFC" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5831 70.9778C13.6648 64.165 12.3261 59.043 13.0815 57.5808C13.5297 56.7139 14.7128 56.2451 15.6619 56.5584C16.2744 56.7607 17.201 57.738 17.6772 58.6835C17.871 59.0681 18.2683 60.0235 18.5606 60.8066C19.1543 62.3985 21.4881 70.0823 21.6174 70.8718C21.6968 71.3561 21.6746 71.389 21.1462 71.578C20.8412 71.6867 19.9391 72.0921 19.141 72.4785C18.3428 72.8651 17.6533 73.1812 17.6085 73.1812C17.5637 73.1812 17.1023 72.1898 16.5831 70.9778Z" fill="#FF4D0F" stroke="#FF4D0F" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M157.6 148.832C156.535 148.336 156.189 147.84 156.292 146.958C156.338 146.572 156.509 146.027 156.674 145.748C156.944 145.29 156.948 145.252 156.715 145.351C155.206 145.994 154.502 146.184 153.641 146.18C151.907 146.172 150.277 145.269 149.552 143.913C149.289 143.422 149.239 143.1 149.248 141.953C149.257 140.777 149.325 140.402 149.722 139.339C150.201 138.058 151.445 135.713 152.56 133.988C153.187 133.018 153.225 132.988 154.971 132.113C156.986 131.102 160.674 129.047 162.468 127.935C165.912 125.8 168.291 123.639 169.287 121.743C170.33 119.757 170.125 118.255 168.604 116.732C167.012 115.139 164.087 113.474 161.011 112.411C160.181 112.124 159.482 111.869 159.458 111.845C159.434 111.821 159.668 111.124 159.978 110.297C160.686 108.409 161.33 106.207 161.953 103.537C162.22 102.393 162.461 101.436 162.489 101.408C162.516 101.38 163.445 101.67 164.551 102.051C170.283 104.028 176.398 107.79 179.23 111.083C181.004 113.145 182.291 115.578 182.76 117.751C183.027 118.987 182.94 121.658 182.591 122.953C182.209 124.372 180.873 126.941 179.722 128.469C178.6 129.96 175.972 132.61 174.504 133.73C172.108 135.559 169.209 137.289 166.884 138.278C166.107 138.609 165.437 138.913 165.396 138.955C165.354 138.997 165.421 139.421 165.545 139.899C166.179 142.348 165.504 144.76 163.628 146.75C162.496 147.95 161.802 148.448 160.674 148.867C159.565 149.279 158.533 149.267 157.6 148.832Z" fill="url(#paint7_linear_3691_81474)" stroke="url(#paint8_linear_3691_81474)" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M89.3176 95.8063C85.1565 94.8504 81.9287 91.748 80.7205 87.5411C80.4023 86.4341 80.0849 83.3406 80.2241 82.7061L80.3139 82.2969L81.0618 82.5954C83.8576 83.7111 93.9511 87.4599 98.125 88.9328C99.0779 89.2689 100.002 89.5986 100.177 89.6657L100.498 89.787L99.9901 90.6857C98.5535 93.229 96.9144 94.6571 94.4195 95.5387C93.1206 95.9976 90.7031 96.1242 89.3176 95.8063Z" fill="#FDFCFC" stroke="#FDFCFC" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M105.416 136.804C101.718 136.441 99.0302 135.945 96.1717 135.098C94.297 134.543 91.7351 133.629 91.4804 133.425C91.3839 133.348 91.3704 132.722 91.4411 131.616C91.7538 126.734 93.4157 121.151 96.1699 115.732C98.8641 110.431 102.17 105.479 105.958 101.07L106.389 100.568L107.072 101.142C110.215 103.79 113.313 105.362 117.017 106.19C124.954 107.963 133.017 105.919 139.055 100.602C143.974 96.2698 147.081 90.1442 148.236 82.5003C148.538 80.4951 148.569 76.173 148.297 73.9034C148.022 71.6069 148.026 71.2477 148.331 71.1876C148.684 71.1177 149.605 71.8626 149.829 72.4007C150.124 73.1064 150.216 74.6056 150.016 75.4205C149.774 76.4018 149.831 78.3088 150.115 78.7425C150.624 79.5193 151.271 79.2647 151.124 78.3455C151.064 77.9686 151.112 77.6265 151.273 77.2878C151.473 76.8656 151.483 76.6905 151.339 76.1735C151.128 75.4216 151.236 75.0974 152.035 74.086C152.414 73.6063 152.629 73.1856 152.629 72.9249C152.629 72.4397 152.862 72.1695 153.279 72.1695C153.654 72.1695 153.929 71.9095 153.929 71.554C153.929 71.4066 153.734 70.7079 153.496 70.0022C153.257 69.2966 153.063 68.458 153.063 68.1389C153.063 67.7581 152.938 67.3755 152.701 67.0258C151.989 65.9757 151.86 64.6562 152.47 64.6562C152.683 64.6562 152.861 65.0085 153.331 66.354C155.484 72.5287 156.731 78.1984 157.246 84.1619C157.447 86.4968 157.449 92.968 157.249 95.2873C156.627 102.492 154.725 108.558 151.292 114.287C146.223 122.744 139.018 129.114 130.322 132.825C125.473 134.894 120.039 136.206 114.079 136.747C112.568 136.885 106.636 136.923 105.416 136.804Z" fill="#FF3448" stroke="#FF3448" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.3566 70.1129C24.2403 69.5494 23.1429 62.5317 22.747 59.8183C22.2911 56.6962 22.2258 54.2917 22.5749 53.5002C23.0269 52.4758 24.3823 52.0727 25.5348 52.6197C26.4834 53.0702 27.2122 54.6564 27.6777 57.2831C27.7984 57.9622 28.0531 60.5662 28.2443 63.0692C28.4354 65.5723 28.6295 68.0268 28.6748 68.5236C28.7505 69.3489 28.7334 69.4266 28.4782 69.4266C28.3243 69.4266 27.4161 69.6543 26.4597 69.9323C25.5033 70.2103 24.6538 70.438 24.5723 70.438C24.4903 70.438 24.3936 70.2918 24.3566 70.1129Z" fill="#FF4D0F" stroke="#FF4D0F" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M144.046 142.581C143.873 141.885 142.297 138.706 141.233 136.908C140.672 135.959 140.214 135.129 140.214 135.062C140.214 134.995 140.88 134.48 141.694 133.917C142.508 133.354 144.083 132.13 145.195 131.197L147.216 129.5L147.26 130.402C147.327 131.787 146.796 134.209 145.688 137.573C145.134 139.253 144.585 141.135 144.467 141.754C144.348 142.374 144.228 142.904 144.199 142.933C144.17 142.962 144.102 142.803 144.046 142.581Z" fill="#FF295F" stroke="#FF295F" stroke-width="0.474747" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_3691_81474" x1="75.1818" y1="26.2889" x2="159.516" y2="86.0844" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint1_linear_3691_81474" x1="63.901" y1="142.981" x2="92.516" y2="166.947" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint2_linear_3691_81474" x1="63.901" y1="142.981" x2="92.516" y2="166.947" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint3_linear_3691_81474" x1="14.4318" y1="64.5315" x2="61.5632" y2="104.288" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint4_linear_3691_81474" x1="14.4318" y1="64.5315" x2="61.5632" y2="104.288" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint5_linear_3691_81474" x1="129.861" y1="142.714" x2="158.596" y2="166.301" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint6_linear_3691_81474" x1="129.861" y1="142.714" x2="158.596" y2="166.301" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint7_linear_3691_81474" x1="153.764" y1="107.231" x2="186.483" y2="128.784" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
                <linearGradient id="paint8_linear_3691_81474" x1="153.764" y1="107.231" x2="186.483" y2="128.784" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF7404"/>
                  <stop offset="1" stop-color="#FF3BA2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Title -->
        <h1 style="margin: 0 0 12px 0 !important; color: white !important; font-size: 32px !important; font-weight: 700 !important; letter-spacing: 2px !important; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;">
          R.A.Y.D.E.R
        </h1>

        <!-- Subtitle -->
        <h2 style="margin: 0 0 20px 0 !important; color: rgba(255, 255, 255, 0.9) !important; font-size: 16px !important; font-weight: 500 !important; letter-spacing: 0.5px !important;">
          Forget APIs. Forget Setups. Red team AI chatbots live, right in your browser.
        </h2>

        <!-- Description -->
        <p style="margin: 0 0 32px 0 !important; color: rgba(255, 255, 255, 0.8) !important; font-size: 14px !important; line-height: 1.5 !important; text-align: center !important;">
          Revolutionize security testing for generative AI by testing chatbots directly through their web interfaces. No API keys, backend access, or developer setup required... just install the Chrome extension and test immediately.
        </p>
      </div>

      <!-- Setup form section -->
      <div style="background: rgba(255, 255, 255, 0.95) !important; margin: 0 20px 20px 20px !important; border-radius: 16px !important; padding: 24px !important; backdrop-filter: blur(20px) !important;">
        
        <!-- Form title -->
        <h3 style="margin: 0 0 16px 0 !important; color: #1a1a1a !important; font-size: 16px !important; font-weight: 600 !important; text-align: center !important;">
          Enter your Email Address below and validate to proceed
        </h3>

        <!-- API Key input group -->
        <div style="margin-bottom: 16px !important;">
          <label style="display: block !important; margin-bottom: 8px !important; color: #374151 !important; font-size: 14px !important; font-weight: 500 !important;">Email Address</label>
          <div style="position: relative !important;">
            <input 
              type="email" 
              id="enkrypt-setup-email" 
              placeholder="Enter your email address" 
              style="width: 100% !important; padding: 12px 50px 12px 16px !important; border: 1px solid #E5E7EB !important; border-radius: 8px !important; font-size: 14px !important; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important; background: white !important; box-sizing: border-box !important; color: #1a1a1a !important; outline: none !important; transition: all 0.2s ease !important;"
            />
            <button 
              type="button" 
              id="enkrypt-setup-validate-btn" 
              style="position: absolute !important; right: 8px !important; top: 50% !important; transform: translateY(-50%) !important; background: #E5E7EB !important; color: #6B7280 !important; border: none !important; padding: 8px 12px !important; border-radius: 6px !important; font-size: 12px !important; font-weight: 500 !important; cursor: pointer !important; transition: all 0.2s ease !important;"
            >
              Validate Email
            </button>
          </div>
        </div>

        <div style="text-align: center !important;">
        You can view the red team results on the <a href="https://app.enkryptai.com/red-teaming" target="_blank" style="color: #FF7F00 !important; text-decoration: none !important; font-weight: 500 !important;">Enkrypt AI Dashboard</a> using your email address
        </div>
      </div>
    `;

    return setupOverlay;
  }
};

// Singleton instance
window.EnkryptModules.uiComponents = new window.EnkryptModules.UIComponents(); 