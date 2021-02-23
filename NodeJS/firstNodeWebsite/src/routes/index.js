const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '/../views/index'), {title: "Principal Page"});
})
router.get('/contact', (req, res) => {
    res.render(path.join(__dirname, '/../views/contact'), {title: "Contact"});
})
router.get('/about', (req, res) => {
    res.render(path.join(__dirname, '/../views/about'), {title: "About"});
})
module.exports = router;