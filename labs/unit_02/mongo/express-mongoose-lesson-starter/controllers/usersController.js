var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (req, res) => { 
    User.find({})
        .then((users) => {
            console.log(users[0]._id)
            res.render(
                'users/index', 
                { users: users }
            );
        })
    .catch((error) => {
        console.log('Error retrieving users from database!')
        console.log(error);
    });
})

// USER CREATE 'NEW' FORM
router.get('/new', (req, res) =>{
        res.render('/users/new');
});

//USER CREATE ROUTE **need body parser here
// REMEMBER: if you set the `name=""` attribute of your form
// inputs to match the schema for your object, you can simply
// pass the request body into the constructor for your Mongoose
// object
router.post('/', (req, res) =>{
   const newUser = new User(req.body);
   
   newUser.save()
          .then((newUser) => {
              console.log(`New user created with ID of:${newUser._id}`)
              res.render(
                'users/show',
                { users: newUsers }
              );
       })
        .catch((err) => {
            console.log('ERROR saving new user to database');
            console.log(error);
        })
});

// USER SHOW ROUTE
router.get('/:id', (req,res) => {
    const userIdToLookForInDb = req.params.id;

    User.findById(userIdToLookForInDb)
        .then((user) => {
            res.render('users/show', {
                user: user
            })
        })
})

// USER UPDATE ROUTE
router.put('/:id', (req, res) => {
    const userIdToUpdate = req.params.id;
    const updatedUserInfo = req.body;

    User.findByIdAndUpdate(
        userIdToUpdate,
        updatedUserInfo,
        { new: true}
    )
    .then((user) => {
        console.log(`user with ID of ${user._id} updated!`)
    })
    res.render(
       'users/show',
       { user } 
    )
})
    .cath((error) => {
    console.log(`user with ID of ${user._id} failed to update`)
    console.log(error)
    })


// USER DESTROY
router.get('/user/:id/delete', (req, res) => {
 const userIdToDelete = req.params.id;
 user.findByIdAndRemove(userIdToDelete)
    .then(() => {
        res.redirect('/users');
    })
});




// REMOVE AN ITEM

module.exports = router;
