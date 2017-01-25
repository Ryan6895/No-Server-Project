angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeCtrl',
    templateUrl: 'js/views/home.html'
  })
  .state('collection', {
    url: '/collection',
    controller: 'collectionCtrl',
    templateUrl: 'js/views/collection.html'
  })
  .state('upcoming', {
    url: '/upcoming',
    controller: 'upcomingCtrl',
    templateUrl: 'js/views/upcoming.html'
  })
  .state('nowPlaying', {
    url: '/nowPlaying',
    controller: 'nowPlayingCtrl',
    templateUrl: 'js/views/nowPlaying.html'
  })
  .state('item', {
      url: '/item/:id',
      controller: 'itemCtrl',
      templateUrl: 'js/views/item.html'
    })
    .state('search', {
        url: '/search/:param',
        controller: 'search',
        templateUrl: 'js/views/search.html'
      })
});
