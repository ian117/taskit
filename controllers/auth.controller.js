const passport = require('passport');
const {newUser} = require("../services/auth.service.js");

const gScope = ['email', 'profile'];
const fbScope = ['email', 'public_profile'];

const gStrategy = passport.authenticate("google",  { 
    session: true, scope: gScope
});

const fbStrategy = passport.authenticate("facebook", { 
    session: true, scope: fbScope
});

const gAuthCallback = passport.authenticate('google', {
    successRedirect: '/categorias',
    failureRedirect: '/login'
});

const fbAuthCallback = passport.authenticate('facebook', {
    successRedirect: '/categorias',
    failureRedirect: '/login'
});

const LocalStrategy = passport.authenticate("local", {
    successRedirect: '/categorias',
    failureRedirect: '/login'
});

const renderLogin = (req, res) => {
    res.render("pages/login", {title: "Iniciar sesión"});
}

const renderRegister = (req, res) => {
    res.render("pages/register", {title: "Registro"});
}

const renderHome = (req, res) => {
    res.render("pages/home", {title: "Inicio"});
};

const register = async (req, res, next) => {
    let {firstname, lastname, email, password} = req.body;
    try{
        await newUser({firstname, lastname, email, password});
        res.redirect("/registro");
    }catch(error){
        next(error);
    }
}

const logout = (req, res) => {
    req.logout(); //Quitamos la sesión activa del usuario
    return res.redirect("/login"); //Redireccionamos a inicio
};

module.exports = {
    gStrategy,
    fbStrategy,
    LocalStrategy,
    gAuthCallback,
    fbAuthCallback,
    renderHome,
    renderLogin,
    renderRegister,
    register,
    logout,
}

// module.exports= {
//     renderLogin,
//     renderRegister,
//     register,
//     logout,
//     localAuth,
//     gAuthStrategy,
//     gCallback,
//     fAuthStrategy,
//     fCallback
// }
