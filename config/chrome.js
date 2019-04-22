const _ = require('lodash');
const baseConfig = require('./base');

const config = _.merge(baseConfig, {
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