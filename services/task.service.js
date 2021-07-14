const {Tasks} = require(`../models/`)

const tasksByUser = async(userId) => {
    try{
        let allTasks = await Tasks.findAll({where: {user_id: userId}, raw: true});
        return allTasks
    }catch(error){
        throw new Error(error)
    }
}

const createTask = async({title, description, due_date, userId, category_id, status_id, completed}) => {
    try{
        let task = await Tasks.create({title, description, due_date,user_id: userId,category_id,status_id,completed});
        return task
    }catch(error){
        throw new Error(error);
    }
}

module.exports = {
    tasksByUser,
    createTask
}