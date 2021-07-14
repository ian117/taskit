const {
    categoriesByUser
} = require('../services/category.service')
const {
    statusesByUser
} = require('../services/status.service')
const {
    tasksByUser,
    createTask
} = require('../services/task.service')


const render = async(request, response, next) => {    
    try{
        let {id, firstname, lastname} = request.user;
        let username = `${firstname} ${lastname}`;
        let tasks = await tasksByUser(id)
        let categories = await categoriesByUser(id)
        let statuses = await statusesByUser(id)
        return response.render(`pages/tareas`, {
            title: `Tasks`,
            username: `${username}`,
            tasks,
            categories,
            statuses
        })
    }catch(error){
        next(error);
    }
};

const create = async(request, response, next) => {
    try{
        let {id: userId} = request.user;
        let {title, description,due_date,category_id,status_id,completed} = request.body;
        await createTask({title, description,due_date, userId,category_id,status_id,completed});
        response.redirect(`/tasks`);
    }catch(error){
        next(error);
    }
}

module.exports = {
    render,
    create
}