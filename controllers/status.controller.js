const { statusesByUser,
        createStatus,
        deleteStatus,
        statusById,
        updateStatus } = require('../services/status.service')

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

const renderEdit = async(request, response, next) => {
    let {firstname, lastname} = request.user;    
    let { id:statusID } = request.params

    try{
        let username = `${firstname} ${lastname}`
        let status = await statusById(statusID)

        return response.render(`pages/edit-status`,{
            title: "Editar Status",
            username,
            id: statusID,
            name: status.name,
            color: status.color
        });
    }catch(error){
        next(error);
    }

}

const update = async (request, response, next) => {
    try{
        let {id:statusId} = request.params;
        let {name,color} = request.body;
        await updateStatus({name, color, statusId});
        response.redirect(`/statuses`);
    }catch(error){
        next(error);
    }
}


module.exports = {
    render,
    create,
    _delete,
    renderEdit,
    update
}