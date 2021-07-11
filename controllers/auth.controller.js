const passport = require(`passport`);
const {newUser} = require(`../services/auth.service`);

const renderLogin = (request, response) => {
    response.render(`pages/login`, {title: `Iniciar Sesión`});
}

const renderRegister = (request, response) => {
    response.render(`pages/register`, {title: `Registro`});
}

const register = async(request, response, next) => {
    let {firstname, lastname, email, password} = request.body;
    try{
        await newUser({firstname, lastname, email, password});
        response.redirect(`/register`);
    }catch(error){
        next(error);
    }
};

const logout = (request, response) => {
    request.logout();
    return response.redirect(`/`);
}

const localAuth = passport.authenticate(`local`, {  //localAuthStrategy, cambió el nombre de la constantes
    successRedirect: `/categorias`,
    failureRedirect: `/login`
});

const gAuthStrategy = passport.authenticate(`google`, {session:true, scope: [`email`, `profile`]}); //Acomodar vista?
const fAuthStrategy = passport.authenticate(`facebook`, {session: true, scope: [`email`, `public_profile`]});

const gCallback = passport.authenticate(`google`, {
    successRedirect: `/categorias`,
    failureRedirect: `/login`
});

const fCallback = passport.authenticate(`facebook`, {
    successRedirect: `/categorias`,
    failureRedirect: `/login`
});


module.exports= {
    renderLogin,
    renderRegister,
    register,
    logout,
    localAuth,
    gAuthStrategy,
    gCallback,
    fAuthStrategy,
    fCallback
}