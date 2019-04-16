const _ = require("lodash");
const baseConfig = require("./base/conf");

const config = {
    baseUrl: "http://computer-database.herokuapp.com/computers",
    specs: ["../tests/indexPageView.js"],
    suites: { // --suite=view
        view: ["../tests/*"],
    },
    // exclude: ['../tests/addComputer.js'],

    capabilities: {
        browserName: "chrome",
        version: '68',
        enableVNC: true,
        enableVideo: true
/*        chromeOptions: {
            args: [
                "--disable-infobars",
                'disable-extensions'
            ],
            prefs: {
                enableVNC: true,
                "profile.password_manager_enabled": false,
                credentials_enable_service: false,
                password_manager_enabled: false,
            },
        },*/
    },
};

exports.config = _.merge(baseConfig.config, config);
