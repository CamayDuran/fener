// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir:'./tests',
    retries:1,
    timeout:30000,
    reporter: 'allure-playwright',
    use:{
      baseURL:"https://fenerbahce.org/",
      headless: true,
      viewport:{width:1200, height:720},
      video:"on",
      //on-first-retry
      screenshot:"on"
      //only-on-failure
    },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  //  {
     // name: 'firefox',
     // use: { ...devices['Desktop Firefox'] },
   // },
    //{
      //name: 'webkit',
      //use: { ...devices['Desktop Safari'] },
   // },
  ],
};

module.exports = config;