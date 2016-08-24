/**
 * Created by treinamento-sony on 23/08/16.
 */
var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
    res.send("Tutorial TDD");
});

module.exports = router;
