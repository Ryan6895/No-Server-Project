angular.module('myApp')
.controller('itemCtrl', function($scope, service , $stateParams) {

service.getOneTitle($stateParams.id).then(function(movie) {
  $scope.movie = movie;
})
})
