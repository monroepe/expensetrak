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
  getCurrentMonthExpenses();
  setTimeout(function() {
    $scope.$apply(function() {
     $scope.ready = true;
    });
  }, 1000);

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
      var total = 0;
      $scope.categories.forEach(function(category) {
        if(expenses[category]) {
          amount = expenses[category].amount;
          total += amount;
        } else {
          amount = 0;
        }
        monthExpenses.push({ category: category, amount: amount})
      });
      monthExpenses.push({ category: 'Total', amount: total})
      $scope.expenses = monthExpenses;
    });
  }
}]);
