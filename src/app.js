const Fastify = require('fastify');

const app = Fastify({
    logger: true
});

module.exports = app;