angular.module('App')
.controller('collectionCtrl', function($scope, listService) {
  $scope.movies = listService.collections;
  $scope.movieImg = "https://image.tmdb.org/t/p/original";

  $scope.ownList = function(){
    $scope.thisList = "owned"
    $scope.listTitle = 'Owned'
  }
  $scope.ownList();
  $scope.wantList = function(){
    $scope.thisList = "want"
    $scope.listTitle = 'Want'
  }
  $scope.upcomingList = function(){
    $scope.thisList = "upcoming"
    $scope.listTitle = 'Upcoming'
  }
  $scope.removeItem = function(movie,id) {
    listService.removeItemFromList(movie,id);
  }
  console.log($scope.movies.owned);
})
