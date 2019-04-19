const _ = require('lodash');
const baseConfig = require('./base/conf');

const config = {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    specs: ['../tests/indexPageView.js'],

    capabilities: {
        'browserName': 'internet explorer',
        'platform': 'ANY',
        'ignoreProtectedModeSettings': true,
        'ignoreZoomSetting': true,
        'INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS': true,
        'version': '11'
    },
};

exports.config = _.merge(baseConfig.config, config);
