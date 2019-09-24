/**
 * Logger |
 */

module.exports = () => {
    const config = require('./config/');
    const path = require('path');
    const bunyan = require('bunyan');


    /**
     * ćčż°
     * @date 2019-09-15
     * @param {any} req
     * @return {any}
     */
    function reqSerializer(req) {
        return {
            method: req.method,
            url: req.url,
            headers: req.headers,
        };
    }
    const logger = bunyan.createLogger({
        name: config['name'],
        src: true,
        streams: [{
                level: 'info',
                stream: process.stdout, // log INFO and above to stdout
            },
            {
                level: 'error',
                // stream: process.stdout,
                // eslint-disable-next-line max-len
                path: config['env'] === 'development' ? path.resolve(__dirname, 'log/development-error.log') : path.resolve(__dirname, 'log/production-error.log'),
            },
        ],
        serializers: {
            req: reqSerializer,
        },
    });
    return logger;
};