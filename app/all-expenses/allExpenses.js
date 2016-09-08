'use strict';

angular.module('expenseTrak.allExpenses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/allExpenses', {
    templateUrl: 'all-expenses/allExpenses.html',
    controller: 'AllExpensesCtrl'
  });
}])

.controller('AllExpensesCtrl', ['$scope', function($scope) {
  $scope.ready = false;
  $scope.categories = [
        'Groceries',
        'Recreation',
        'Target-Walmart-IKEA',
        'Amazon',
        'Rent',
        'Gas',
        'Electric',
        'Phone',
        'Internet',
        'Netflix',
        'Tithing',
        'Medical',
        'Transit',
        'Lunch - Peter',
        'Other/Misc'
    ];
  $scope.expenses = getCurrentMonthExpenses();

  function getCurrentMonthExpenses() {
    var userId = firebase.auth().currentUser.uid;
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var monthExpenses = [];
    var expenses = {};

    firebase.database().ref('expenses/' + userId + '/' + year + '/' + month).once('value').then(function(snapshot) {
      if(snapshot.val()) {
        expenses = snapshot.val();
      }
      var amount;
      $scope.categories.forEach(function(category) {
        if(expenses[category]) {
          amount = expenses[category].amount;
        } else {
          amount = 0;
        }
        monthExpenses.push({ category: category, amount: amount})
      });
      $scope.ready = true;
      return monthExpenses;
    });
  }
}]);
