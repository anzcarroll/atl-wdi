//requirements: require mongoose

var express = require('express')
const mongoose =require('mongoose');
var Schema = mongoose.Schema;


//create your donut schema:
const DonutSchema = new Schema ({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number,
});

var Donut = mongoose.model("Donut", DonutSchema);
//export your donut with module.exports()
module.exports = Donut