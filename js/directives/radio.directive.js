angular
.module('radio')
.directive('songPlay', function() {
  return {
    templateUrl: 'js/ng-views/_song_play.html',
    replace: true,
    scope: {
      attr: '='
    }
  }
})
