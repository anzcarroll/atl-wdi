//your code below
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates');

/*INDEX OF ALL PIRATES*/
router.get('/', (req, res) => {
    res.render('pirates/index', {
    pirates: pirates.seededPirates
    });
});


/*CREATE NEW*/
router.get('/new', (req, res) => {
    res.render('pirates/new');
});

/*SHOW ID*/
router.get('/:id', (req, res) => {
 const id = req.params.id;
 const idPirate = pirates.seededPirates[id];
res.render('pirates/show',{
 pirates: idPirate,
 id: id
});
});

/* edit existing */
router.get('/:id/edit', (req,res) => { 
    const id = req.params.id;
 const idPirate = pirates.seededPirates[id];
 res.render('pirates/edit', {
     pirates: idPirate,
     id: id
});
});

/*UPDATE */
	router.put('/:id', (req, res) => {
		  // We have the ID
          const id = req.params.id;
		  // Use the id to grab specific index in array
		  const idPirate = pirates.seededPirates[id];
          // Update the property values
          idPirate.name = req.body.name;
          idPirate.birthplace = req.body.birthplace;
          idPirate.death_year = req.body.death_year;
          idPirate.base = req.body.base;
          idPirate.nickname = req.body.nickname;
		  // redirect back to individual name
          res.method = "GET";
          res.redirect(`/pirates/${id}`);
    });





/* POST/SAVE NEW to index*/
router.post('/', (req, res) =>{
    console.log(req.body);
const newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    deathYear: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname,
}
pirates.seededPirates.push(newPirate);
res.redirect('/pirates');
});

/* DEEEEELETE */
router.delete('/:id', (req, res) => {
    pirates.seededPirates.splice('req.params.id', 1);
    res.redirect("/pirates");
})




module.exports = router;