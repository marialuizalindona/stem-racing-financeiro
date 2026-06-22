const express = require('express');

const router = express.Router();

const patrocinadores = [
    {
        id: 1,
        nome: 'Empresa 3DERAS'
    }
];

router.get('/patrocinadores', (req, res) => {
    res.status(200).json(patrocinadores);
});

router.post('/patrocinadores', (req, res) => {

    const novoPatrocinador = {
        id: patrocinadores.length + 1,
        nome: req.body.nome
    };

    patrocinadores.push(novoPatrocinador);

    res.status(201).json({
        mensagem: 'Patrocinador cadastrado',
        patrocinador: novoPatrocinador
    });
});

router.get('/patrocinadores/:id', (req, res) => {

    const id = Number(req.params.id);

    const patrocinador = patrocinadores.find(
        p => p.id === id
    );

    if (!patrocinador) {
        return res.status(404).json({
            mensagem: 'Patrocinador não encontrado'
        });
    }

    res.status(200).json(patrocinador);
});

module.exports = router;