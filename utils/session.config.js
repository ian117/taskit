

let sequelize = new Sequelize

const sessionConf = session({
    secret: "academlo secret",
    resave: false,
    saveUninitialized: true
});

module.exports = sessionConf;