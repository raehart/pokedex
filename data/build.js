var fs = require('fs')
var abilities = require('./json/ability_master.json');
var pokemon = require('./json/pokemon.json');
var moves = require('./json/moves.json');
var pokemonAbilities = require('./json/pokemon_abilities.json');
var pokemonMoves = require('./json/pokemon_moves.json');
var pokemonSpeciesNames = require('./json/pokemon_species_names.json');




//add species
for(var i=0;i<pokemonSpeciesNames.length;i++) {
	var species = pokemonSpeciesNames[i]
	if(species.local_language_id == 9) {
		pokemon[species.pokemon_species_id].name = species.name;
		pokemon[species.pokemon_species_id].genus = species.genus;
	}
}
//add empty parameters
for(key in pokemon) {
	pokemon[key]["abilities"] = {};
	pokemon[key]["moves"] = [];
}
//add abilities
for(var i=0;i<pokemonAbilities.length;i++) {
	var ability = pokemonAbilities[i];
	pokemon[ability.pokemon_id].abilities["ability_" + ability.slot] = abilities[ability.ability_id];
	pokemon[ability.pokemon_id].abilities["ability_" + ability.slot]["ability_id"] = ability.ability_id;
	pokemon[ability.pokemon_id].abilities["ability_" + ability.slot]["is_hidden"] = ability.is_hidden;
}
//add moves
for(var i=0;i<pokemonMoves.length;i++) {
	if(pokemonMoves[i].version_group_id === 15 && (pokemonMoves[i].pokemon_move_method_id <5)) {
		var move = pokemonMoves[i];
		var moveMethod = {
			"1": "Level-up",
			"2": "Egg",
			"3": "Tutor",
			"4": "Machine",
			"5": "Stadium-Surfing-Pikachu",
			"6": "Light-Ball-Egg",
			"7": "Collosseum-Purification",
			"8": "XD-Shadow",
			"9": "XD-Purification",
			"10": "Form Change"
		}
		var moveToPlace = moves[move.move_id - 1];
		moveToPlace["learn_method"] = moveMethod[move.pokemon_move_method_id];
		moveToPlace["level"] = move.level;
		pokemon[move.pokemon_id].moves.push(moveToPlace)
	}
}

console.log(pokemon[1]);


fs.writeFile('pokemon_build.json', JSON.stringify(pokemon));