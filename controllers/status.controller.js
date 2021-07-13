const { statusesByUser,
        createStatus,
        deleteStatus } = require('../services/status.service')

const render = async(request, response, next) => {    
    try{
        let {id, firstname, lastname} = request.user;
        let username = `${firstname} ${lastname}`;
        let statuses = await statusesByUser(id)
        return response.render(`pages/statuses`, {
            title: `Statuses`,
            username: `${username}`,
            statuses
        })
    }catch(error){
        next(error);
    }
};

const create = async(request, response, next) => {
    try{
        let {id: userId} = request.user;
        let {name,color} = request.body;
        await createStatus({name, color,userId});
        response.redirect(`/statuses`);
    }catch(error){
        next(error);
    }
}

const _delete = async(request, response, next) => {
    try{
        // let {id: userId} = request.user;
        let statusID = request.params.id;
        await deleteStatus(statusID);
    //result puede ser mostrado en pantalla para notificar que fue eliminada la categoria
        // let result = await deleteCategory(categoryId);
        response.redirect(`/statuses`);
    }catch(error){
        next(error);
    }
}


module.exports = {
    render,
    create,
    _delete
}