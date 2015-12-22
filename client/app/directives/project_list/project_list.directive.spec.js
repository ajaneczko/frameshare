'use strict';

describe('Directive: projectList', function () {

  // load the directive's module and view
  beforeEach(module('syfApp'));
  beforeEach(module('app/directives/project_list/project_list.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-list></project-list>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the projectList directive');
  }));
});