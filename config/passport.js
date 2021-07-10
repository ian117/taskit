//Definicion de la estrategia local con sus configuraciones
const bcrypt = require(`bcrypt`);
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;
const { Users } = require(`../models`);

passport.use(new LocalStrategy({
    usernameField: `email`
}, async (email, password, done) => {
    //Comprobar que exista el croreo electronci en la DB
    try {
        let user = await Users.findOne({ where: { email } })
        /*
        user == null si el correo no se encuentra en la BD
        */
        if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
        }
        //Usuario incorrecto o contraseña incorrecta
        return done(null, false);
    } catch (error) {
        done(error);
    }
}));

//Serialización
//firmar los datos del usuario
passport.serializeUser((user, done) => {
    return done(null, user.id);
});

//Desialización
//Obtener los datos del usuario a partir del id
passport.deserializeUser(async (id, done) => {
    try {
        let user = await Users.findByPk(id, { plain: true });
        //request -> request.user
        done(null, user);
    } catch (error) {
        return done(error);
    }
});


// Semana 3: Desencriptación de passwords