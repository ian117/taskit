const { Router } = require('express')
//controller
const statsCtrl = require('../controllers/status.controller.js')
const protectRoute = require(`../middlewares/protect-routes`);

const statusRouter = Router()

statusRouter.get('/statuses', protectRoute, statsCtrl.render)
statusRouter.post('/statuses', protectRoute, statsCtrl.create)



module.exports = statusRouter