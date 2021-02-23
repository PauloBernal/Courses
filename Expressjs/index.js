const express = require('express');
const ejsLint = require('ejs-lint');
let ejs = require('ejs');
const morgan = require('morgan');
const app = express();
const colors = require('colors');
var d = new Date();
var gres = ""

//settings

app.set('appName', 'FirstServer')
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs')

//middlewares

app.use(morgan('dev'));

app.use((req, res, next) => {

    console.log('\nRequest url: ' + req.url.green);
    console.log('Last Response: ' + gres);
    d = new Date();
    console.log("Server status " + "SUCCESS".bgGreen + " on " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    next();
});

//req - routes

const routes = require('./routes.js');
const api = require('./api.js');

//routes

app.use(routes);
app.use('api.js', api);
app.get('*', (req, res) => {

    gres = "Not found";
    res.end(gres);
})

//listening port

app.listen(8080, () => {

    console.log("Server on port ".green + "8080".cyan + "\nServer name: " + app.get('appName'));
//    setInterval(() => {

//        d = new Date();
//        console.log("Server status " + "SUCCESS".bgGreen + " on " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
//    }, 60000)
});