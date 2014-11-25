angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {links: []};

  angular.extend($scope, Links);

  $scope.getLinks()
    .then(function(data) {
      $scope.data.links = data;
    })
    .catch(function(er) {console.error(er);});


})

