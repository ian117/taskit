const { categoriesByUser, deleteCategory, createCategory, categoryById, updateCategory } = require(`../services/category.service`);

const render = async(request, response, next) => {    
    try{
        let {id, firstname, lastname} = request.user;
        let username = `${firstname} ${lastname}`;
        let categories = await categoriesByUser(id);
        return response.render(`pages/categories`, {
            title: `Categorias`,
            username: `${username}`,
            categories
        })
    }catch(error){
        next(error);
    }
};

const create = async(request, response, next) => {
    try{
        let {id: userId} = request.user;
        let {name} = request.body;
        await createCategory({name, userId});
        response.redirect(`/categorias`);
    }catch(error){
        next(error);
    }
}



const renderEdit = async(request, response, next) => {
    let {firstname, lastname} = request.user;    
    let { id:categoryId } = request.params

    try{
        let username = `${firstname} ${lastname}`
        let category = await categoryById(categoryId)

        return response.render(`pages/edit-category`,{
            title: "Editar Categorias",
            username,
            id: categoryId,
            name: category.name
        });
    }catch(error){
        next(error);
    }

}

const _delete = async(request, response, next) => {
    //Parametro ID
    try{
        let categoryId = request.params.id;
        await deleteCategory(categoryId);
    //result puede ser mostrado en pantalla para notificar que fue eliminada la categoria
        // let result = await deleteCategory(categoryId);
        response.redirect(`/categorias`);
    }catch(error){
        next(error);
    }
}

const update = async (request, response, next) => {
    try{
        let {id: categoryId} = request.params;
        let {name} = request.body;
        await updateCategory({name, categoryId});
        response.redirect(`/categorias`);
    }catch(error){
        next(error);
    }
}



module.exports = {
    render,
    create,
    renderEdit,
    update,
    _delete
};