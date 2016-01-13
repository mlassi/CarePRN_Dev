// app.controller('appController', ['$scope', appController]);
//
// function appController($scope, appController){
//
// this.childFunction = function(){
//
// }
//
//
//   console.log('I am the controller');
// };
'use strict';

app.controller('appController',  ['$scope', function ($scope) {
  // Do something with myService
  console.log('something');
  $scope.aValue = 'hello';
}]);
