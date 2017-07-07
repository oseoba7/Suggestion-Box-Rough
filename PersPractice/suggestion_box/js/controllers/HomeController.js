app.controller('HomeController', ['$scope', 'suggestions',
 function($scope, suggestions){
	$scope.helloWorld = "Hello, Welcome to the Suggestion Box!";
	$scope.posts = suggestions.posts;
	$scope.addSuggestion = function(){
		//if input is empty
		if (!$scope.title || $scope.title === "") {
			return;
		}
		//push suggestion
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: []
		});
		//reset entry bar
		$scope.title = '';
	};
	$scope.upVote = function(post){
		post.upvotes += 1;
	}

}]);