//Modulos

require(`dotenv`).config();
require(`./config/passport`);

const express = require(`express`);
const path = require(`path`);
const passport = require(`passport`);
const session = require(`./utils/session.config`);
const authRouter = require(`./routes/auth.routes`);
const catRouter = require(`./routes/category.routes`);

const app = express();

//Procesar datos vía urlencoded
app.use(express.urlencoded({extended: true}));

//Middleware incorporado para compartir de manera pública
app.use(express.static(path.join(__dirname, `public`)));
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

//Middleware de terceros
app.use(session);

app.use(passport.initialize());
app.use(passport.session());

//Página principal: home
app.get(`/`, (request, response, nxt) => {
    response.render(`pages/home`, {title: `Inicio`});
});

app.use(authRouter);
app.use(catRouter);




module.exports = app;

