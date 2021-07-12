const {getUsers} = require(`../services/user.service`);

const getAll = async(request, response, next) => {
    try{
        let users=  await getUsers();
        response.json(users);       //Rest API
    }catch(error){
        next(error);
    }
}

module.exports = {
    getAll
}