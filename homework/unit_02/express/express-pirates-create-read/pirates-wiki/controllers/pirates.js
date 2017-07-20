//your code below
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

/*at the index of pirates*/
router.get('/', (req, res) => {
    res.render('pirates/index', {
    pirates: pirates
    });
});


/*new PIRATE*/
router.get('/new', (req, res) => {
    res.render('pirates/new');
});

router.get('/:id', (req, res) => {
 const id = req.params.id;
 const idPirate = pirates.seededPirates[id];
res.render('pirates/show',{
 pirate: idPirate
});
});

router.post('/', (req, res) =>{
const newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    deathYear: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname,
}
pirate.seededPirates.push(newPirate);
res.redirect('/pirates');
});






module.exports = router;