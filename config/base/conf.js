const log4jsConfig = require("./log4js.conf");
const AllureReporter = require("jasmine-allure-reporter");
const fs = require("fs");

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
  allScriptsTimeout: 60000,
  // How long to wait for a page to load.
  getPageTimeout: 60000,

  seleniumAddress: "http://localhost:4444/wd/hub",

  onPrepare: () => {
    log4jsConfig.call();
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();

    // allure reporter
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: "./target/allure-xml-report",
    }));
  },
};
