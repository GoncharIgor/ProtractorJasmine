const log4jsConfig = require('./log4js.conf');
const AllureReporter = require('jasmine-allure-reporter');
const fs = require('fs');
const del = require("del");
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const log4js = require("log4js");
const path = require("path");
const allureResultsPath = path.join("./target/allure-xml-report");

exports.config = {
    framework: 'jasmine2',
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    specs: ['../tests/indexPageView.js'],
    suites: {
        view: ['../tests/*'],
    },

    // framework: 'custom',
    seleniumArgs: ['-browserTimeout=60'],
    ignoreProtectedModeSettings: true,
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    params: {
        allureReportDirectory: './target/allure-xml-report',
    },
    //to remove if selenoid config is used
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
        print: function () {
        }
    },
    onPrepare,
    onComplete
};

function onPrepare() {
    log4jsConfig.call();
    browser.logger = log4js.getLogger("BASE_LOGGER");

    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().setSize(1200, 800);
    browser.manage().timeouts().implicitlyWait(3000);

    require("../utils/matchers");

    // allure reporter
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: allureResultsPath
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

    // clean allure xmls from previous run
    del([allureResultsPath], {force: true});
}

function onComplete() {
    browser.close();
}