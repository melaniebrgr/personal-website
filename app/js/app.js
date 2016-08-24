"use strict";

var P1 = angular.module('portfolio', ['ngRoute']);

P1.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'views/home/home.html'})
    .when('/gctavatar', {templateUrl: 'views/gctavatar/gctavatar.html'})
    .when('/symptomsleuth', {templateUrl: 'views/symptomsleuth/symptomsleuth.html'})
    .when('/shoppinglist', {templateUrl: 'views/shoppinglist/shoppinglist.html'})
    .when('/cocktailsquiz', {templateUrl: 'views/cocktailsquiz/cocktailsquiz.html'})
    .when('/lab3d', {templateUrl: 'views/lab3d/lab3d.html'})
    .when('/apliaredesign', {templateUrl: 'views/apliaredesign/apliaredesign.html'});  
});