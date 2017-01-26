angular.module('App')
.controller('homeCtrl', function($scope, service) {

    $scope.tvImg = "https://image.tmdb.org/t/p/original";
  service.getUpcoming().then(function(response) {
    $scope.upcoming = response;
    $scope.movieImg = "https://image.tmdb.org/t/p/original";
    $scope.img1 = $scope.movieImg + $scope.upcoming[1].poster_path;
    $scope.id1 = $scope.upcoming[1].id
    $scope.img2 = $scope.movieImg + $scope.upcoming[0].poster_path;
    $scope.id2 = $scope.upcoming[0].id
    $scope.img3 = $scope.movieImg + $scope.upcoming[3].poster_path;
    $scope.id3 = $scope.upcoming[3].id
    $scope.img4 = $scope.movieImg + $scope.upcoming[8].poster_path;
    $scope.id4 = $scope.upcoming[8].id
})
  service.getArrow().then(function(arrow) {
      $scope.tvArrow = arrow;
      $scope.img5 = $scope.tvImg + $scope.tvArrow.poster_path;
      $scope.id5 = $scope.tvArrow.id
  })
  service.getFlash().then(function(flash) {
      $scope.tvFlash = flash;
      $scope.img6 = $scope.tvImg + $scope.tvFlash.poster_path;
      $scope.id6 = $scope.tvFlash.id
  })
  service.getSuperGirl().then(function(superGirl) {
      $scope.tvSuperGirl = superGirl;
      $scope.img7 = $scope.tvImg + $scope.tvSuperGirl.poster_path;
      $scope.id7 = $scope.tvSuperGirl.id
  })
  service.getAgents().then(function(agents) {
      $scope.tvAgents = agents;
      $scope.img8 = $scope.tvImg + $scope.tvAgents.poster_path;
      $scope.id8 = $scope.tvAgents.id
  })


})
