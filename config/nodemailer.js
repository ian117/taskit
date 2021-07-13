const nodemailer = require('nodemailer');
const googleapis = require('googleapis');

a                                    //Clase
const Oauth2 = googleapis.google.auth.Oauth2;

const createTransporter = async() => {
    const oauthClient = new Oauth2(
        process.end.GOOGLE_CLIENTID,
        process.env.GOOGLE_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );
    
    //Fijamos el refresh token para poder obtener los tokens de acceso
    oauthClient.setCredentials({refresh_token: process.env.GOOGLE_REFRESH_TOKEN});

    try{
        const accessToken = await oauthClient.getAccessToken();
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         type: 'OAuth2',
        //         user: 'correo@gmail.com', //fijo
        //         accessToken,
        //         clientId: process.env.GOOGLE_CLIENTID,
        //         clientSecret: process.env.GOOGLE_SECRET,
        //         refreshToken:  process.env.GOOGLE_REFRESH_TOKEN
        //     }
        // });

// SENGRID
        const transporter = nodemailer.createTransport(nodemailSendgrid({
            apiKey
        }))


        return transporter

    }catch(error){
        throw new Error(erro)
    }
}

const sendEmail = async() => {

}

const emailOptions = {
    subject: '',
    to: '',
    from: 'correo@gmail.com',
    body: ''
}

module.exports = {
    sendEmail,
    emailOptions,
    createTransporter
}