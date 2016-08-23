'use strict';

angular.module('expenseTrak.allExpenses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/allExpenses', {
    templateUrl: 'all-expenses/allExpenses.html',
    controller: 'AllExpensesCtrl'
  });
}])

.controller('AllExpensesCtrl', [function() {

}]);
