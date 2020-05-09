const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const playerSchema = new Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    ppg: { type:String, require: false},
    championships: { type: String, required: true},
    imageee: {type: String, required: false}
}, { timestamps: true });



//  Create Model from our Schema
const Player = mongoose.model('Player', playerSchema);

// Export Player Model
module.exports = Player;