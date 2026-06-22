const app = require('./app');

app.get('/', async () => {
    return {
        mensagem: 'API Financeira STEM Racing'
    };
});

app.listen({
    port: 3000
});