async function patrocinadoresRoutes(app){

    app.get('/patrocinadores', async () => {
        return {
            mensagem: 'Lista de patrocinadores'
        };
    });

}

module.exports = patrocinadoresRoutes;