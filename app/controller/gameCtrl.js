var Game = require('../models/models').GameModel;

var GameCtrl = {
    // Get all Games from the Database
    GetGame: function(req, res){
        Game.find({}, function(err, Games){
            if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
            }
            res.json({status: true, Game: Games});
        });
    },
    //Post a Game into Database
    PostGame: function(req, res){
        var Game = new Game(req.body);
        Game.save(function(err, Game){
            if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
            }
            res.json({status: true, message: "Game Saved!!"});
        });
    },
    //Updating a Game status based on an ID
    UpdateGame: function(req, res){
        var completed = req.body.completed;
        Game.findById(req.params.id, function(err, Game){
            Game.completed = completed;
            Game.save(function(err, Game){
                if(err) {
                    res.json({status: false, error: "Status not updated"});
                }
                res.json({status: true, message: "Status updated successfully"});
            });
        });
    },
    // Deleting a Game baed on an ID
    DeleteGame: function(req, res){
        Game.remove({_id: req.params.id}, function(err, Games){
            if(err) {
                res.json({status: false, error: "Deleting Game is not successfull"});
                return;
            }
            res.json({status: true, message: "Game deleted successfully!!"});
        });
    }
}

module.exports = GameCtrl;