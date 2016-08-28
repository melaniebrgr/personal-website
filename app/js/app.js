"use strict";

var P1 = angular.module('portfolio', ['ngRoute']);

P1.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'views/home/home.html'})
    // Front-End Web Development
    .when('/gctavatar', {templateUrl: 'views/frontendwebdevelopment/gctavatar/gctavatar.html'})
    .when('/symptomsleuth', {templateUrl: 'views/frontendwebdevelopment/symptomsleuth/symptomsleuth.html'})
    .when('/shoppinglist', {templateUrl: 'views/frontendwebdevelopment/shoppinglist/shoppinglist.html'})
    .when('/cocktailsquiz', {templateUrl: 'views/frontendwebdevelopment/cocktailsquiz/cocktailsquiz.html'})
    .when('/lab3d', {templateUrl: 'views/frontendwebdevelopment/lab3d/lab3d.html'})
    // Design & Visual Communication
    .when('/apliaredesign', {templateUrl: 'views/designandvisualcommmunication/apliaredesign/apliaredesign.html'})
    .when('/cerebralbloodflow', {templateUrl: 'views/designandvisualcommmunication/cerebralbloodflow/cerebralbloodflow.html'})
    .when('/externalvisualfield', {templateUrl: 'views/designandvisualcommmunication/externalvisualfield/externalvisualfield.html'})
    .when('/naturecover', {templateUrl: 'views/designandvisualcommmunication/naturecover/naturecover.html'})
    // Other
    .when('/writingandspeaking', {templateUrl: 'views/writingandspeaking/writingandspeaking.html'})
    .when('/readingnotes', {templateUrl: 'views/readingnotes/readingnotes.html'})
    .when('/experiments', {templateUrl: 'views/experiments/experiments.html'})
    .otherwise({redirectTo: '/'});
});