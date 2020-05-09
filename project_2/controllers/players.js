const express = require('express');
const router = express.Router();
const Player = require('../models/players.js');

// add routes


// Index
router.get('/', (req, res) => {
    // Use Playrs model to get all Players
    Player.find({}, (error, allPlayers) => {
        res.render('Index', {
            players: allPlayers
        })
    });

});

router.get('/Trivia', (req, res) => {
    // Use Players model to get all Fruits
    
        res.render('Trivia');
    
});


router.get('/CreateOwnList', (req, res) => {
    // Use Players model to get all Fruits  

        res.render('CreateOwnList');
        
});

// New
router.get('/new', (req, res) => {
    res.render('New');
});





// Create
router.post('/', (req, res) => {
    // Use Model to create Player Document
    Player.create(req.body, (error, createdPlayer) => {
        // Once created - respond to client
        console.log(createdPlayer);
        res.redirect('/players');
    });
});


// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Player.findById(req.params.id, (error, foundPlayer) => {
        // render the Show route and pass it the foundPlayer
        res.render('Show', {
            player: foundPlayer
        });
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Player.findByIdAndRemove(req.params.id, (err, player) => {
        res.redirect('/players');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Player.findById(req.params.id, (err, foundPlayer) => {
        // render the edit view and pass it the found player
        res.render('Edit', {
            player: foundPlayer
        })
    });
});

// Put
router.put('/:id', (req, res) => {
    // Update the player document using our model
    Player.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/players');
    });
});


// export router
module.exports = router;