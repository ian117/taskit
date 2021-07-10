require(`dotenv`).config();
const express = require(`express`);
const path = require(`path`);

const PORT = process.env.PORT;
const app = express();

//Middleware incorporado para compartir de manera pública
app.use(express.static(path.join(__dirname, `public`)));

app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);


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
    response.render(`pages/categories`, {title: `Categorias`, username: ``});
});

//Página del estado: estatus
app.get(`/estatus`, (request, response, next) => {
    response.render(`pages/edit-category`, {title: `Estado`, username: ``});
});

//Página de la tarea: tasks
app.get(`/tareas`, (request, response, next) => {
    response.render(`pages/tasks`, {title: `Tareas`, items: ``, message: ``});
});




app.listen(PORT, () => {
    console.log(`El servidor está escuchando sobre el puerto ${PORT}`);
});