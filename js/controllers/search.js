angular.module('App')
.controller('searchCtrl', function($scope, service, $state) {
  service.searchItem($state.params.param).then(function(keyword) {
      $scope.items = keyword.results;
      $scope.movieImg = "https://image.tmdb.org/t/p/original";
      console.log(keyword);
})
})
