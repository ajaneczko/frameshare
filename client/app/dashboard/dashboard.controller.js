'use strict';

angular.module('syfApp')
  .controller('DashboardCtrl', function ($scope, $http, socket, Auth) {

    $http.get('/api/projects').success(function(awesomeProjects) {
      $scope.awesomeProjects = awesomeProjects;
      $scope.isLoggedIn = Auth.isLoggedIn;
      console.log($scope.awesomeProjects)
      socket.syncUpdates('project', $scope.awesomeProjects);
    });

  });
