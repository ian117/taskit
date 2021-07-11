
const renderCategory = (request, response) => {    
    let username = `${request.user.firstname} ${request.user.lastname}`;
    return response.render(`pages/categories`, {title: `Categorias`, username: `${username}`})
};

module.exports = {renderCategory};