const express = require('express')
const router = express.Router()
const model = require('../model/task.js')();


router.post('/add', (req, res) => {
    let body = req.body;

    console.log(body)
    body.status = false
    model.create(body, (err, task) => {

        if(err){
            throw err;
        }
        res.redirect('/');
    })
});

router.get('/turn/:id', (req, res) => {

    let id = req.params.id;
    console.log(id)
    model.findById(id, (err, task) => {

        if (err){

            throw err;
        };
        task.status = !task.status;
        task.save()
            .then(() => res.redirect('/'));
    });
});

router.get('/del/:id', (req, res) => {

    let id = req.params.id;
    console.log(id)
    model.remove({_id: id}, (err, task) => {

        if (err){
            throw err
        }
        res.redirect('/');
    })
});

router.use('/', (req, res) => {
    model.find({}, (err, tasks) => {
        if (err) throw err;

        res.render('index', {
            title: 'Task Manager',
            tasks: tasks
        });
    });
});



module.exports = router;