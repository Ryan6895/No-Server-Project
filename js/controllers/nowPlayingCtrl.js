angular.module('App')
.controller('nowPlayingCtrl', function($scope, service) {
  service.getNowPlaying().then(function(movies) {
      $scope.nowmovies = movies;
})
})
