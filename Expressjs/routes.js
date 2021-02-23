const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    //res.render('index');
    res.end('Hello')
});

router.get('/login', (req, res) => {

    gres = "Login page";
    res.end(gres);
})

module.exports = router;