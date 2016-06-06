'use strict';

angular
  .module('taskListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/taskList');
  });
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/taskList', {
  //       templateUrl: 'views/taskList-template.html',
  //       controller: 'taskListController'
  //     })
  //     .otherwise({
  //       redirectTo: '/taskList'
  //     });
  // });
