'use strict';

describe('Directive: addVersion', function () {

  // load the directive's module and view
  beforeEach(module('syfApp'));
  beforeEach(module('app/dashboard/addVersion/addVersion.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-version></add-version>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toContain('New version');
  }));
});
