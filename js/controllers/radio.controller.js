angular
  .module('radio')
  .controller('SongIndexController', [
    'Song',
    SongIndexControllerFunction
  ])
  .controller('SongShowController', [
    'Song',
    '$state',
    SongShowControllerFunction
  ])

  function SongIndexControllerFunction(Song) {
    this.songs = Song.query()
  }

  function SongShowControllerFunction(Song, $state) {
    this.song = Song.get({ id: $state.params.id })
  }
