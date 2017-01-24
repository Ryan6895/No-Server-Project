angular.module('App')
.controller('upcomingCtrl', function($scope, service) {
  service.getUpcoming().then(function(movies) {
      $scope.movies = movies;
      // console.log($scope.upcoming);

  })
})
