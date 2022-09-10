require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
//const routeAuth = require('./routes/routeAuth');
const routeExchange = require('./routes/routeExchange');
const app = express();

mongoose.connect(`mongodb+srv://dama:${process.env.PASS}@cluster-dama.qgpqn.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connexion à mongodb réussi!"))
        .catch(() => console.log("Echec à la connexion mongodb!"));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Content, Accept, X-Requested-With, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
//app.use('/api/v1/auth', routeAuth);
app.use('/api/v1/exchange', routeExchange);

module.exports = app;