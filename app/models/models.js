var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    title: String,
    released: {type: Date, default: Date.now()}
});

var GameModel = mongoose.model('GameModel', GameSchema);

exports.GameModel = GameModel;
