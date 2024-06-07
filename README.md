# Project Title

Cypress Automation overview of use/purpose.

## Description

Cypress is a next generation front end testing tool built for the modern web. This framework is designed to simplify and streamline your UI & API using Cypress, a powerful end-to-end testing frame

## Installation and Setup

To get started with this framework, follow these steps:

###  Install Cypress

```bash
npm install cypress --save-dev
```
###  Install Cypress-XPath Plugin
Cypress-XPath is a useful plugin that enables you to use XPath selectors in your Cypress tests. Install it using npm:
```
npm install -D cypress-xpath
```
After installation, add the following line to your commands.js file (usually located in the "support" folder):
```
import 'cypress-xpath';
```
### Code Structure
This Cypress Automation Framework follows a structured approach for better maintainability and scalability. Below is an overview of the code structure:
### Comprehensive Testing
This framework is designed to support testing :

- UI Testing: UI tests are located under the e2e/Test folder. Each test file typically follows the naming convention Test "TC_XX_testCaseName".cy.js, where "XX" represents the test case id and "testCaseName" represents the test case name.

- API Testing: API tests are located in the e2e/apiTest folder. These tests utilize the apiconfig.json file for endpoint configuration and the apiUtils.js utility functions for common API interactions.


### Folder Structure

- `cypress/fixtures`: Contains external fixtures (e.g., login credentials data) that can be used to mock data during tests.
- `cypress/support`: Contains custom commands and global configuration.
- `cypress/pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `cypress/reports`: Contains the report for tests.
- `cypress/screenshot`: Contains Screenshot of failed test cases.
- `cypress/videos`: Contains videos of the test cases.
- `cypress/logs`: Logs generated during test execution are saved in this folder.
  

### Running Tests
To run all UI tests on chrome browser, use the following command:
```
npm run test:chrome
```
To run all UI testson Edge browser, use the following command:
```
npm run test:edge
```

## 📊 Reporting

Mochawesome report (Screenshots and Videos are attached by default on test failure) is stored in the `cypress/reports` directory.


###  Configuration

- Modify `cypress.config.json` for Cypress configuration settings.
- Customize `commands.js` and other files in `cypress/support` for reusable commands.
