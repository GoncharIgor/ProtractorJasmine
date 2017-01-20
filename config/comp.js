var _ = require('lodash'),
    baseConfig = require('./base/conf');

exports.config = _.merge(baseConfig.config, {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    specs: ['../tests/compTest.js']
});