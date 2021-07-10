require(`dotenv`).config();
const express = require(`express`);
const path = require(`path`);

const PORT = process.env.PORT;
const app = express();

<<<<<<< HEAD
//Middleware incorporado para compartir de manera pública
app.use(express.static(path.join(__dirname, `public`)));
=======
>>>>>>> 3bb8c9890afa893be4b859f6b08b40989422bfb2

app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);


<<<<<<< HEAD
//Página principal: home
=======
>>>>>>> 3bb8c9890afa893be4b859f6b08b40989422bfb2
app.get(`/`, (request, response, next) => {
    response.render(`pages/home`, {title: `Inicio`});
});

<<<<<<< HEAD
//Página para logearse: login
app.get(`/login`, (request, response, next) => {
    response.render(`pages/login`, {title: `Iniciar Sesión`});
});

//Página para registrarse: register
app.get(`/register`, (request, response, next) => {
    response.render(`pages/register`, {title: `Registarse`});
});



=======
>>>>>>> 3bb8c9890afa893be4b859f6b08b40989422bfb2

app.listen(PORT, () => {
    console.log(`El servidor está escuchando sobre el puerto ${PORT}`);
});