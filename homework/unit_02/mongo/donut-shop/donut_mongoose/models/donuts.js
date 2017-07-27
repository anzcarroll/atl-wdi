//requirements: require mongoose
var express = require('express')
const mongoose =require('mongoose');


//create your donut schema:
const newDonut = new mongoose.Schema ({
    name: string,
    description: string,
    img: string,
    price: number,
    qty: number,
});

//export your donut with module.exports()
module.exports = router;