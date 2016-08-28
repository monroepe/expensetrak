'use strict';

angular.module('expenseTrak.logIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'user/logIn.html',
    controller: 'LogInCtrl'
  });
}])

.controller('LogInCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.logInFormSubmit = function(){
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
