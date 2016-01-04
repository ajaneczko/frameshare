'use strict';

angular.module('syfApp')
  .controller('ProjectCtrl', function ($window, $scope, Auth, Project, $q, $stateParams, $location) {
      var requestFinished = $q.defer();

      $scope.currentPath = 'http://localhost:9000' + $location.path();
      $scope.projectId = ''
      $scope.project = ''
      $scope.newTitle = ''
      $scope.projectAuthor = ''
      $scope.isUserAuthor = false

      Project.query({ slug: $stateParams.slug }).$promise.then(function(projects) {
        $scope.project = projects[0];
        requestFinished.resolve();
      });

      requestFinished.promise.then(function() {
        $scope.projectId = $scope.project._id;
        $scope.projectAuthor = $scope.project.author

        $scope.checkIfAuthor = function() {
          if ($scope.project.author != null) {
            return $scope.projectAuthor._id === Auth.getCurrentUser()._id

          }
          else
            console.log("This project has no author")
        }
        $scope.isUserAuthor = $scope.checkIfAuthor()
      });

      $scope.isEdit = false
      $scope.showEditInput = false

      $scope.startEditing = function () {
        if ($scope.isUserAuthor === true && $scope.projectAuthor != null) {
          console.log($scope.projectId)
          $scope.showEditInput = $scope.showEditInput === false ? true: false;
        }
        else
          return
      }

      $scope.updateTitle = function (title) {
        Project.updateProject({id: $scope.projectId}, {name: title}, {slug: title})
        $location.path('/dashboard/project/' + title.toLowerCase())
      }
  });
