/**
 * Created by treinamento-sony on 23/08/16.
 */
var express = require('express');
var router = express.Router();

var Game = require('../models/models');
var GameCtrl = require('../controller/gameCtrl');

router.get("/", GameCtrl.GetGame);
router.post("/", GameCtrl.PostGame);
router.put("/:id", GameCtrl.PostGame);
router.delete("/:id", GameCtrl.DeleteGame);

module.exports = router;
