const _ = require('lodash');
const baseConfig = require('./base/conf');

const config = {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    specs: ['../tests/sortComputers.js']
};

exports.config = _.merge(baseConfig.config, config);
