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
  .controller('SongNewController', [
    'Song',
    '$state',
    SongNewControllerFunction
  ])
  .controller('SongEditController', [
    'Song',
    '$state',
    SongEditControllerFunction
  ])

  function SongIndexControllerFunction(Song) {
    this.songs = Song.query()
  }

  function SongNewControllerFunction(Song, $state) {
    this.song = new Song()
    this.create = function () {
      this.song.$save(() => {
        $state.go('songIndex')
      })
    }
  }

  function SongShowControllerFunction(Song, $state) {
    this.song = Song.get({ id: $state.params.id })
  }

  function SongEditControllerFunction(Song, $state) {
    this.song = Song.get({id: $state.params.id})
    this.update = function () {
      this.song.$update({id: $state.params.id}, (song) => {
        $state.go('songShow', {id: song.id})
      })
    }
    this.destroy = function () {
      this.song.$delete({id: $state.params.id}, (song) => {
        $state.go('songIndex', {id: song.id})
      })
    }
  }
