const mongoose = require('mongoose');

var db;

module.exports = function Connection(){

    if (db == undefined){
        db = mongoose
        db.connect('mongodb://localhost/crud', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    };
    return db;
};