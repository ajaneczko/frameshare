'use strict';

angular.module('syfApp')
  .controller('CreateProjectCtrl', function ($scope, $state, Project) {

    $scope.projectName = ''
    $scope.projectDescription = ''

    $scope.addProject = function() {
      if($scope.projectName === '') {
      return;
      }

      Project
          .save({ name: $scope.projectName, description: $scope.projectDescription })
          .$promise
          .then(function () {
            $state.go('dashboard')
          })
      $scope.projectName = '';
    };

  });
