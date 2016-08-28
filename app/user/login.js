'use strict';

angular.module('expenseTrak.logIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'user/logIn.html',
    controller: 'LogInCtrl'
  });
}])

.controller('LogInCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.logInFormSubmit = function() {
    firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password)
      .then(function() {
        $scope.$apply(function() { $location.path("/addExpense"); });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error: ' + errorCode + ': ' + errorMessage);
        clearForm();
      });
  }

  function loginFailed(){
    $scope.msg = 'Authentication Failed';
    console.log('Login Failed!');
    clearForm();
  }

  function clearForm(){
    $scope.password = '';
    $scope.$apply();
  }

}]);
