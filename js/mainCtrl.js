angular.module('spotifyApp')
.controller('spotifyController', function($scope, spotifyService) {

$scope.getData = function(artist) {
  spotifyService.getMusic(artist).then(function(info) {
    $scope.musicInfo = info;
    console.log(info);
  })
}

})
