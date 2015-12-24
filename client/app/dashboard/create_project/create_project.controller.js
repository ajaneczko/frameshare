'use strict';

angular.module('syfApp')
  .controller('CreateProjectCtrl', function ($scope, $state, Project, $rootScope) {

    $scope.projectURL = $rootScope.projectStartUrl;
    $scope.projectName = ''
    $scope.projectDescription = ''
    $scope.isProjectPublic = true;

    $scope.onSwitch = function (isProjectPublic) {
      $scope.isProjectPublic != $scope.isProjectPublic;
    }

    $scope.addProject = function() {
      if($scope.projectName === '') {
      return;
      }

      Project
          .save({ name: $scope.projectName, description: $scope.projectDescription, isPublic: $scope.isProjectPublic  })
          .$promise
          .then(function () {
            $state.go('dashboard')
          })
      $scope.projectName = '';

    };

  });
