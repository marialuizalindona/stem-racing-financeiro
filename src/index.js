const express = require('express');

const app = express();

const patrocinadoresRouter =
require('./routes/patrocinadores');

app.use(express.json());

app.use(patrocinadoresRouter);

app.listen(3000, () => {
    console.log(
        'Servidor rodando na porta 3000'
    );
});