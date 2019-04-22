const _ = require('lodash');
const baseConfig = require('./base');

const config = {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    specs: ['../tests/indexPageView.js'],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--headless',
                '--disable-gpu'
            ]
        }
    }
};

exports.config = _.merge(baseConfig.config, config);
