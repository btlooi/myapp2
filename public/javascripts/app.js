'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log($routeProvider);
    $routeProvider.
      when('/', {
        templateUrl: '/partials/index',
        controller: IndexCtrl,
      }).
      when('/whoisonline', {
        templateUrl: '/partials/whoisonline',
        controller: WhoIsOnlineCtrl,
      }).
      when('/blog', {
        templateUrl: '/partials/index',
        controller: IndexCtrl,
      }).
      when('/addPost', {
        templateUrl: '/partials/addPost',
        controller: AddPostCtrl,
      }).
      when('/contact', {
        templateUrl: '/partials/addvideo',
        controller: AddVideoCtrl,
      }).
      when('/readPost/:id', {
        templateUrl: '/partials/readPost',
        controller: ReadPostCtrl,
      }).
      when('/editPost/:id', {
        templateUrl: '/partials/editPost',
        controller: EditPostCtrl,
      }).
      when('/deletePost/:id', {
        templateUrl: '/partials/deletePost',
        controller: DeletePostCtrl,
      });

      //otherwise({
      //  redirectTo: '/'
      //});
      $locationProvider.html5Mode(true);
  }]);

