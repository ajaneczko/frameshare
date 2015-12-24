'use strict';

angular.module('syfApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, $location, $rootScope) {
    $scope.projects = ''
    $scope.projectUrl = ''

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.passUrl = function () {
      $rootScope.projectStartUrl = $scope.projectUrl
    }
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
