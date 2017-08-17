//your code here
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 3001;

const pirateController = require('./controllers/pirates');

app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

app.use("/pirates", pirateController);

app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('test index page');
});







app.listen(port, () =>{
    console.log("I'm going to make some pirates on port", port, "ARRRRGH");
});