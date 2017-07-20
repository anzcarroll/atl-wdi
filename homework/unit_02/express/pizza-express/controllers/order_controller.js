var express = require('express');
var router = express.Router();

router.get('/:amount/:size', function(req, res, next) {
     res.render('order', {
       data: `${req.params.amount} ${req.params.size}` 
     });
 });





module.exports = router;