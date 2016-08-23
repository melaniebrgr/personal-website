"use strict";

var P1 = angular.module('portfolio', ['ngRoute']);

P1.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/home/home.html'
    })
    .when('/gctavatar', {
      templateUrl: 'js/gctavatar/gctavatar.html'  	
    })
    .when('/symptomsleuth', {
      templateUrl: 'js/symptomsleuth/symptomsleuth.html'      
    })
    .when('/shoppinglist', {
      templateUrl: 'js/shoppinglist/shoppinglist.html'     
    })
    .when('/cocktailsquiz', {
      templateUrl: 'js/cocktailsquiz/cocktailsquiz.html'   
    })
    .when('/lab3d', {
      templateUrl: 'js/lab3d/lab3d.html'
    });      
});