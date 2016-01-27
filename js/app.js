angular.module('PokedexApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller:'MainController',
		templateUrl:'views/home.html'
	}).when('/pokedex', {
		controller:'PokedexController',
		templateUrl:'views/pokedex.html'
	}).when('/dex/:dexnum', {
		controller:'DexController',
		templateUrl:'views/pokemon.html'
	}).when('/ivcalc/', {
		controller: 'IVController',
		templateUrl: 'views/ivcalc.html'
	}).when('/gymleaders/', {
		controller: 'GymLeaders',
		templateUrl: 'views/gymleaders.html'
	}).otherwise({
		redirectTo: '/'
	})
}])


.factory('$pokemon', function() {
	var natures = ['adamant', 'bashful', 'bold', 'brave', 'calm', 'careful', 'docile', 'gentle', 'hardy', 'hasty', 'impish', 'jolly', 'lax', 'lonely', 'mild', 'modest', 'naive', 'naughty', 'quirky', 'quiet', 'rash', 'relaxed', 'sassy', 'serious', 'timid'];
	var characteristics = ['Loves to eat', 'Proud of its power', 'Sturdy body', 'Highly curious', 'Strong willed', 'Likes to run', 'Takes plenty of siestas', 'Likes to thrash about', 'Capable of taking hits', 'Mischievous', 'Somewhat vain', 'Alert to sounds', 'Nods off a lot', 'A little quick tempered', 'Highly persistent', 'Thoroughly cunning', 'Strongly defiant', 'Impetuous and silly', 'Scatters things often', 'Likes to fight', 'Good endurance', 'Often lost in thought', 'Hates to lose', 'Somewhat of a clown', 'Likes to relax', 'Quick tempered', 'Good perseverance', 'Very finicky', 'Somewhat stubborn', 'Quick to flee'];
	var types = ['Normal', 'Fire', 'Fighting', 'Water', 'Flying', 'Grass', 'Poison', 'Electric', 'Ground', 'Psychic', 'Rock', 'Ice', 'Bug', 'Dragon', 'Ghost', 'Dark', 'Steel', 'Fairy'];
	var hiddenSpreads = { 
		Fighting: ['000000', '001000', '010000', '100000', '110000'],
	  Steel: ['000001', '011110', '100001', '111110'],
	  Ground: ['000010', '011100', '101100', '111100'],
	  Electric: ['000011', '010011', '100011', '111101'],
	  Flying: ['000100', '011000', '101000', '111000'],
	  Water: ['000101', '011001', '100101', '111001'],
	  Bug: ['000110', '011010', '100110', '101010', '111010'],
	  Ice: ['000111', '010111', '100111', '111011'],
	  Fire: ['001001', '010001', '101001', '110001'],
	  Rock: ['001010', '010010', '100010', '110010'],
	  Psychic: ['001011', '011011', '101011', '110011'],
	  Poison: ['001100', '010100', '100100', '110100'],
	  Grass: ['001101', '010101', '011101', '101101', '110101'],
	  Ghost: ['001110', '010110', '101110', '110110'],
	  Dragon: ['001111', '011111', '101111', '110111'],
	  Dark: ['111111'] 
	};

	//basically useless, since rounding will give you an average IV. Spreads are better.
	function getIV(stat, lv, base, curr, ev, nat) {
		if(stat === "hp") {
			IV = Math.floor(((curr - 10) * 100) / lv) - 2*base - Math.floor(ev/4) - 100;
		} else {
			IV = Math.floor(((Math.floor(curr/nat) - 5) * 100) / lv) - 2*base - Math.floor(ev/4);
		}
		return IV;
	};
	function getStat(stat, lv, base, iv, ev, nat) {
		if(stat === "hp") {
			STAT = Math.floor(((2*base + iv + Math.floor(ev/4) + 100) * lv) / 100) + 10;
		} else {
			STAT = Math.floor(Math.floor(((2*base + iv + Math.floor(ev/4)) * lv) / 100 + 5) * nat);
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
			case 'lonely': 	stats = [1.1, 0.9, 1, 1, 1]; break;
			case 'adamant': stats = [1.1, 1, 0.9, 1, 1]; break;
			case 'naughty': stats = [1.1, 1, 1, 0.9, 1]; break;
			case 'brave': 	stats = [1.1, 1, 1, 1, 0.9]; break;
			case 'bold': 		stats = [0.9, 1.1, 1, 1, 1]; break;
			case 'impish': 	stats = [1, 1.1, 0.9, 1, 1]; break;
			case 'lax': 		stats = [1, 1.1, 1, 0.9, 1]; break;
			case 'relaxed': stats = [1, 1.1, 1, 1, 0.9]; break;
			case 'modest': 	stats = [0.9, 1, 1.1, 1, 1]; break;
			case 'mild': 		stats = [1, 0.9, 1.1, 1, 1]; break;
			case 'rash': 		stats = [1, 1, 1.1, 0.9, 1]; break;
			case 'quiet': 	stats = [1, 1, 1.1, 1, 0.9]; break;
			case 'calm': 		stats = [0.9, 1, 1, 1.1, 1]; break;
			case 'gentle': 	stats = [1, 0.9, 1, 1.1, 1]; break;
			case 'careful':	stats = [1, 1, 0.9, 1.1, 1]; break;
			case 'sassy':		stats = [1, 1, 1, 1.1, 0.9]; break;
			case 'timid':		stats = [0.9, 1, 1, 1, 1.1]; break;
			case 'hasty':		stats = [1, 0.9, 1, 1, 1.1]; break;
			case 'jolly':		stats = [1, 1, 0.9, 1, 1.1]; break;
			case 'naive':		stats = [1, 1, 1, 0.9, 1.1]; break;
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
	};
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
	};
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
		if(pokemon.hiddenPower !== null) {
			return filterByHiddenPower(pokemon.hiddenPower, IVs);
		}
		return IVs
	};
	function getHiddenPower(hp, atk, def, spd, satk, sdef) {
		var bit = Math.floor((hp % 2 + (atk % 2 * 2) + (def % 2 * 4) + (spd % 2 * 8) + (satk % 2 * 16) + (sdef % 2 * 32)) * 15 / 63);
		switch(bit) {
			case 0: return 'Fighting'; break;
			case 1: return 'Flying'; break;
			case 2: return 'Poison'; break;
			case 3: return 'Ground'; break;
			case 4: return 'Rock'; break;
			case 5: return 'Bug'; break;
			case 6: return 'Ghost'; break;
			case 7: return 'Steel'; break;
			case 8: return 'Fire'; break;
			case 9: return 'Water'; break;
			case 10: return 'Grass'; break;
			case 11: return 'Electric'; break;
			case 12: return 'Psychic'; break;
			case 13: return 'Ice'; break;
			case 14: return 'Dragon'; break;
			case 15: return 'Dark'; break;
			default: return undefined;
		}
	}
	function filterByHiddenPower(type, ivs) {
		var attrs = ['hp', 'atk', 'def', 'spd', 'satk', 'sdef'];
		var valid = hiddenSpreads[type];
		for(var i=0;i<=5;i++) {
			if(ivs[attrs[i]] !== 'Invalid stat') {
				var output = []
				var stat = valid[0][i];
				for(var j=1;j<valid.length;j++) {
					if(stat !== valid[j][i]) {
						stat = 'both';
					}
				}
				if(stat !== 'both') {
					ivs[attrs[i]] = ivs[attrs[i]].filter(function(iv) {
						return iv % 2 == stat;
					});
				}
			}
		}
		return ivs
	};
	function filterByChar() {
	}
	var blankPokemon = {
		species: "",
		level: null,
		nature: "",
		hiddenPower: null,
		characteristic: null,
		current: {
			hp: null,
			atk: null,
			def: null,
			satk: null,
			sdef: null,
			spd: null
		},
		EV: {
			hp: null,
			atk: null,
			def: null,
			satk: null,
			sdef: null,
			spd: null
		}, 
		base:{
			hp: null,
			atk: null,
			def: null,
			satk: null,
			sdef: null,
			spd: null
		}
	};
	return {
		'natures': natures,
		'characteristics': characteristics,
		'types': types,
		'getIV': getIV,
		'getStat': getStat,
		'nature': nature,
		'getSpread': getSpread,
		'getAllSpreads': getAllSpreads,
		'getAllIVs': getAllIVs,
		'getHiddenPower': getHiddenPower,
		'blankPokemon': blankPokemon
	}
})

