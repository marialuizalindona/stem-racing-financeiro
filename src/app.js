const Fastify = require('fastify');

const patrocinadoresRoutes = require('./routes/patrocinadores');

const app = Fastify({
    logger: true
});

app.register(patrocinadoresRoutes);

module.exports = app;