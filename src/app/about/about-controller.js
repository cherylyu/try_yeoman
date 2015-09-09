'use strict';
/**
 * @ngdoc function
 * @name helloYeo.controller:aboutCtrl
 * @description
 * # aboutCtrl
 * Controller of the helloYeo
 */
angular.module('helloYeo')
  .controller('aboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
