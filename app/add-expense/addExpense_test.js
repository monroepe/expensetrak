'use strict';

describe('expenseTrak.addExpense module', function() {

  beforeEach(module('expenseTrak.addExpense'));

  describe('addExpense controller', function(){
    var scope, addExpenseCtrl;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        addExpenseCtrl = $controller('AddExpenseCtrl', {$scope: scope});
    }));

    it('should be defined', inject(function($rootScope, $controller) {
      expect(addExpenseCtrl).toBeDefined();
    }));

  });
});
