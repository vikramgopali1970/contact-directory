/**
 * Created by vgopali on 27-09-2016.
 */
var app = angular.module('myApp',[]);

app.controller('myContrlr',['$scope','$http',function ($scope,$http) {
    $scope.submit = function(){
        $http.post('/insertData',{'fname':$scope.firstName, 'lname':$scope.lastName, 'email1':$scope.emailStr, 'mnumber':$scope.mobNumStr}).success(
        function(response){
            console.log("reponse.success;");
            window.location = "/savesuccess";
        }).error(function (response) {
            console.log("failed error");
        })
    }
}])