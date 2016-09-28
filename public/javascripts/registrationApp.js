/**
 * Created by vgopali on 28-09-2016.
 */
var app = angular.module("myApp", ['ngMessages']);


app.controller("RegisterCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.submit = function () {
        $http.post('/registration',{'fname':$scope.firstName, 'lname':$scope.lastName, 'uname_1':$scope.username, 'pass_1':$scope.password}).success(function(result){
            console.log($scope.firstName, $scope.lastName, $scope.username, $scope.password);
            if(result.success == 'username already exists'){
                console.log("username already exists");
                //need to handle the message

            }
            else if(result.success === true){
                window.location = '/login';
            }
        }).error(function(error){
            console.log('error');
        })
    }
}]);