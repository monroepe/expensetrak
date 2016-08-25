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
        { id: 2, name: 'Recreation' },
        { id: 3, name: 'Target/Walmart/IKEA' },
        { id: 4, name: 'Amazon' },
        { id: 5, name: 'Rent' },
        { id: 6, name: 'Gas' },
        { id: 7, name: 'Electric' },
        { id: 8, name: 'Phone' },
        { id: 9, name: 'Internet' },
        { id: 10, name: 'Netflix' },
        { id: 11, name: 'Tithing' },
        { id: 12, name: 'Medical' },
        { id: 13, name: 'Transit' },
        { id: 14, name: 'Lunch - Peter' },
        { id: 15, name: 'Other/Misc' }
    ];

    $scope.selectedCategory = null;


  $scope.addFormSubmit = function() {

    $scope.msg = "Item Added";
  }

}]);
