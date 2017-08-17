angular
.module('radio', [
  'ui.router',
  'ngResource'
])
.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'https://open.spotify.com/embed/track/**']);
 })
