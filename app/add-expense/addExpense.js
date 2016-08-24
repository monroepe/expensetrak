'use strict';

angular.module('expenseTrak.addExpense', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addExpense', {
    templateUrl: 'add-expense/addExpense.html',
    controller: 'AddExpenseCtrl'
  });
}])

.controller('AddExpenseCtrl', [function() {

}]);