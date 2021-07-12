const {Users, Categories} = require(`../models`);

const getUsers = async() => {
    try{
        let users = await Users.findAll({include: [{model: Categories}]});
        return users;
    }catch(error){
        throw new Error(error);
    }
};

module.exports = {getUsers}