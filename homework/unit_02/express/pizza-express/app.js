'use strict';


var express = require('express');
var hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');
// app.set('views', './views');

hbs.registerPartial('nav', handlebars.template["nav"])
app.use(express.static(__dirname + '/public'));

const indexController = require('./controllers/index_controller');
app.use('/', indexController);

const toppingController = require('./controllers/topping_controller');
app.use('/topping', toppingController);


const orderController = require('./controllers/order_controller');
app.use('/order', orderController);





var port = 3001;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});