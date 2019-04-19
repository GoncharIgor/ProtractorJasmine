const _ = require('lodash');
const baseConfig = require('./base/conf');

const config = {
  baseUrl: 'http://computer-database.herokuapp.com/computers',
  specs: ['../tests/*'],

  multiCapabilities: [{
    browserName: 'firefox',
    firefoxOptions: {
      args: ['--disable-infobars'],
      prefs: {
        'geo.enabled': false,
      },
    },
  }, {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-infobars',
      ],
      prefs: {
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false,
      },
    },
  }, /* {
     browserName: "internet explorer",
     platform: "ANY",
     version: "11"
     } */],
    maxSessions: 1 //to run browsers one by one
};

exports.config = _.merge(baseConfig.config, config);

