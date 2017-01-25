angular.module('App')
.controller('itemCtrl', function($scope, service , $stateParams) {
service.getOneTitle($stateParams.id).then(function(movie) {
  $scope.movie = movie;
    console.log(movie);
  $scope.movieImg = "https://image.tmdb.org/t/p/original";
  $scope.moviePoster = $scope.movieImg + $scope.movie.poster_path;
  $scope.backdrop={
    'background': 'url('+$scope.movieImg + $scope.movie.backdrop_path+')',
    'background-size': 'cover',
    'background-position': 'center'
  }
$scope.item_year = $scope.movie.release_date.slice(0,4);

$scope.findTime = function(time){
var newTime = parseInt(time)
if (time >= 120){
  var hour = 2
  time -= 120
} else if(time > 60){
  hour = 1
  time -= 60
}
$scope.item_runtime = hour + 'h ' + time + 'm'
return $scope.item_runtime
}
$scope.findTime($scope.movie.runtime)
})
})
