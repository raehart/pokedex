var fs = require('fs');
var express = require('express');
var router = express.Router();
var pokedex = require('../public/js/pokedex.json')
/* GET home page. */
router.get('/*', function(req, res, next) {
	var dexNumber = req.url.replace("/", "");
	var pokemon = pokedex[dexNumber];
	res.render('dex', pokemon);

});

module.exports = router;
