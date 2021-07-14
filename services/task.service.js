const {Tasks} = require(`../models/`)

const tasksByUser = async(userId) => {
    try{
        let allTasks = await Tasks.findAll({where: {user_id: userId}, raw: true});
        return allTasks
    }catch(error){
        throw new Error(error)
    }
}

module.exports = {
    tasksByUser,
}