'use strict';

angular.module('syfApp')
  .directive('projectList', function () {
    return {
      templateUrl: 'app/directives/project_list/project_list.html',
      restrict: 'AE',
      scope: {
        projects: '=',
      },
      controller: ['$scope', '$http','Project','$stateParams','Auth', function ($scope, $http, Project, $stateParams) {

        $scope.projects = []

        Project.query({ slug: $stateParams.slug }).$promise.then(function(projects) {
          $scope.projects = projects;
        });

      }]
    };
  });
