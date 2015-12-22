'use strict';

angular.module('syfApp')
  .controller('DashboardCtrl', function ($scope, $http, socket, Auth, $stateParams, Project) {

     $scope.currentUser = Auth.getCurrentUser().name
     $scope.personalProjects = []

     Project.query({ slug: $stateParams.slug }).$promise.then(function(projects) {

       angular.forEach(projects, function(value, key) {
         if (value.author) {
           if (value.author._id === Auth.getCurrentUser()._id) {
             $scope.personalProjects.push(value)

           } else {

           }
         } else {
           return
         }

       });

     });

    $http.get('/api/projects').success(function(awesomeProjects) {
      $scope.awesomeProjects = awesomeProjects;
      $scope.isLoggedIn = Auth.isLoggedIn;
      console.log($scope.awesomeProjects)
      socket.syncUpdates('project', $scope.awesomeProjects);
    });

  });
