'use strict';

/**
 * @ngdoc overview
 * @name pmsApp
 * @description
 * # pmsApp
 *
 * Main module of the application.
 */
angular
  .module('pmsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
	  'ngGrid',
    'ui.router'
  ])
   .config(['$stateProvider','$urlRouterProvider',
   function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
	  .state('party', {
        url: '/party',
        template: '<h1>This Is A State</h1>'
    })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
       })
	  .state('gridexample', {
        url: '/gridexample',
        templateUrl: 'views/grid_example.html',
        controller: 'GridexampleCtrl'
      });
  }])