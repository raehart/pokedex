var fs = require('fs');
var express = require('express');
var PokeApi = require('pokeapi');
var api = PokeApi.v1()
var master = {};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


var getPokemon = function(dexNumber) {
  api.get('pokemon', dexNumber).then(function(data) {
    pokemon = data
    api.get(data.moves).then(function(data) {
    	moves = data
    });

    api.get(data.descriptions).then(function(desc) {
    	// console.log(desc)
    	pokemon["description"] = desc[desc.length-1].description;
  		pokemon["prev"] = parseInt(dexNumber) - 1 !== 0? parseInt(dexNumber) - 1 : parseInt(dexNumber);
  		pokemon["next"] = parseInt(dexNumber) + 1;
  		pokemon["identifier"] = pokemon.name.toLowerCase();
  		
  		var writeName = "national_" + dexNumber + ".json"
      master[dexNumber] = pokemon
  		fs.writeFile(writeName, JSON.stringify(pokemon));

      console.log(pokemon.name + " archived!");
  		    });
    // console.log(data)
    

  }, function(err) {
    console.log('ERROR', err);
  });
}


var counter = 1
var end = 720
console.log("Start Archive: estimated time is " + Math.round((end + 3)/60*5) + " minute(s).")
var loop = setInterval(function () {
  if(counter < end + 1 ) {
    getPokemon(counter)
    counter += 1
  } else if(counter = end+1) {
    console.log("Compiling master file:")
    console.log("Pokemon Count: " + Object.size(master));
    fs.writeFile('pokedex.json', JSON.stringify(master));
    console.log("Archive complete")
    clearInterval(loop);
  }

}, 5000);
