'use strict';

angular.module('syfApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, $location) {
    $scope.awesomeThings = [];

    $http.get('/api/projects').success(function(awesomeProjects) {
      $scope.awesomeProjects = awesomeProjects;
      socket.syncUpdates('projects', $scope.awesomeProjects);
    });

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
