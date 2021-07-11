const {Router} = require(`express`);
const authCtrl = require(`../controllers/auth.controller`);

const authRouter = Router();

//FLujo de autenticación
authRouter.get(`/login`, authCtrl.renderLogin);
authRouter.post(`/login`, authCtrl.localAuth);
authRouter.get(`/register`, authCtrl.renderRegister);
authRouter.post(`/register`, authCtrl.register);
authRouter.get(`/logout`, authCtrl.logout);

/*
//Autenticación por medio de facebook y google
authRouter.get(`/auth/google`, authCtrl.gAuthStrategy);
authRouter.get(`/auth/facebook`, authCtrl.fAuthStrategy);
authRouter.get(`/auth/google/callback`, authCtrl.gCallback);
authRouter.get(`/auth/facebook/callback`, authCtrl.fCallback);
*/

module.exports = authRouter;

