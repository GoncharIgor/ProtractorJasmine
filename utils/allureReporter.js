const reporter = require("jasmine-allure-reporter");
const path = require("path");

reporter.config({
  targetDir: path.resolve(__dirname, "../..", browser.params.allureReportDirectory),
});

module.exports = reporter;
