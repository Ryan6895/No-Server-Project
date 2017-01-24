angular.module('App')
.controller('searchCtrl', function($scope, service) {
  service.getNowPlaying().then(function(movies) {
      $scope.nowmovies = movies;
})
})
