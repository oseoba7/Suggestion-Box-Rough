var app = angular.module('SuggestionBox', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/suggestion/:id', {
	  	controller: "SuggestionController",
	  	templateUrl: 'views/suggestion.html'
	  })
	  .when('/', {
	  	controller: "HomeController",
	  	templateUrl: 'views/home.html'
	  })
	  .otherwise({
	  	redirectTo: '/'
	  });
});