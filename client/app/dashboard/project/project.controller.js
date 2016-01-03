'use strict';

angular.module('syfApp')
  .controller('ProjectCtrl', function ($window, $scope, Project, $q, $stateParams, $location) {
      var requestFinished = $q.defer();

      $scope.currentPath = 'http://localhost:9000' + $location.path();
      $scope.projectId = ''
      $scope.project = ''
      $scope.newTitle = ''

      Project.query({ slug: $stateParams.slug }).$promise.then(function(projects) {
        $scope.project = projects[0];
        requestFinished.resolve();
      });

      requestFinished.promise.then(function() {
        $scope.projectId = $scope.project._id;
      });

      $scope.showZdupis = function(nazwa) {
        console.log(nazwa)
      }



      $scope.isEdit = false
      $scope.showEditInput = false

      $scope.toggleEdit = function() {
        $scope.isEdit = $scope.isEdit === false ? true: false;
      };

      $scope.startEditing = function () {
        console.log($scope.projectId)
        $scope.showEditInput = $scope.showEditInput === false ? true: false;
      }

      $scope.updateTitle = function (title) {
        Project.updateProject({id: $scope.projectId}, {name: title}, {slug: title})
        $location.path('/dashboard/project/' + title.toLowerCase())
      }
  });
