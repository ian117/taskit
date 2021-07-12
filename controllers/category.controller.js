const { categoriesByUser, deleteCategory, createCategory } = require(`../services/category.service`);

const renderCategory = async(request, response, next) => {    
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



module.exports = {
    renderCategory,
    create,
    _delete
};