'use strict';

angular.module('syfApp')
  .controller('ProjectCtrl', function ($scope, Project, $stateParams) {
      Project.get({ id: $stateParams.id }).$promise.then(function(project) {
        $scope.project = project;
      });
  });
