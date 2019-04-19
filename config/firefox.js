const _ = require('lodash');
const baseConfig = require('./base/conf');

const config = {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    specs: ['../tests/indexPageView.js'],

    capabilities: {
        browserName: 'firefox',
        firefoxOptions: {
            args: ['--disable-infobars'],
            prefs: {
                'geo.enabled': false,
            },
        },
    },
};

exports.config = _.merge(baseConfig.config, config);
