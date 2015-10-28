'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp', ['ui.router'])
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
