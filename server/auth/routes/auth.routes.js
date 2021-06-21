const verifySignUp = require('../middleware/verify-signup')

const controller = require('../controllers/auth.controller')



module.exports = (app) => {

    //set header parameters
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
        next();
    });
    
    //signup route
    app.post('/api/auth/signup', verifySignUp.checkDuplicateUsernameOrEmail, controller.signup);
    
    //signin route
    app.post('/api/auth/signin', controller.signin);

}