angular.module('PokedexApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller:'MainController',
		templateUrl:'views/home.html'
	}).when('/dex/:dexnum', {
		controller:'DexController',
		templateUrl:'views/pokemon.html'
	}).when('/ivcalc/', {
		controller: 'IVController',
		templateUrl: 'views/ivcalc.html'
	}).otherwise({
		redirectTo: '/'
	})
}])

//need to fix bug for prior and next buttons on first and last pokemon
.controller('MainController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	var url ="http://pokeapi.co/api/v1/pokedex/1/";
	$http.get(url).success(function(data){
		$scope.totaldex = data;
		console.log($scope.totaldex.pokemon)
		$scope.allpokemon = $scope.totaldex.pokemon.filter(function(pokemon, index) {
			var num = parseInt(pokemon.resource_uri.slice(15, -1));
			return num < 10000;
		});
		for(key in $scope.allpokemon) {
			if($scope.allpokemon.hasOwnProperty(key)) {
				$scope.allpokemon[key].number = parseInt($scope.allpokemon[key].resource_uri.slice(15, -1));
			}

	}
		console.log($scope.allpokemon)
	})

}])
.controller('DexController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$scope.dexnum = $routeParams.dexnum;
	$scope.root = "http://pokeapi.co";
	var url = "http://pokeapi.co/api/v1/pokemon/" + $scope.dexnum + "/";
		$http.get(url).success(function(data) {
		$scope.pokemon = data;
		$scope.prior = $scope.pokemon.national_id-1;
		$scope.next= $scope.pokemon.national_id+1
		$scope.getData($scope.pokemon.sprites[0].resource_uri);
		$scope.getData($scope.pokemon.descriptions[0].resource_uri);
	});

	$scope.getData = function(uri) {
		var url = $scope.root + uri;
		$http.get(url).success(function(data) {
			$scope.uriData = data;
			if($scope.uriData.hasOwnProperty("image")) {
				$scope.pokeSprite = $scope.root + $scope.uriData.image; 
			} if($scope.uriData.hasOwnProperty("description")) {
				$scope.pokeDes =$scope.uriData.description;
			}
		})
	}

}])
<<<<<<< HEAD
=======

