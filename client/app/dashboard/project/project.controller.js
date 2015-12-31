'use strict';

angular.module('syfApp')
  .controller('ProjectCtrl', function ($scope, Project, $stateParams, $location) {
      $scope.currentPath = 'http://localhost:9000' + $location.path();
      Project.query({ slug: $stateParams.slug }).$promise.then(function(projects) {
        $scope.project = projects[0];
      });
  });
