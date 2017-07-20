var express = require('express');
var router = express.Router();

router.get('/toppings', (req, res) => {
const toppings =
    ['mushrooms','pineapple', 'onion', 'olives', 'spicy oil']
res.render('toppings' , {
      data: toppings,
    });
});
router.get('/pineapple/:type', (req, res, next) => {
    res.render(req.query.type);
});





module.export = router;