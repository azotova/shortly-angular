angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  angular.extend($scope, Links);
  /*console.log("loc", $location.$$url, $location);
  var code = $location.$$url.substring(9);
  console.log(code, "code");
  if ($location.$$url.substring(9)) {
    $scope.getCode(code);
  }
*/

});
