'use strict';

describe('Directive: projectListItem', function () {

  // load the directive's module and view
  beforeEach(module('syfApp'));
  beforeEach(module('app/directives/project_list_item/project_list_item.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-list-item></project-list-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the projectListItem directive');
  }));
});