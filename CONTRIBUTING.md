# Contributing to R.A.Y.D.E.R

Thank you for your interest in contributing to **Enkrypt AI R.A.Y.D.E.R** — the Red Teaming Assistant for Chatbot Security! Contributions from the community help make AI security testing more accessible and effective for everyone.

Please read this guide before submitting a contribution.

---

## Contributor License Agreement (CLA)

Before your contribution can be accepted, you must agree to our [Contributor License Agreement](CLA.md). By submitting a pull request, you confirm that you have read and agree to the CLA terms.

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this standard. Please report unacceptable behavior to [security@enkryptai.com](mailto:security@enkryptai.com).

---

## How to Contribute

### Reporting Bugs

1. Check [existing issues](https://github.com/enkryptai/rayder/issues) to avoid duplicates.
2. Open a new issue with the **Bug Report** template.
3. Include:
   - A clear description of the problem
   - Steps to reproduce
   - Expected vs. actual behavior
   - Chrome version and OS

### Suggesting Features

1. Open a [GitHub Issue](https://github.com/enkryptai/rayder/issues) with the **Feature Request** template.
2. Describe the use case and why it would benefit the AI security community.
3. Be open to discussion — we may refine the idea together before implementation begins.

### Submitting a Pull Request

1. **Fork** the repository and clone it locally:
   ```bash
   git clone https://github.com/<your-username>/rayder.git
   cd rayder
   ```

2. **Create a branch** from `main` using a descriptive name:
   ```bash
   git checkout -b feat/chatbot-selector-improvements
   # or
   git checkout -b fix/timeout-handling
   ```

3. **Make your changes**, following the code style guidelines below.

4. **Commit** with a clear, conventional message:
   ```bash
   git commit -m "feat: add support for Gemini chatbot selector"
   git commit -m "fix: handle response timeout gracefully"
   git commit -m "docs: update installation instructions"
   ```

5. **Push** to your fork and open a Pull Request against `main`:
   ```bash
   git push origin feat/chatbot-selector-improvements
   ```

6. Fill in the PR description template, including:
   - What the change does
   - Why it is needed
   - Any relevant issue numbers (e.g., `Closes #42`)

---

## Development Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/enkryptai/rayder.git
   ```

2. Load the extension in Chrome:
   - Navigate to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked** and select the `rayder` folder

3. After making changes, click the refresh icon on the extension card in `chrome://extensions/` to reload.

---

## Code Style Guidelines

- Use clear, descriptive variable and function names.
- Keep functions small and focused on a single responsibility.
- Avoid hardcoding values — use the constants and config defined in `js/modules/config.js`.
- Do not commit credentials, API keys, or personally identifiable information.
- Prefer editing existing files over creating new ones unless a new module is clearly warranted.

---

## Areas Where Help Is Needed

| Area | Description |
|------|-------------|
| **Chatbot Compatibility** | Extend support to additional AI chatbot platforms |
| **New Test Types** | Propose and implement additional red teaming categories |
| **Bug Fixes** | Pick up open issues labelled `good first issue` |
| **Documentation** | Improve guides, inline comments, and examples |
| **UI/UX** | Enhance the extension interface and report visualizations |

---

## Review Process

- All PRs are reviewed by the Enkrypt AI maintainers.
- We aim to provide feedback within **5 business days**.
- Please be patient and responsive to review comments.
- PRs that go without a response for 14 days may be closed, but can be reopened.

---

## License

By contributing, you agree that your contributions will be licensed under the [Apache License 2.0](LICENSE) and subject to the terms of the [Contributor License Agreement](CLA.md).
