require(`dotenv`).config();
require(`./config/passport`);

const express = require(`express`);
const path = require(`path`);
const passport = require(`passport`);
const session = require(`express-session`);

const app = express();

const passportLocalStrategy = passport.authenticate(`local`, {
    successRedirect: `/categorias`,
    failureRedirect: `/login`
});

//Importación del modelo
const {Users} = require(`./models/`);

//Procesar datos vía urlencoded
app.use(express.urlencoded({extended: true}));

//Middleware incorporado para compartir de manera pública
app.use(express.static(path.join(__dirname, `public`)));

app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

//Middleware de terceros
app.use(session({
    secret: `academlo secret`,
    resave: `false`,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//Página principal: home
app.get(`/`, (request, response, next) => {
    response.render(`pages/home`, {title: `Inicio`});
});

//Página para logearse: login
app.get(`/login`, (request, response, next) => {
    response.render(`pages/login`, {title: `Iniciar Sesión`});
});

//Página para registrarse: register
app.get(`/register`, (request, response, next) => {
    response.render(`pages/register`, {title: `Registarse`});
});

//Página de categorías: categories
//Restringir acceso a usuarios NO autenticados
app.get(`/categorias`, (request, response, next) => {
    if(request.isAuthenticated()){
        let username = `${request.user.firstname} ${request.user.lastname}`;
        return response.render(`pages/categories`, {title: `Categorias`, username: `${username}`});
    }
    return response.redirect(`/login`);
});

//Página del estado: estatus
app.get(`/estatus`, (request, response, next) => {
    response.render(`pages/edit-category`, {title: `Estado`, username: ``});
});

//Página de la tarea: tasks
app.get(`/tareas`, (request, response, next) => {
    response.render(`pages/tasks`, {title: `Tareas`, items: ``, message: ``});
});

//Página para cerrar sesión
app.get(`/logout`, (request, response, next) => {
    request.logout();
    return response.redirect(`/`);
});

//Post login
app.post(`/login`, passportLocalStrategy, (error, request, response, next) => {
    if(error){
        return console.log(error.message);
    }
});

//Post registro
app.post(`/register`, async (request, response, next) => {
    let {firstname, lastname, email, password} = request.body;
    try{
        await Users.create({firstname, lastname, email, password});
        response.redirect(`/register`);
    }catch(error){
        console.log(error);
    }
});

module.exports = app;

