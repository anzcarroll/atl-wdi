var express = require('express');
var router = express.Router();

router.get('/:amount/:size', function(req, res, next) {
     res.render(':amount/:size', {
       data: `${req.params.amount} ${rq.params.size} pizzas!` 
     });
 });





module.exports = router;