require(`dotenv`).config();
const express = require(`express`);
const path = require(`path`);

const PORT = process.env.PORT;
const app = express();


app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);


app.get(`/`, (request, response, next) => {
    response.render(`pages/home`, {title: `Inicio`});
});


app.listen(PORT, () => {
    console.log(`El servidor está escuchando sobre el puerto ${PORT}`);
});