angular
  .module('radio')
  .config([
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    Router
  ])

function Router ($stateProvider, $locationProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true)
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/ng-views/home.html'
    })
    .state('songIndex', {
      url: '/songs',
      controller: 'SongIndexController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/index.html'
    })
    .state('songShow', {
      url: '/songs/:id',
      controller: 'SongShowController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/show.html'
    })
    .state('songNew', {
      url: '/songs/new',
      controller: 'SongNewController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/new.html'
    })
    .state('songEdit', {
      url: '/songs/:id/edit',
      templateUrl: 'js/ng-views/edit.html',
      controller: 'SongEditController',
      controllerAs: 'vm'
    })
  $urlRouterProvider.otherwise('/')
}
