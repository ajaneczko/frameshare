'use strict';

angular.module('syfApp')
  .controller('ProjectCtrl', function ($scope, Project, $stateParams) {
      Project.query({ slug: $stateParams.slug }).$promise.then(function(projects) {
        $scope.project = projects[0];
      });
  });
