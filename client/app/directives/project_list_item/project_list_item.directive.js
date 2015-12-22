'use strict';

angular.module('syfApp')
  .directive('projectListItem', function () {
    return {
      templateUrl: 'app/directives/project_list_item/project_list_item.html',
      restrict: 'EA',
      scope: {
        byProject: '=',
      },
      controller: ['$scope', function (scope) {

      }]
    };
  });
