var express = require('express');
var router = express.Router();
var pokedex = require("../public/js/pokedex.js")

/* GET home page. */
router.get('/*', function(req, res, next) {
	var dexNumber = req.url.replace("/", "");
	var pokemon = pokedex.hoenn[dexNumber];
  res.render('pokedex', pokemon);
  console.log(pokemon)
});

module.exports = router;
