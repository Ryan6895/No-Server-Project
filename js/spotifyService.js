angular.module('spotifyApp')
.service('spotifyService', function($http, $q){

this.getMusic = function(artist) {
  var deferred = $q.defer();
  $http({
    method: 'JSONP',
    url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  }).then(function(response) {
    var songs = response.data.results
    var arr = [];
    for (var i = 0; i < songs.length; i++) {
      arr.push({
        Title: songs[i].trackName,
        Artist: songs[i].artistName,
        Collection: songs[i].collectionName,
        Genre: songs[i].primaryGenreName
      })
    }
    deferred.resolve(arr);
  })
  return deferred.promise
}


});
