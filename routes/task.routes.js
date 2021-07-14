const {Router} = require('express')
const taskCtrl = require('../controllers/task.controller')
const protectRoute = require(`../middlewares/protect-routes`);

const taskRouter = Router()

taskRouter.get('/tasks', protectRoute, taskCtrl.render)
taskRouter.post('/tasks', protectRoute, taskCtrl.create)
taskRouter.get('/tasks/editar/:id', protectRoute, taskCtrl.renderEdit);
taskRouter.post('/tasks/editar/:id', protectRoute, taskCtrl.update);
taskRouter.get('/tasks/borrar/:id', protectRoute, taskCtrl._delete);



module.exports = taskRouter