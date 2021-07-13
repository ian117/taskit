const passport = require('passport');
const { emailOptions, sendEmail } = require('../config/nodemailer.js');
const {newUser} = require('../services/auth.service.js');

// const gScope = ['email', 'profile'];
// const fbScope = ['email', 'public_profile'];

const gStrategy = passport.authenticate('google', {
    session: true, 
    scope: ['email', 'profile']
});

const fbStrategy = passport.authenticate('facebook', { 
    session: true, 
    scope: ['email', 'public_profile']
});

const gAuthCallback = passport.authenticate('google', {
    successRedirect: '/categorias',
    failureRedirect: '/login'
});

const fbAuthCallback = passport.authenticate('facebook', {
    successRedirect: '/categorias',
    failureRedirect: '/login'
});

const LocalStrategy = passport.authenticate('local', {
    successRedirect: '/categorias',
    failureRedirect: '/login'
});

const resetPassword = async(request, response, next) => {
    try{
        const {email} = request.body;

        emailOptions.to = email; ///hacia el cliente
        emailOptions.subject = 'Restablecimiento de password'; //Restablecimiento de password
        emailOptions.body = 'Para restablecimiento de password da click en el siguiente enlace';
        await sendEmail(emailOptions);
        response.send('Se ha enviado el correo satisfactoriamente');

    }catch(error){
        next(error);
    }
}

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
        res.redirect("/register");
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

