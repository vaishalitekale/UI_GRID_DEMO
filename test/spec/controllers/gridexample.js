'use strict';

describe('Controller: GridexampleCtrl', function () {

  // load the controller's module
  beforeEach(module('pmsApp'));

  var GridexampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GridexampleCtrl = $controller('GridexampleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GridexampleCtrl.awesomeThings.length).toBe(3);
  });
});
