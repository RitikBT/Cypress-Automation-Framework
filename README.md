# Project Title

Cypress Automation overview of use/purpose.

## Description

Cypress is a next generation front end testing tool built for the modern web. This framework is designed to simplify and streamline your UI & API using Cypress, a powerful end-to-end testing frame

## Installation and Setup

To get started with this framework, follow these steps:

### 1. Install Cypress

```bash
npm install cypress --save-dev
```
### 2. Install Cypress-XPath Plugin
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

- reports: Stores test reports and screenshots generated during test execution.

- pages: Contains page class definitions for different web pages, making it easier to interact with web elements.

- logs: Logs generated during test execution are saved in this folder.

- fixtures: Test data in JSON format is stored here.

- videos: Store videos of the test cases.

- screenshot: Store Screenshot of failed test cases.
  

### Running Tests
To run all UI tests on chrome browser, use the following command:
```
npm run test:chrome
```
To run all UI testson Edge browser, use the following command:
```
npm run test:edge
```
