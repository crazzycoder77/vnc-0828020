'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/room/:roomId', {
      templateUrl: 'views/room.html',
      controller: 'RoomCtrl'
    })
    .when('/room', {
      templateUrl: 'views/room.html',
      controller: 'RoomCtrl'
    })
    .otherwise({
      redirectTo: '/room'
    });
  });

  angular.module('publicApp')
  .constant('config', {
      // Change it for your app URL
      SIGNALIG_SERVER_URL: 'http://localhost:3000/'
  });