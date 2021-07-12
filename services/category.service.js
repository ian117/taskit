const {Categories} = require(`../models`)


const categoriesByUser = async(userId) => {
    try{
        let categories = await Categories.findAll({where: {created_by: userId}, raw: true});
        return categories
    }catch(error){
        throw new Error(error)
    }
}

const createCategory = async({name, userId}) => {
    try{
        let category = await Categories.create({name, created_by: userId});
        return category
    }catch(error){
        throw new Error(error);
    }
}

const categoryById = async(categoryId) => {
    try{
        let categories = await Categories.findByPk(categoryId);
        return categories
    }catch(error){
        throw new Error(error)
    }
}

const updateCategory = async({name, categoryId}) => {
    try{
        let categories = await Categories.update({name}, {where:{id:categoryId}});
        return categories
    }catch(error){
        throw new Error(error)
    }
}

const deleteCategory = async(categoryId) => {
    try{
        let results = await Categories.destroy({
            where: {id: categoryId}
        });
        return results
    }catch(error){
        throw new Error(error);
    }
}

module.exports = {
    categoriesByUser,
    updateCategory,
    categoryById,
    createCategory,
    deleteCategory
}