.controller('NavController', ['$scope', function($scope) {
	$(document).ready(function() {
	  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
	  $('#js-centered-navigation-menu').removeClass("show");
	  
	  menuToggle.on('click', function(e) {
	    e.preventDefault();
	    $('#js-centered-navigation-menu').slideToggle(function(){
	      if($('#js-centered-navigation-menu').is(':hidden')) {
	        $('#js-centered-navigation-menu').removeAttr('style');
	      }
	    });
	  });
	});
}])

.controller('MainController', ['$scope', function($scope) {

}])
.controller('PokedexController', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location) {
	$scope.capitalize = function(string) {
		return string[0].toUpperCase() + string.slice(1);
	};
	var url ="http://pokeapi.co/api/v1/pokedex/1/";
	$http.get(url).success(function(data){
		$scope.allpokemon = data.pokemon.map(function(pokemon) {
			pokemon.number = parseInt(pokemon.resource_uri.slice(15, -1));
			if(pokemon.name.indexOf("-") >= 0) {
				pokemon.name = pokemon.name.slice(0, pokemon.name.indexOf("-"));
			}
			return pokemon;
		}).sort(function(a, b) {
			return a.number - b.number;
		}).filter(function(pokemon, index) {
			return pokemon.number < 10000;
		});
		$scope.page = 1;
		$scope.pokeNum = 32;
		$scope.lastpage = Math.ceil($scope.allpokemon.length / $scope.pokeNum);
		$scope.changePage(1);
	});
	$scope.changePage = function(which) {
		if(which === 'prev' && $scope.page > 1) {
			$scope.page -= 1;
		} else if(which === 'next' && $scope.page < $scope.lastpage) {
			$scope.page += 1;
		} else if(which > 0 && which <= $scope.lastpage) {
			$scope.page = which;
		} else if (which === 'last') {
			$scope.page = $scope.lastpage;
		} else {
			return
		}
		var start = $scope.pokeNum * ($scope.page - 1);
		var stop = $scope.pokeNum * ($scope.page);
		$scope.pokemonPage = $scope.allpokemon.slice(start, stop);
	};
	$scope.getPages = function() {
		var pages = [];
		var first = $scope.page - 2 > 0 ? $scope.page - 2 : 1;
		var last = $scope.lastpage - $scope.page < 2 ? $scope.lastpage : $scope.page + 2;
		for(var i=first;i<=last; i++) {
			pages.push(i);
		}
		return pages;
	};
	$scope.goToPage = function(dexnum) {
		console.log("/dex/" + dexnum);
		$location.path("/dex/" + dexnum);
	}
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
	};
	$('body').on('click','#moves-header', function() {
		console.log('click')
		$('#moves-list').slideToggle()
	});
}])

