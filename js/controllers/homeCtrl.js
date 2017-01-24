angular.module('App')
.controller('homeCtrl', function($scope, service) {

    $scope.tvImg = "https://image.tmdb.org/t/p/original";
  service.getUpcoming().then(function(response) {
    $scope.upcoming = response;
    $scope.movieImg = "https://image.tmdb.org/t/p/original";
    $scope.img1 = $scope.movieImg + $scope.upcoming[1].poster_path;
    $scope.img2 = $scope.movieImg + $scope.upcoming[0].poster_path;
    $scope.img3 = $scope.movieImg + $scope.upcoming[3].poster_path;
    $scope.img4 = $scope.movieImg + $scope.upcoming[8].poster_path;
})
  service.getArrow().then(function(arrow) {
      $scope.tvArrow = arrow;
      // console.log($scope.upcoming);
      $scope.img5 = $scope.tvImg + $scope.tvArrow.poster_path;

  })
  service.getFlash().then(function(flash) {
      $scope.tvFlash = flash;
      // console.log($scope.upcoming);
      $scope.img6 = $scope.tvImg + $scope.tvFlash.poster_path;

  })
  service.getSuperGirl().then(function(superGirl) {
      $scope.tvSuperGirl = superGirl;
      // console.log($scope.upcoming);
      $scope.img7 = $scope.tvImg + $scope.tvSuperGirl.poster_path;

  })
  service.getAgents().then(function(agents) {
      $scope.tvAgents = agents;
      // console.log($scope.upcoming);
      $scope.img8 = $scope.tvImg + $scope.tvAgents.poster_path;

  })


})
