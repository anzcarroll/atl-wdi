const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(res);
    res.send("hello wizardly world!!!");
    res.render('index.html');
});

app.get('/greeting', (req, res) => {
res.send("hey cool, rad, awesome, coders of WDI11!!");
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

app.get('/users/:user_id/friends/:friend_id',(req, res) => {
res.send(`hello, user #:${req.params.user_id}. Your friend is User#:${req.params.friend_id}.`)
});

app.get('/delicious/:food', (req, res) => {
    console.log(req.query);
res.send(`Man I love ${req.params.food}`);
});

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



const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log("hello express is running" + port);
});