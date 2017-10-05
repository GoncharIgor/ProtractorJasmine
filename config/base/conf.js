const log4jsConfig = require('./log4js.conf');

exports.config = {
    //framework: 'jasmine',
    seleniumArgs: ['-browserTimeout=60'],
    ignoreProtectedModeSettings: true,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--disable-infobars",
            ],
            prefs: {
                "profile.password_manager_enabled": false,
                credentials_enable_service: false,
                password_manager_enabled: false,
            },
        },
    },
    //framework: 'custom',

    // The timeout for each script run on the browser. This should be longer
    // than the maximum time your application needs to stabilize between tasks.
    allScriptsTimeout: 60000,
    // How long to wait for a page to load.
    getPageTimeout: 60000,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: () => {
        log4jsConfig.call();
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    }
};
