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
  $urlRouterProvider.otherwise('/songs')
}
