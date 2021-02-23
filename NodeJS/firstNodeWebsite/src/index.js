const colors = require('colors');
const express = require('express');
const app = express();
const path = require('path')

console.log('SERVER ACTIVATED'.bgGreen);

// settings
app.set('port', 3000);
app.set('view engine', 'ejs');

// middlewares

// static files
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log("Server on port ".green + 3000);
});