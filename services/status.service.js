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

const deleteStatus = async(StatusID) => {
    try{
        let results = await Statuses.destroy({
            where: {id: StatusID}
        });
        return results
    }catch(error){
        throw new Error(error);
    }
}

const statusById = async(statusID) => {
    try{
        let status = await Statuses.findByPk(statusID);
        return status
    }catch(error){
        throw new Error(error)
    }
}

const updateStatus = async({name, color, categoryId}) => {
    try{
        let status = await Statuses.update({name, color}, {where:{id:categoryId}});
        return status
    }catch(error){
        throw new Error(error)
    }
}

module.exports = {
    statusesByUser,
    createStatus,
    deleteStatus,
    statusById,
    updateStatus
}