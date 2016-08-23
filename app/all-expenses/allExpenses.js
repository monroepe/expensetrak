'use strict';

angular.module('expenseTrak.allExpenses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/allExpenses', {
    templateUrl: 'allExpenses/allExpenses.html',
    controller: 'AllExpensesCtrl'
  });
}])

.controller('AllExpensesCtrl', [function() {

}]);
