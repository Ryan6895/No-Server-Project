angular.module('App')
.controller('upcomingCtrl', function($scope, service) {
  service.getUpcoming().then(function(movies) {
      $scope.movies = movies;
      console.log($scope.movies);
      $scope.movieImg = "https://image.tmdb.org/t/p/original";
      console.log($scope.moviePoster);
  })
})
