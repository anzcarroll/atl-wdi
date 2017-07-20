//your code here
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const pirateController = require('./controllers/pirates');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});


app.use("/pirates", pirateController);




app.listen(port, () =>{
    console.log("I'm going to make some pirates on port", port, "ARRRRGH");
});