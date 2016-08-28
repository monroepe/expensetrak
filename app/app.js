'use strict';

angular.module('expenseTrak', [
  'ngRoute',
  'expenseTrak.addExpense',
  'expenseTrak.allExpenses',
  'expenseTrak.signUp',
  'expenseTrak.logIn'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/addExpense'});
}])
.controller('MainCtrl', ['$scope', function($scope) {

  $scope.logout = function() {
    firebase.auth().signOut().then(function() {
    console.log('logged out');
  }, function(error) {
    console.log(error);
  });

  }

}]);
