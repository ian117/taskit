//Modulos

require(`dotenv`).config();

const express = require(`express`);
const path = require(`path`);
const passport = require(`passport`);
// const session = require(`./utils/session.config`);
const authRouter = require(`./routes/auth.routes`);
const catRouter = require(`./routes/category.routes`);
const userRouter = require(`./routes/user.routes`);
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store)

require(`./config/passport`);

const app = express();

//Procesar datos vía urlencoded
app.use(express.urlencoded({extended: true}));

//Middleware incorporado para compartir de manera pública
app.use(express.static(path.join(__dirname, `public`)));
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

//Middleware de terceros
let {sequelize} = require('./models')

app.use(session({
    secret: "academlo secret",
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        checkExpirationInterval: 15 * 60 * 1000,
        expiration: 1* 60 * 60 * 1000,
        db: sequelize
    })
}));

app.use(passport.initialize());
app.use(passport.session());

//Middwre de app
app.use(authRouter);
app.use(catRouter);
app.use(userRouter);

module.exports = app;

