//Definicion de la estrategia local con sus configuraciones
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;
const {Users} = require(`../models`);

passport.use(new LocalStrategy({
    usernameField: `email`
}, async(email, password, done) => {
    //Comprobar que exista el croreo electronci en la DB
    try{
        let user = await Users.findOne({where: {email}})
        /*
        user == null si el correo no se encuentra en la BD
        */
        if(user && user.password == password){
            //Returno los datos del usuario encontrado
            return done(null, user);
        }
        //Usuario incorrecto o contraseña incorrecta
        return done(null, false);
    }catch(error){
        done(error);
    }
}));

//Serialización

//Desialización