const _ = require("lodash");
const baseConfig = require("./base/conf");

const config = {
  baseUrl: "http://computer-database.herokuapp.com/computers",
  specs: ["../tests/*.js"],
  suites: { // --suite=view
    view: ["../tests/*"],
  },
  // exclude: ['../tests/addComputer.js'],

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: [
        "--disable-infobars",
        'disable-extensions'
      ],
      prefs: {
        "profile.password_manager_enabled": false,
        credentials_enable_service: false,
        password_manager_enabled: false,
      },
    },
  },
};

exports.config = _.merge(baseConfig.config, config);
