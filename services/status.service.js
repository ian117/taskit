const {Statuses} = require(`../models`)

const createStatus = async({name, color, userId}) => {
    try{
        let status = await Statuses.create({name, color, created_by: userId});
        return status
    }catch(error){
        throw new Error(error);
    }
}

const statusesByUser = async(userId) => {
    try{
        let statuses = await Statuses.findAll({where: {created_by: userId}, raw: true});
        return statuses
    }catch(error){
        throw new Error(error)
    }
}


module.exports = {
    statusesByUser,
    createStatus
}