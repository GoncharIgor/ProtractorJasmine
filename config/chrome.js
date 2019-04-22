const _ = require('lodash');
const baseConfig = require('./base/conf');

const config = _.merge(baseConfig, {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    specs: ['../tests/indexPageView.js'],
    suites: { // --suite=view
        view: ['../tests/*'],
    },
    capabilities: {
        browserName: "chrome",
        enableVNC: true,
        enableVideo: true,
        chromeOptions: {
            args: ["--no-sandbox", "--test-type=browser", "disable-extensions", "--disable-infobars"],
            prefs: {
                "plugins.always_open_pdf_externally": true,
                "download": {
                    prompt_for_download: false,
                    directory_upgrade: true
                }
            }
        }
    },
});

exports.config = _.merge(baseConfig.config, config);