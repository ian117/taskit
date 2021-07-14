const {
    categoriesByUser
} = require('../services/category.service')
const {
    statusesByUser
} = require('../services/status.service')
const {
    tasksByUser,
    createTask,
    taskById,
    updatetask
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

const renderEdit = async(request, response, next) => {
    let {firstname, lastname} = request.user;    
    let { id:taskID } = request.params

    try{
        let username = `${firstname} ${lastname}`
        let task = await taskById(taskID)

        return response.render(`pages/edit-tareas`,{
            title: "Editar Tarea",
            username,
            id: taskID,
            title: task.title,
            description: task.description,
            due_date: task.due_date,
            category_id: task.category_id,
            status_id: task.status_id,
            completed: task.completed
        });
    }catch(error){
        next(error);
    }

}
const update = async (request, response, next) => {
    try{
        let {id:taskID} = request.params;
        let {title, description, due_date, category_id, status_id, completed} = request.body;
        await updatetask({title, description, due_date, taskID, category_id, status_id, completed});
        response.redirect(`/tasks`);
    }catch(error){
        next(error);
    }
}


module.exports = {
    render,
    create,
    renderEdit,
    update
}