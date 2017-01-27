angular.module('App')
.controller('searchCtrl', function($scope, service, $state) {
  service.searchItem($state.params.param).then(function(keyword) {
      $scope.items = keyword.results;
      $scope.movieImg = "https://image.tmdb.org/t/p/original";
      console.log(keyword);
})
$scope.addMovie = function(list, movie){
  $scope.hovering = false;
  listService.addItemToList(list, movie)
}

$scope.score = "item_score"
$scope.findRatingColor = function(average){
  var score = parseInt(average)
if (score >= 8.5){
  $scope.score = "item_score_best"
} else if (score >= 7){
  $scope.score = "item_score_better"
} else if (score >= 5){
  $scope.score = "item_score_okay"
} else {
  $scope.score = "item_score_bad"
}
return average
}

})
