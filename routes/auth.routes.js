const {Router} = require(`express`);
const authCtrl = require(`../controllers/auth.controller.js`);

const authRouter = Router();

//Inicio (home)
authRouter.get('/', authCtrl.renderHome);

//Inicio de sesión
authRouter.get('/login', authCtrl.renderLogin);
authRouter.post('/login', authCtrl.LocalStrategy);

//Registro
authRouter.get('/registro', authCtrl.renderRegister);
authRouter.post('/registro', authCtrl.register);

//Logout
authRouter.get(`/logout`, authCtrl.logout);


//Autenticación por medio de facebook y google
authRouter.get('/auth/google', authCtrl.gStrategy);
authRouter.get('/auth/facebook', authCtrl.fbStrategy);
authRouter.get('/auth/google/callback', authCtrl.gAuthCallback);
authRouter.get('/auth/facebook/callback', authCtrl.fbAuthCallback)

module.exports = authRouter;