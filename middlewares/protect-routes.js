const { request } = require("express");

const protectRoute = (request, response, next) => {
    if(request.isAuthenticated()) {
        return next()
    }
    return response.redirect(`/login`)
}

module.exports = protectRoute;