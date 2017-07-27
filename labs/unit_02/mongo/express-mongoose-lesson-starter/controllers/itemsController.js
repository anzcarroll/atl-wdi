const express = require('express');

var User = require("../models/user");
var Item = require("../models/item");


//below, grabbing the params from what e are pullig in from server.js
const router = express.Router({mergeParams: true});

//index
router.get('/', (req, res) => {
    const userIdToFind = req.params.userId;
    User.findById(userIdToFind
        .then((user) => {
        res.render(
            'items/index',
            { 
                userId: user._id,
                UserName: user.first_name,
                items: user.items 
            }
        )
        }))
});
//render new router
router.get('/new' (req, res) => {
    res.render(
        'items/new',
        { userId } 
    )
})




//show
router.get('/:itemId', (req, res) => {
    //find param
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
        .then((user) => {
        //grab data
         const foundItem = user.items.find((item) =>{
            return item.id === itemId
        });
        //render data
            res.render(
                '/items/show', 
                {
                    userId,
                   itemId: foundItem._id,
                   userName: user.first_name,
                   itemName: foundItem.name
                } 
            );
        })
        .catch((error) => {
            console.log('failed to find user')
        })
});

//route that rnders edit form
router.get('//:itemId/edit', (req, res) => {
    const userId = req.params.userId;
    const itemIdToFind = request.params.itemId;

User.findById(userId)
.then((user) =>{
    const foundItem = user.items.find((item) =>{
        return item.id ===itemId;
    })
})

    res.render('items/edit');

})


//delete
router.get('/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemIdToFind = request.params.itemId;

User.findById(userId)
.then((user) =>{
    const foundItem = user.items.find((item) =>{
        return item.id ===itemId;
    })
    const indextoDelete = user.items.indexOf(indextoDelete);
    user.items.splice(indextoDelete, 1);
User.save().then((user) => {
    
})
    res.redirect()



module.exports = router;