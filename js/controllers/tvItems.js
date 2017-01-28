angular.module('App')
.controller('tvItem', function($scope, service , $stateParams, listService) {
service.getOneTv($stateParams.id).then(function(television) {
  $scope.movie = television;
    console.log($scope.movie);
  $scope.movieImg = "https://image.tmdb.org/t/p/original";
  $scope.moviePoster = $scope.movieImg + $scope.movie.poster_path;
  $scope.backdrop={
    'background': 'url('+$scope.movieImg + $scope.movie.backdrop_path+')',
    'background-size': 'cover',
    'background-position': 'center'
  }
$scope.item_year = $scope.movie.first_air_date.split("").slice(0,4).join("");

$scope.findRatingColor()
})
$scope.addMovie = function(list, movie){
  $scope.hovering = false;
  listService.addItemToList(list, movie)
}

$scope.score = "item_score"
$scope.findRatingColor = function(){
  var score = parseInt($scope.movie.vote_average)
if (score >= 8){
  $scope.score = "item_score_best"
} else if (score >= 7){
  $scope.score = "item_score_better"
} else if (score >= 5){
  $scope.score = "item_score_okay"
} else {
  $scope.score = "item_score_bad"
}
}
})
