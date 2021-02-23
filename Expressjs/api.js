const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.json({
        "result": 'Success',
        "last-response": 'Login'
    })
})

module.exports = router