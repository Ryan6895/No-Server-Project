angular.module('App')
.controller('Controller', function($scope, service, $state) {
    $scope.search = function(param){
        $state.go('search', {param: param});
    }
})
