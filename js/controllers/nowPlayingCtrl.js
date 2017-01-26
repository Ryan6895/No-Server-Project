angular.module('App')
.controller('nowPlayingCtrl', function($scope, service) {
  service.getNowPlaying().then(function(movies) {
      $scope.movies = movies;
      $scope.movieImg = "https://image.tmdb.org/t/p/original";
})
})
