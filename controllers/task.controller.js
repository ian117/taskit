const {
    tasksByUser
} = require('../services/task.service')
const {
    categoriesByUser
} = require('../services/category.service')
const {
    statusesByUser
} = require('../services/status.service')


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

module.exports = {
    render
}