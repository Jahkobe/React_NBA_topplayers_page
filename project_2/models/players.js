const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var firstValue = "name";
var secondValue = "team";
var thirdValue = "ppg";
var fourthValue = "championships";
var fifthValue = "imageee";

// Create Schema
const playerSchema = new Schema({
firstValue: { type: String, required: true },
secondValue: { type: String, required: true },
thirdValue: { type:String, require: false},
fourthValue: { type: String, required: true},
fifthValue: {type: String, required: false}
}, { timestamps: true });


// Create Model from our Schema
const Player = mongoose.model('Player', playerSchema);

// Export Player Model
module.exports = Player;
