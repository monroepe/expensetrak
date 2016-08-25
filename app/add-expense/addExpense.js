'use strict';

angular.module('expenseTrak.addExpense', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addExpense', {
    templateUrl: 'add-expense/addExpense.html',
    controller: 'AddExpenseCtrl'
  });
}])
.controller('AddExpenseCtrl', ['$scope', function($scope) {
  $scope.categories = [
        { id: 1, name: 'Groceries' },
        { id: 2, name: 'Recreation' }
    ];

    $scope.selectedCategory = null;


  $scope.addFormSubmit = function() {
    $scope.msg = "Item Added";
  }

}]);
