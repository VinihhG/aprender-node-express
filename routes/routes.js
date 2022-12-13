const router = {

    router: (app) => {

        app.get('/', (req, res) => {

            res.send('INDEX AQUI');
        
        });
    
        app.get('/users', (req, res) => {
    
            res.send(require('../controllers/UserController').index());

        });

        app.post('/users', (req, res) => {
    
            res.send(require('../controllers/UserController').store());

        });
    },
}

module.exports = router;
    



