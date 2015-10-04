angular.module('PokedexApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller:'MainController',
		templateUrl:'views/home.html'
	}).when('/dex/:dexnum', {
		controller:'DexController',
		templateUrl:'views/pokemon.html'
	}).otherwise({
		redirectTo: '/'
	})
}])

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
		$scope.getData($scope.pokemon.sprites[0].resource_uri);
	})

	$scope.getData = function(uri) {
		var url = $scope.root + uri;
		$http.get(url).success(function(data) {
			$scope.uriData = data;
			if($scope.uriData.hasOwnProperty("image")) {
				$scope.pokeSprite = $scope.root + $scope.uriData.image; 
			} 
		})
	}

}])

