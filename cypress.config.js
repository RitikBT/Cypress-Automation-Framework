const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges: false,
  retries: 1,
  video: false,


  // defaultCommandTimeout: 100000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },


  // 
  env: {
    URL: 'https://opensource-demo.orangehrmlive.com/',
// URL: 'https://www.flipkart.com/'
  },




});
