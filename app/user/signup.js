'use strict';

angular.module('expenseTrak.signUp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'user/signUp.html',
    controller: 'SignUpCtrl'
  });
}])

.controller('SignUpCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.signUpFormSubmit = function(){
    firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
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

  function checkPassword(password){
    if (password.length < 7){
      return false;
    }
  }

  function clearForm(){
    $scope.password = '';
  }

}]);