.controller('IVController', ['$scope', '$http', '$pokemon', function($scope, $http, $pokemon) {
	$scope.capitalize = function(string) {
		if(typeof string === 'string' && string.length > 0) {
			return string[0].toUpperCase() + string.slice(1);
		} else {
			return string;
		}
		
	};
	$scope.natures = $pokemon.natures;
	$scope.characteristics = $pokemon.characteristics;
	$scope.types = $pokemon.types;
	var getIV = $pokemon.getIV;
	var getStat = $pokemon.getStat;
	var nature = $pokemon.nature;
	var getSpread = $pokemon.getSpread;
	var getAllSpreads = $pokemon.getAllSpreads;
	var getAllIVs = $pokemon.getAllIVs;
	$scope.currentPKMN = $pokemon.blankPokemon;

	$scope.update = function() {
		if($scope.validPokemon()) {
			$scope.ivs = getAllIVs($scope.currentPKMN);
		}
	};
	$scope.changePkmn = function(speciesData) {
		if(speciesData === null || speciesData === false) {
			return;
		}
		$http.get('http://pokeapi.co/' + speciesData.resource_uri).success(function(data) {
			$scope.currentPKMN.species = speciesData.name;
			$scope.pokemonSearch = speciesData.name;
			$scope.currentPKMN.sprite = 'http://pokeapi.co/media/img/' + data.national_id + '.png';
			$scope.currentPKMN.base = {
				hp: data.hp,
				atk: data.attack,
				def: data.defense,
				satk: data.sp_atk,
				sdef: data.sp_def,
				spd: data.speed
			}
			
			$scope.update();
		}).error(function(err) {
			console.error("Error getting pokemon", err.message);
		})
	}
	$scope.changePkmnByName = function(PKMNname) {
		PKMNdata = $scope.pokedex.filter(function(pkmn) {
			return pkmn.name.toLowerCase() === PKMNname.toLowerCase();
		});
		if(PKMNdata.length > 0) {
			$scope.species = PKMNdata[0];
			$scope.changePkmn(PKMNdata[0]);
		};

	};
	$scope.updateNature = function(nature) {
		natures = $scope.natures.filter(function(nat) {
			return nature.toLowerCase() === nat.toLowerCase();
		});
		if(natures.length > 0) {
			$scope.currentPKMN.nature = natures[0];
			$scope.update();
		}
	};
	$scope.minSpreads = function(spread) {
		if(spread.length > 1 && typeof spread === 'object') {
			return spread[0] + "-" + spread[spread.length - 1];
		} else if(spread.length === 1) {
			return spread[0];
		} else {
			return spread;
		}
	};
	$scope.validPokemon = function() {
		if($scope.currentPKMN.species && $scope.currentPKMN.nature && $scope.currentPKMN.level) {
			return true
		} else {
			return false
		}
	}
	$scope.initialize = function() {
		$http.get('http://pokeapi.co/api/v1/pokedex/1/').success(function(data) {
			$scope.pokedex = data.pokemon;
		}).error(function(err) {
			console.log(err)
		})
	};
	$scope.initialize();
}])

.controller('GymLeaders', ['$scope', '$http', function($scope, $http) {

}]);