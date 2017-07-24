/* packages */
const path        = require('path');
const logger      = require('morgan');
const express     = require('express');
const hbs         = require('hbs');
const bodyParser  = require('body-parser');
const methodOverride = require('method-override');


/* app settings*/
const app = express();
const port = process.env.PORT || 3001;


/* set up the application params*/
const toDoController = require('./controllers/todos');


// log -- always put middleware before calling routes/reads top to bottom
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

app.use('/todos', toDoController);

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
