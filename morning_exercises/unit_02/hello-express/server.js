//pull in (any node package) to use in our file 
const express = require('express');
const hbs = require('hbs');
//use express to run (constructor function) call it app because its application holding express function
const app = express();

//how we are going to tell express what engine to use to find templates
 //it will automatically look for templates in the folder views-need to make views folder
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'
//__dirname says start from current dir , and allows us to set up relative paths 





//only a get request when using .get
app.get('/', (req, res) => {
    console.log(res);
    res.send("hello wicked wizards!!");
    res.render('index.html');
});

//because hbs, it is going and looking in (rendering) greeting file, to pull back into our template
app.get('/greeting', (req, res) => {
    //render file called greeting
    //
    res.render('greetings', {
      data: req.query.saying,
      userName: req.query.name,
      date: req.query.date,
      place: req.query.location,
    });
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["olives from The Lawrence", 
        'Cauliflower from YEAH!Burger', 
        'Hops spicy chicken biscuit', 
        'pistachio boba from Honey Bubble', 
        'Pizza from Ammara'];

    res.render('favorite_foods', {
        data: favoriteFoods,
    });
});


app.get('/rihanna', (req, res) => {
res.send('work work work work work');
});

app.get("/name/:name",(req, res) => {
    if(req.query.human) {
        res.send(`Hello, ${req.params.name}!`);
    }else{
        res.send(`hello, toaster oven`);
}
});

//(/:'wildcard' paramater//url parameter)
//code not clear of how many params it has on server side
app.get('/users/:user_id/friends/:friend_id',(req, res) => {
res.send(`hello, user #:${req.params.user_id}. Your friend is User#:${req.params.friend_id}.`)
});

app.get('/delicious/:food', (req, res) => {
    console.log(req.query);
res.send(`Man I love ${req.params.food}`);
});

//query params clear params bc on server side '?____=____&____=____
//send us dynamic information
//to make query param dont have to put param in param statement
app.get('/sightings', (req,res) => {
    console.log(req.query);
res.send(`how many ufo sighting do you think are in the state: ${req.query.state}? sights: ${req.query.sights}.`);
});

app.get('/add', (req, res) => {
    console.log(req.query);
 let num1 = req.query.num1;
 let num2 = req.query.num2;
 let sum = parseInt(num1) + parseInt(num2);
res.send(`the total is ${sum}`);
});

app.get('/subtract', (req, res) => {
    console.log(req.query);
 let num1 = req.query.num1;
 let num2 = req.query.num2;
 let sum = parseInt(num1) - parseInt(num2);
res.send(`the total is ${sum}`)
});


app.get('/multiply', (req, res) => {
    console.log(req.query);
 let num1 = req.query.num1;
 let num2 = req.query.num2;
 let sum = (parseInt(num1)) * (parseInt(num2));
res.send(`${sum}`)
});

app.get('/math/:operator', (req, res) => {
    console.log(req.query);
if (req.params.operator === "add") {
    let sum = parseInt(req.query.num1) + parseInt(req.query.num2);
    res.send(`${sum}`);
} else if (req.params.operator === "subtract") {
    let sum = parseInt(req.query.num1) - parseInt(req.query.num2);
    res.send(`${sum}`);
} else if (req.params.operator === "multiply") {
    let sum = parseInt(req.query.num1) * parseInt(req.query.num2);
    res.send(`${sum}`);
}
});


//if environment is set for port then use it, if not use 3000(default port)
const port = process.env.PORT || 3000;
//start listening on port(this will start the server)
app.listen(port, () => {
console.log("hello express is running" + port);
});