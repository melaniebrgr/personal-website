"use strict";

var P1 = angular.module('portfolio', ['ngRoute']);

P1.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'js/home/home.html',
      controller  : 'homeCtrl',
    })
    .when('/gctavatar', {
      templateUrl : 'js/gctavatar/gctavatar.html',
      controller  : 'gctavatarCtrl',    	
    });
});

P1.controller('homeCtrl', function($scope) {
	$scope.version = 1;
});

P1.controller('gctavatarCtrl', function($scope) {
	$scope.version = 2;
});