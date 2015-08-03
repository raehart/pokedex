var express = require('express');
var router = express.Router();
var pokedex = require("../public/js/pokemon.json")

console.log(pokedex[1])

/* GET home page. */
router.get('/*', function(req, res, next) {
	var dexNumber = req.url.replace("/", "");
	var pokemon = pokedex[dexNumber];

  res.render('nationaldex', pokemon);
  
});

module.exports = router;
