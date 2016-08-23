'use strict';

// Declare app level module which depends on views, and components
angular.module('expenseTrak', [
  'ngRoute',
  'expenseTrak.addExpense',
  'expenseTrak.allExpenses',
  // 'user.signUp',
  // 'user.logIn'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/addExpense'});
}]);
