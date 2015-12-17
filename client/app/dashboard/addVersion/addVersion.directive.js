'use strict';

angular.module('syfApp')
  .directive('addVersion', function () {
    return {
      templateUrl: 'app/dashboard/addVersion/addVersion.html',
      restrict: 'EA',
      scope: {
        project: '='
      },
      controller: ['$scope','$http', function ($scope, $http) {
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

          console.log($scope.versionName)
          console.log($scope.versionDescription)
          console.log($scope.versionUrl)
          $scope.newVersion = {name: $scope.versionName, description: $scope.versionDescription, url: $scope.versionUrl};
          console.log($scope.newVersion)
          $scope.allLinks.push($scope.newVersion);

          $http.put('/api/projects/' + $scope.project._id, { prototype_version: $scope.allLinks });
          $scope.versionUrl = '';
          $scope.allLinks = '';

        };


      }]
    };
  });
