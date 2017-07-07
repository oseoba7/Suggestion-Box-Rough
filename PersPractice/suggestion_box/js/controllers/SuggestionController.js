app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions',
	function($scope, $routeParams, suggestions){
		$scope.post = suggestions.posts[$routeParams.id];
		$scope.addComment = function(){
			//make sure there is a comment
		if (!$scope.comment || $scope.comment === "") {
			return;
		}
		//push comment
		$scope.post.comments.push({
			comment: $scope.comment,
			upvotes: 0,
		});
		//reset entry bar
		$scope.comment = '';
	};
	$scope.upVoteC = function(comment){
		comment.upvotes += 1;
	};
}]);