/**
 * Created by vgopali on 27-09-2016.
 */
var app = angular.module('myApp',[]);

app.controller('myContrlr',['$scope','$http',function ($scope,$http) {
    $scope.submit = function(){
        $http.post('',{'fname':$scope.firstName, 'lname':$scope.lastName, 'email':$scope.emailStr, 'mnumber':$scope.mobNumStr}).success(
        function(response){
            console.log("sucess");
        }).error(function (response) {
            console.log("failed error");
        })
    }
}])