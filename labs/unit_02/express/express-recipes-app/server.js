const express = require('express');
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'hbs')
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

/* HOME */
app.get('/recipes', function(req,res) {
  res.render('recipes/index', {
      recipes: seededRecipes
  })
});

// app.use('/recipes'

    //res.send("eat these meals")
//  res.render('recipes', seededRecipes)
// });

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot steamy recipes on port', port,"//", new Date());
});
