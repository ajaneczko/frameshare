'use strict';

angular.module('syfApp')
  .directive('projectList', function () {
    return {
      templateUrl: 'app/directives/project_list/project_list.html',
      restrict: 'AE',
      scope: {
        projects: '=',
      },
      controller: ['$scope', '$http', function ($scope, $http) {


        $http.get('/api/projects').success(function(awesomeProjects) {
          $scope.projects = awesomeProjects;
        });


      }]
    };
  });
