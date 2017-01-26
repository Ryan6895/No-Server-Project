angular.module('App')
.service('service', function($http , $q){
var apiKey = '9781b99a2fd6b6f93bcb711cb9ae3e68&'
this.searchItem = function(title) {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + 'language=en-US&query=' + title + '&page=1&include_adult=false'
  }).then(function(response) {
    var response = response.data
  deferred.resolve(response)
  })
  return deferred.promise
}
this.getUpcoming = function() {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + 'language=en-US&page=1'
  }).then(function(response) {
var upComing = response.data.results
  deferred.resolve(upComing)
  })
  return deferred.promise
}
this.getArrow = function() {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/1412?api_key=' + apiKey + '&language=en-US'
  }).then(function(response) {
    var Arrow = response.data
  deferred.resolve(Arrow)
  })
  return deferred.promise
}
this.getFlash = function() {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/60735?api_key=' + apiKey + '&language=en-US'
  }).then(function(response) {
    var flash = response.data
  deferred.resolve(flash)
  })
  return deferred.promise
}
this.getSuperGirl = function() {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/62688?api_key=' + apiKey + '&language=en-US'
  }).then(function(response) {
    var superGirl = response.data
  deferred.resolve(superGirl)
  })
  return deferred.promise
}
this.getAgents = function() {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/1403?api_key=' + apiKey + '&language=en-US'
  }).then(function(response) {
    var agents = response.data
  deferred.resolve(agents)
  })
  return deferred.promise
}
this.getNowPlaying = function() {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + 'language=en-US&page=1'
  }).then(function(response) {
var nowPlaying = response.data.results
  deferred.resolve(nowPlaying)
  })
  return deferred.promise
}

this.getOneTitle = function(id) {
    return $http.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=' + apiKey + '&language=en-US')
    .then(function(info) {
      return info.data;
    })
  }

});