.controller('IVController', ['$scope', '$http', function($scope, $http) {
	$scope.page = "IV Calculator"
	$scope.currentPKMN = {
		species: "charmander",
		level: 50,
		nature: "Adamant",
		current: {
			hp: 114,
			atk: 79,
			def: 63,
			satk: 72,
			sdef: 70,
			spd: 85
		},
		EV: {
			hp: 0,
			atk: 0,
			def: 0,
			satk: 0,
			sdef: 0,
			spd: 0
		}, 
		base:{
			hp: 39,
			atk: 52,
			def: 43,
			satk: 60,
			sdef: 50,
			spd: 65
		}
	}
	function getIV(stat, lv, base, curr, ev ) {
		if(stat === "hp") {
			IV = ((curr - 10) * 100) / lv - 2*base - ev/4 - 100;
		} else {
			IV = ((curr/nat - 5) * 100) / lv - 2*base - ev/4;
		}
		return IV;
	};
	function getStat(stat, lv, base, iv, ev, nat) {
		if(stat === "hp") {
			STAT = ((2*base + iv + ev/4 + 100) * lv) / 100 + 10;
		} else {
			STAT = (((2*base + iv + ev/4) * lv) / 100 + 5) * nat;
		}
		return STAT;
	};
	function nature(nat) {
		var stats = []
		switch(nat.toLowerCase()) {
			case 'hardy':
			case 'docile':
			case 'bashful':
			case 'quirky':
			case 'serious':	
				stats = [1, 1, 1, 1, 1];
				break;
			case 'lonely':
				stats = [1.1, 0.9, 1, 1, 1];
				break;
			case 'adamant':
				stats = [1.1, 1, 0.9, 1, 1];
				break;
			case 'naughty':
				stats = [1.1, 1, 1, 0.9, 1];
				break;
			case 'brave':
				stats = [1.1, 1, 1, 1, 0.9];
				break;
			case 'bold':	
				stats = [0.9, 1.1, 1, 1, 1];
				break;
			case 'impish':	
				stats = [1, 1.1, 0.9, 1, 1];
				break;
			case 'lax':	
				stats = [1, 1.1, 1, 0.9, 1];
				break;
			case 'relaxed':	
				stats = [1, 1.1, 1, 1, 0.9];
				break;
			case 'modest':	
				stats = [0.9, 1, 1.1, 1, 1];
				break;
			case 'mild':	
				stats = [1, 0.9, 1.1, 1, 1];
				break;
			case 'rash':	
				stats = [1, 1, 1.1, 0.9, 1];
				break;
			case 'calm':	
				stats = [0.9, 1, 1, 1.1, 1];
				break;
			case 'gentle':	
				stats = [1, 0.9, 1, 1.1, 1];
				break;
			case 'careful':	
				stats = [1, 1, 0.9, 1.1, 1];
				break;
			case 'sassy':	
				stats = [1, 1, 1, 1.1, 0.9];
				break;
			case 'timid':	
				stats = [0.9, 1, 1, 1, 1.1];
				break;
			case 'hasty':	
				stats = [1, 0.9, 1, 1, 1.1];
				break;
			case 'jolly':	
				stats = [1, 1, 0.9, 1, 1.1];
				break;
			case 'naive':	
				stats = [1, 1, 1, 0.9, 1.1];
				break;
		}
		mods = {
			hp: 1,
			atk: stats[0],
			def: stats[1],
			satk: stats[2],
			sdef: stats[3],
			spd: stats[4]
		}
		return mods
	};
	function getSpread(stat, lv, base, ev, nat) {
		var spread = {}
		for(var i=0; i<32; i++) {
			score = Math.floor(getStat(stat, lv, base, i, ev, nat))
			if(spread[score] === undefined) {
				spread[score] = []
			}
			spread[score].push(i)
		}
		return spread
	}
	function getAllSpreads(pokemon) {
		var stats = ['hp', 'atk', 'def', 'satk', 'sdef', 'spd'];
		var spreads = {'hp':[], 'atk':[], 'def':[], 'satk':[], 'sdef':[], 'spd':[]};
		var natureMods = nature(pokemon.nature);
		for(var i=0; i<stats.length; i++) {
			var stat = stats[i]
			var lv = pokemon.level
			var base = pokemon.base[stat]
			var ev = pokemon.EV[stat]
			var nat = natureMods[stat]
			spreads[stat] = getSpread(stat, lv, base, ev, nat)
		}
		return spreads
	}
	function getAllIVs(pokemon) {
		var stats = ['hp', 'atk', 'def', 'satk', 'sdef', 'spd'];
		var spreads = getAllSpreads(pokemon)
		var IVs = {'hp':[], 'atk':[], 'def':[], 'satk':[], 'sdef':[], 'spd':[]};
		for(var i=0;i<stats.length; i++) {
			var stat = stats[i]
			var current = pokemon.current[stat]
			if (spreads[stat][current] !== undefined) {
				IVs[stat] = spreads[stat][current]	
			} else {
				IVs[stat] = "Invalid stat"
			}
		}
		return IVs
	}
	$scope.update = function() {
		$scope.ivs = getAllIVs($scope.currentPKMN);
	}
	$scope.changePkmn = function(speciesData) {
		console.log(speciesData)
		$http.get('http://pokeapi.co/' + speciesData.resource_uri).success(function(data) {
			$scope.currentPKMN.species = speciesData.name;
			$scope.pokemonData = data;
			$scope.currentPKMN.base = {
				hp: data.hp,
				atk: data.attack,
				def: data.defense,
				satk: data.sp_atk,
				sdef: data.sp_def,
				spd: data.speed
			}
			console.log($scope.currentPKMN.base)
			$scope.update();
		}).error(function(err) {
			console.log(err);
		})
	}

	$http.get('http://pokeapi.co/api/v1/pokedex/1/').success(function(data) {
		$scope.pokedex = data.pokemon;
		$scope.species = $scope.pokedex[1];
	}).error(function(err) {
		console.log(err)
	})
	$scope.ivs = getAllIVs($scope.currentPKMN)
	// $('body').on('change', '.pokemon-input input', function(e) {
	// 	$scope.ivs = getAllIVs($scope.currentPKMN)
	// });




}])
>>>>>>> 871b2979b685199be1190911a615eb16aadd6a02
