'use strict';

angular.module('syfApp')
  .factory('Project', function ($resource) {
    return $resource('/api/projects/:id/:controller', {
      id: '@_id'
    },
    {
      getProject: {
        method: 'GET',
        isArray: false,
        params: {
          id:'@_id'
        }
      },

      updateProject: {
        method: 'PUT',
        params: {
          id:'@_id'
        }
      }

	  });
  });
