'use strict';

describe('Service: project', function () {

  // load the service's module
  beforeEach(module('syfApp'));

  // instantiate service
  var Project;
  beforeEach(inject(function (_Project_) {
    Project = _Project_;
  }));

  it('should do something', function () {
    expect(!!Project).toBe(true);
  });

});
