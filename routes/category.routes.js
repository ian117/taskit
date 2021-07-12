const {Router} = require(`express`);
const catCtrl = require(`../controllers/category.controller`);
const protectRoute = require(`../middlewares/protect-routes`);

const catRouter = Router();

catRouter.get(`/categorias`, protectRoute ,catCtrl.render);

catRouter.post(`/categorias`, protectRoute ,catCtrl.create);

catRouter.get('/categorias/borrar/:id', protectRoute, catCtrl._delete);
catRouter.get('/categorias/editar/:id', protectRoute, catCtrl.renderEdit);
catRouter.post('/categorias/editar/:id', protectRoute, catCtrl.update);

module.exports = catRouter;