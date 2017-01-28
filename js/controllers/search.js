angular.module('App')
.controller('searchCtrl', function($scope, service, $state, listService) {
  service.searchItem($state.params.param).then(function(keyword) {
      $scope.items = keyword.results;
      $scope.movieImg = "https://image.tmdb.org/t/p/original";
      $scope.sortProp = '-title';
      $scope.itemsArr = [
      {
        name:'Title',
        Value: '-title'
      },
      {
        name:'Release Date',
        Value: '-release_date'
      },
      {
        name:'Score',
        Value: '-vote_average'
      }
      ];
})
$scope.addMovie = function(list, movie){
  $scope.hovering = false;
  listService.addItemToList(list, movie)
}

$scope.score = "item_score"
$scope.findRatingColor = function(average){
  var score = parseInt(average)
if (score >= 8){
  return "item_score_best"
} else if (score >= 7){
  return "item_score_better"
} else if (score >= 5){
  return "item_score_okay"
} else if (score < 5){
  return "item_score_bad"
}
}

})
