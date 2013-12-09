angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, Pages) {
  $scope.page = Pages.get(0);
})

// A simple controller that shows a tapped item's data
.controller('PageCtrl', function($scope, $routeParams, Pages) {
  // "Pages" is a service returning mock data (services.js)
  $scope.page = Pages.get($routeParams.pageId);
});
