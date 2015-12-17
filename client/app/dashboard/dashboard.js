'use strict';

angular.module('syfApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        authenticate: true
      })
      .state('dashboard-new-project', {
        url: '/dashboard/new-project',
        templateUrl: 'app/dashboard/create_project/create_project.html',
        controller: 'CreateProjectCtrl',
        authenticate: true
      })
      .state('dashboard.project', {
        url: '/project/:id',
        templateUrl: 'app/dashboard/project/project.html',
        controller: 'ProjectCtrl',
        authenticate: true
      });
  });
