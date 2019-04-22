const log4js = require('log4js');

module.exports = () => {
    log4js.configure({
        appenders: [
            {
                type: 'console',
                level: log4js.levels.WARN,
            },
            {type: 'file', filename: 'target/logs/computers.log', category: 'cheese'}
        ],
        levels: {
            '[all]': log4js.levels.ALL,
        },
        // replaceConsole: true
    });
};
