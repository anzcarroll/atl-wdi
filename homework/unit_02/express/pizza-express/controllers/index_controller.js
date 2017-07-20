var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    console.log(res);
    const welcome = ("Welcome to the PIZZZZZZZZZZA PARTAY!!");
    res.render('index', {
    data: welcome,
    });
});




module.exports = router;