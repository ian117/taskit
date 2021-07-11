//Modulos

require(`dotenv`).config();

const express = require(`express`);
const path = require(`path`);
const passport = require(`passport`);
const session = require(`./utils/session.config.js`);
const authRouter = require(`./routes/auth.routes.js`);
const catRouter = require(`./routes/category.routes`);

require(`./config/passport`);

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

//Middwre de app
app.use(authRouter);
app.use(catRouter);

module.exports = app;

