const { Router } = require('express')

const statsCtrl = require('../controllers/status.controller.js')
const protectRoute = require(`../middlewares/protect-routes`);

const statusRouter = Router()

statusRouter.get('/statuses', protectRoute, statsCtrl.render)
statusRouter.post('/statuses', protectRoute, statsCtrl.create)
statusRouter.get('/statuses/borrar/:id', protectRoute, statsCtrl._delete);
statusRouter.get('/statuses/editar/:id', protectRoute, statsCtrl.renderEdit);
// statusRouter.post('/statuses/editar/:id', protectRoute, statsCtrl.update);



module.exports = statusRouter