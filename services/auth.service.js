<<<<<<< HEAD
const {Users, Social_networks} = require(`../models`);
=======
const { Users, Social_networks } = require("../models");
>>>>>>> dc0f4eb935ba5adc3924afe70e214918d0cf2587

const newUser = async ({ firstname, lastname, email, password }) => {
    try {
        let user = await Users.create({ firstname, lastname, email, password });
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

const checkUserExist = async (email) => {
    try {
        let user = await Users.findOne({ where: { email }, raw: true });
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

const linkUserProvider = async (providerId, userId, provider) => {
    try {
        let results = await Social_networks.findOrCreate({
            where: { id: providerId },
            defaults: { id: providerId, user_id: userId, provider },
        });
        return results;
    } catch (error) {
        throw new Error(error);
    }
};

const randPasswd = () => {
    return "12345";
};

<<<<<<< HEAD
const checkUserExist = async (email) => {
    try {
        let user = await Users.findOne({ where: { email }, raw: true });
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

const linkUserProvider = async (providerId, userId, provider) => {
    try {
        let results = await Social_networks.findOrCreate({
            where: { id: providerId },
            defaults: { id: providerId, user_id: userId, provider },
        });
        return results;
    } catch (error) {
        throw new Error(error);
    }
};

const randomPassword = () => {
    return "12345";
};

module.exports = {
    newUser,
    randomPassword,
=======
module.exports = {
    newUser,
    randPasswd,
>>>>>>> dc0f4eb935ba5adc3924afe70e214918d0cf2587
    checkUserExist,
    linkUserProvider,
};
