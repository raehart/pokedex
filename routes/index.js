var express = require('express');
var router = express.Router();
var pokedex = require("../public/js/pokedex.js")
/* GET home page. */

var hoennDex = {}

for(var i=0; i<450; i++) {
	if(pokedex.hoenn[i] !== undefined) {
		var pokemon = pokedex.hoenn[i];
		hoennDex[i] = pokemon.name
	}
}


router.get('/', function(req, res, next) {
	var pokedex = {"pokedex": hoennDex}
	console.dir(pokedex)
  res.render('index', pokedex);
});

module.exports = router;
