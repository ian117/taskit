const {Router} = require(`express`);
const catCtrl = require(`../controllers/category.controller`);
const protectRoute = require(`../middlewares/protect-routes`);

const catRouter = Router();

catRouter.get(`/categorias`, protectRoute ,catCtrl.renderCategory);

catRouter.post(`/categorias`, protectRoute ,catCtrl.create);

catRouter.get('/categorias/borrar/:id', protectRoute, catCtrl._delete);

module.exports = catRouter;