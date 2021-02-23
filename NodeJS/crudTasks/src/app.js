const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const router = require('./routes/index.js');
const host = '192.168.1.10';
const port = 8080;

hostName = '\n[PauloBA Server] '.green;

// settings

app.set('port', process.env.PORT || port);
app.set('host', process.env.HOST || host)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/'));

// static files

app.use(express.static(path.join(__dirname, 'public')))

// middlewares

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/', router)

// listening

app.listen(app.get('port'), () => {

    console.log(hostName + 'Server on port '.cyan + app.get('port').toString().bgGreen)
})