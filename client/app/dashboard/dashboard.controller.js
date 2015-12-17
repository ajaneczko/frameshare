'use strict';

angular.module('syfApp')
  .controller('DashboardCtrl', function ($scope, $http, socket) {

    $http.get('/api/projects').success(function(awesomeProjects) {
      $scope.awesomeProjects = awesomeProjects;
      console.log($scope.awesomeProjects)
      socket.syncUpdates('project', $scope.awesomeProjects);
    });

  });
