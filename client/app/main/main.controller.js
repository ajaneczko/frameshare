'use strict';

angular.module('syfApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, $location) {
    $scope.projects = ''

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
