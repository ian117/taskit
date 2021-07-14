const {Router} = require('express')
const taskCtrl = require('../controllers/task.controller')
const protectRoute = require(`../middlewares/protect-routes`);

const taskRouter = Router()

taskRouter.get('/tasks', protectRoute, taskCtrl.render)

module.exports = taskRouter