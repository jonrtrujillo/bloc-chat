(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('room', {
             url: '/',
             controller: 'RoomCtrl as room',
             templateUrl: '/templates/home.html'
         })
};
         angular
             .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
             .config(config);
})();
