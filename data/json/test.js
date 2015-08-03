var fs = require('fs')
var moves = require('./pokemon_moves.json');
var moveSet = require('./moves.json');
var newMoves = [];
var pokemonMoves = {}

for(var i=0;i<moves.length;i++) {
	if(moves[i].version_group_id == 15) {
		newMoves.push(moves[i]);
		if( pokemonMoves[moves[i].pokemon_id] === undefined) {
			pokemonMoves[moves[i].pokemon_id] = []
		}
		pokemonMoves[moves[i].pokemon_id].push(moves[i]);

	}
}
var output = "";

for(key in pokemonMoves) {
	for(var i=0;i<pokemonMoves[key].length;i++) {
	var move = pokemonMoves[key][i]
	// output += move[move_id] 
	}
}

for(var i=0;i<pokemonMoves[1].length;i++) {
var move = pokemonMoves[1][i]
if(move.pokemon_move_method_id <5) {
var learnedMove = moveSet[move.move_id].name;
output += move.move_id + ", "
}
}

console.log(pokemonMoves[1][1])
// console.log(pokemonMoves[1])
// console.log(moveSet[1])
console.log(output)
// fs.writeFile('', JSON.stringify());

