angular.module('App')
.controller('collectionCtrl', function($scope,service, listService) {
  $scope.movies = listService.collections;
  $scope.movieImg = "https://image.tmdb.org/t/p/original";

  $scope.ownList = function(){
    $scope.active1 = 'mycollectionActive'
    $scope.active2 = ''
    $scope.active3 = ''
    $scope.thisList = "owned"
    $scope.listTitle = 'Owned'
    $scope.moveItem1 = 'moveItemActive'
    $scope.moveItem2 = ''
    $scope.smaller = 'collection_ListHeight'
  }
  $scope.ownList();
  $scope.wantList = function(){
    $scope.active2 = 'mycollectionActive'
    $scope.active1 = ''
    $scope.active3 = ''
    $scope.thisList = "want"
    $scope.listTitle = 'Want'
    $scope.moveItem1 = ''
    $scope.moveItem2 = 'moveItemActive'
    $scope.smaller = 'collection_ListHeight'
  }
  $scope.upcomingList = function(){
    $scope.active3 = 'mycollectionActive'
    $scope.active2 = ''
    $scope.active1 = ''
    $scope.thisList = "upcoming"
    $scope.listTitle = 'Upcoming'
    $scope.moveItem1 = ''
    $scope.moveItem2 = ''
    $scope.smaller = ''
  }
  $scope.removeItem = function(movie,id) {
    listService.removeItemFromList(movie,id);
  }
  $scope.moveMovie = function(list, movie){
    $scope.hovering = false;
    listService.addItemToList(list, movie)
  }

})
