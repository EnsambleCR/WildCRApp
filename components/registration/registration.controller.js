var app = angular.module('myApp', [ ]);

app.controller('newUserCtrl',function($scope){
  $scope.users = []; //arreglo de usuarios
  $scope.addNewUser = function(){
    $scope.users.push({
      name: $scope.user.name,
      work: $scope.user.work,
      salary: $scope.user.salary,
      gender: $scope.user.gender
    });
    console.log("data saved");
    $scope.user.name = "";
    $scope.user.work = "";
    $scope.user.salary = "";
    $scope.user.gender = "";
  }
});