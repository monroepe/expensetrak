'use strict';

angular.module('expenseTrak.addExpense', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  var requireAuthentication = function () {
    return {
      load: function ($q, $location) {
        var deferred = $q.defer();
        deferred.resolve();
        if (firebase.auth().currentUser !== null) {
            return deferred.promise;
        } else {
            $location.path('/login');
        }
      }
    };
  };

  $routeProvider
    .when('/addExpense', {
      templateUrl: 'add-expense/addExpense.html',
      controller: 'AddExpenseCtrl',
      resolve: requireAuthentication()
    })
}])

.controller('AddExpenseCtrl', ['$scope', function($scope) {
  $scope.categories = [
        { id: 1, name: 'Groceries' },
        { id: 2, name: 'Recreation' },
        { id: 3, name: 'Target-Walmart-IKEA' },
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
  $scope.msg = null;

  $scope.addExpense = function() {
    var userId = firebase.auth().currentUser.uid;
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var amount = $scope.amount;
    var category = $scope.selectedCategory;

    firebase.database().ref('expenses/' + userId + '/' + year + '/' + month + '/' + category).once('value').then(function(snapshot) {
      if(snapshot.val()) {
        amount += snapshot.val().amount;
      }
      var postData = {
        amount: amount
      };
      firebase.database().ref('expenses/' + userId + '/' + year + '/' + month + '/' + category).set(postData);
    });

    $scope.msg = 'Item Added';
    clearFields();
  }

  function clearFields(){
    $scope.amount = '';
    $scope.selectedCategory = '';
  }

}]);
