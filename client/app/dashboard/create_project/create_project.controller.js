'use strict';

angular.module('syfApp')
  .controller('CreateProjectCtrl', function ($scope, $http) {

    $scope.projectName = ''
    $scope.projectDescription = ''

    $scope.addProject = function() {
      if($scope.projectName === '') {
      return;
      }

      $http.post('/api/projects', { name: $scope.projectName, description: $scope.projectDescription });
      $scope.projectName = '';
    };

  });
