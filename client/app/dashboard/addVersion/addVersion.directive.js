'use strict';

angular.module('syfApp')
  .directive('addVersion', function () {
    return {
      templateUrl: 'app/dashboard/addVersion/addVersion.html',
      restrict: 'EA',
      scope: {
        project: '='
      },
      controller: ['$scope','$http', 'Project', function ($scope, $http, Project) {
        $scope.custom = false;
          $scope.toggleCustom = function() {
          $scope.custom = $scope.custom === false ? true: false;
        };

        $scope.versionName = ''
        $scope.versionDescription = ''
        $scope.versionUrl = ''

        $scope.addVersion = function() {
          $scope.allLinks = $scope.project.prototype_version

          if( $scope.versionName === '') {
            return;
          }

          $scope.newVersion = {name: $scope.versionName, description: $scope.versionDescription, url: $scope.versionUrl};
          $scope.allLinks.push($scope.newVersion);

          Project.updateProject({ id: $scope.project._id }, { prototype_version: $scope.allLinks })
              .$promise
              .then(function () {
                $scope.versionUrl = '';
                $scope.allLinks = '';
              })
        };


      }]
    };
  });
