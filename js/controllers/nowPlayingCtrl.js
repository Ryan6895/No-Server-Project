angular.module('App')
.controller('nowPlayingCtrl', function($scope, service) {
  service.getNowPlaying().then(function(movies) {
      $scope.movies = movies;
      $scope.movieImg = "https://image.tmdb.org/t/p/original";
})
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
