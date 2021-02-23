const mongoose = require('mongoose')

module.exports = function () {

    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var Task = Schema({
        title: String,
        description: String,
        date: String,
        status: Boolean
    });

    return db.model('tasks', Task)
}
