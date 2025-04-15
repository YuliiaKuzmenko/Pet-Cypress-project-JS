# Delek Homes Automation Testing

This project utilizes **Cypress** with **JavaScript** to automate end-to-end testing for the Delek Homes website: [https://delekhomes.com/](https://delekhomes.com/). The goal is to ensure seamless user interactions and validate core functionalities.

## 🛠️ Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Visual Studio Code](https://code.visualstudio.com/) (for the best development experience)

## 📦 Installation

1. Clone this repository:
   - git clone https://github.com/YuliiaKuzmenko/Pet-Cypress-project-JS.git
   - cd Pet-Cypress-project-JS

2. Install the required dependencies:
    - npm install

3. Open the project in Visual Studio Code:
    - code .

## 🔧 Configuration
Test configurations can be adjusted in the `playwright.config.ts` file. This includes settings for:

- **Browsers**: Chromium, Firefox, WebKit
- **Base URL**
- **Timeout durations**
- **Test retries**

To enhance your development experience with syntax highlighting and IntelliSense, install the following Visual Studio Code extensions:

- [Playwright Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Prettier – Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 🧪 Running Tests

Execute the tests using the following commands from the Visual Studio Code integrated terminal:

- npx cypress open (Opens the Cypress Test Runner in interactive mode).

- npx cypress run (Runs all tests headlessly in the terminal).

- npx cypress run --spec "cypress/e2e/example.cy.js" (Runs a specific test file).

- npx cypress run --browser chrome (Runs tests in Chrome).

- npx cypress run --headed (Runs tests in a visible browser window).

- npx cypress run --record (Runs tests and records results to the Cypress Dashboard (if set up)).

## 📁 Project Structure

- `cypress/e2e/` – Contains all test scripts.
- `cypress/fixtures/` – Holds test data in JSON format for reuse in tests.
- `cypress/support/` – Includes custom commands and support utilities.
- `cypress.config.js` – Configuration file for Cypress settings.
- `package.json` – Project metadata and npm scripts.
- `.eslintrc.json` – ESLint configuration file (optional).
- `.prettierrc` – Prettier configuration file (optional).

## 🧑‍💻 Contributing

Contributions are welcome! Please follow these steps:
1. **Fork** the repository.
2. **Create a new branch**:
   - git checkout -b feature/your-feature
3. **Commit your changes**:
   - git commit -am 'Add new feature'
4. **Push to the branch**:
   - git push origin feature/your-feature
5. **Create a new Pull Request**

