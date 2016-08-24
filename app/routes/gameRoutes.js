var express = require('express');
var router = express.Router();

var Game = require('../models/models');
var GameCtrl = require('../controller/gameCtrl');

router.get("/", GameCtrl.GetGame);
router.post("/", GameCtrl.PostGame);
router.put("/:id", GameCtrl.UpdateGame);
router.delete("/:id", GameCtrl.DeleteGame);

module.exports = router;
