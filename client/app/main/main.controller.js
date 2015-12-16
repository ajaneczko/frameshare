'use strict';

angular.module('syfApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/projects').success(function(awesomeProjects) {
      $scope.awesomeProjects = awesomeProjects;
      socket.syncUpdates('projects', $scope.awesomeProjects);
    });



    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
