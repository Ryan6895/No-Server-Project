angular.module('App')
.controller('searchCtrl', function($scope, service, $state) {
  service.searchItem($state.params.param).then(function(keyword) {
      $scope.item = keyword;
})
})
