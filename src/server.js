const app = require('./app');

app.get('/', async () => {
    return {
        mensagem: 'API Financeira STEM Racing'
    };
});

app.listen({
    port: 3000
});

const pool = require('./database/connection');

app.get('/teste-db', async () => {
    const resultado = await pool.query('SELECT NOW()');
    return resultado.rows;
});