var express = require('express');
var hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

const indexController = require('./controllers/index_controller');
app.use('index', indexController);

const toppingController = require('./controllers/topping_controller');
app.use('/topping', toppingController);

const orderController = require('./controllers/order_controller');
app.use('/order', orderController);




app.get('/pineapple', (req, res) => {
    console.log(res);
    res.send("pineapple is the best");
});
app.get('/pineapple/:type', (req, res, next) => {
    res.send(req.query.type);
});

//  app.get('/order/:amount/:size', function(req, res, next) {

//      res.send( // something );
//  });


var port    = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});