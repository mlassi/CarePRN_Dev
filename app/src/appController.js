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

app.controller('appController',  ['$scope', '$firebaseObject', '$firebaseArray',
  function ($scope, $firebaseObject) {
  // Do something with myService
  var ref = new Firebase('https://careprndev.firebaseio.com/signup');
  $scope.customerOutput = [];

  ref.on("child_added", function(snapshot, prevChildKey) {
    var data = snapshot.val().entity;
    var customer = {
      firstName : data.firstName,
      lastName: data.lastName,
      email: data.email
    };
    if(data.careType == "provider"){
      $scope.customerOutput.push(customer);
    }
    if(data.careType == "provider"){
      console.log("\nName: " + customer.firstName + " " + customer.lastName + "\nEmail: " + customer.email + "\n");
    }
  });

}]);
