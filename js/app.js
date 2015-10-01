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
		$scope.allpokemon = $scope.totaldex.pokemon;
		$scope.getData($scope.allpokemon.resource_uri);
		//get data function outside contoller but outside both and it doesnt work
	})

}])
.controller('DexController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$scope.dexnum = $routeParams.dexnum;
	$scope.root = "http://pokeapi.co";
	var url = "http://pokeapi.co/api/v1/pokemon/" + $scope.dexnum + "/";
		$http.get(url).success(function(data) {
		$scope.pokemon = data;
		$scope.getData($scope.pokemon.sprites[0].resource_uri);
		console.log($scope.pokemon.egg_groups)
	})

	$scope.getData = function(uri) {
		var url = $scope.root + uri;
		$http.get(url).success(function(data) {
			$scope.uriData = data;
			console.log($scope.uriData);
			if($scope.uriData.hasOwnProperty("image")) {
				$scope.pokeSprite = $scope.root + $scope.uriData.image; 
			} 
		})
	}

}])

