const log4jsConfig = require("./log4js.conf");
const AllureReporter = require("jasmine-allure-reporter");
const fs = require("fs");
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: "jasmine2",
  // framework: 'custom',
  seleniumArgs: ["-browserTimeout=60"],
  ignoreProtectedModeSettings: true,

  params: {
    allureReportDirectory: "./target/allure-xml-report",
  },

  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  // Before performing any action, Protractor waits until there are no pending asynchronous tasks in your Angular application
  allScriptsTimeout: 60000,
  // How long to wait for a page to load.
  getPageTimeout: 60000,
    //to remove if selenoid config is used
    seleniumAddress: "http://localhost:4444/wd/hub",
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
        print: function () {
        }
    },

  onPrepare: () => {
    log4jsConfig.call();
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1200, 800);
    //to remove if selenoid is used
    //browser.driver.manage().window().maximize();

    // allure reporter
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: "./target/allure-xml-report",
    }));

      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
              displaySuccessful: true,
              displayFailed: true,
              displayErrorMessages: true,
              displayStacktrace: true,
              displayNumber: true,
              displayDuration: true,
          },
          summary: {
              displaySuccessful: true,
              displayFailed: true,
              displayErrorMessages: true,
              displayStacktrace: true,
              displayNumber: true,
              displayDuration: true,
          },
          colors: {
              success: 'green',
              failure: 'red',
              pending: 'yellow'
          },
          prefixes: {
              success: '✓ ',
              failure: '✗ ',
              pending: '* '
          },
          customProcessors: []
      }));
     },
};
