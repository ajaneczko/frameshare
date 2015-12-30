'use strict';

angular.module('syfApp')
  .controller('CreateProjectCtrl', function ($scope, $state, Project, $rootScope) {

    $scope.projectURL = $rootScope.projectStartUrl;
    $scope.projectName = ''
    $scope.projectDescription = ''
    $scope.isProjectPublic = true;
    $scope.versionName = 'First version of prototype'
     $scope.allLinks = []
    $scope.onSwitch = function (isProjectPublic) {
      $scope.isProjectPublic != $scope.isProjectPublic;
    }

    $scope.addProject = function() {
      if($scope.projectName === '') {
        return;
      }

      if( $scope.projectURL === '') {
        return;
      }

      $scope.newVersion = {name: 'First version of prototype', url: $scope.projectURL, description: ''};
      $scope.allLinks.push($scope.newVersion)
      
      Project
          .save({ name: $scope.projectName, description: $scope.projectDescription, isPublic: $scope.isProjectPublic, prototype_version: $scope.allLinks})
          .$promise
          .then(function () {
            $state.go('dashboard')
            console.log($scope.newVersion)
          })
      $scope.projectName = '';

    };

  });
