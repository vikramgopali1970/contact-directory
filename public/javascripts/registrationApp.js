/**
 * Created by vgopali on 28-09-2016.
 */
var app = angular.module("myApp", []);


app.controller("RegisterCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.submit = function () {
        $http.post('/registration',{'fname':$scope.firstName, 'lname':$scope.lastName, 'uname123':$scope.username, 'pass':$scope.password}).success(function(request){
            console.log($scope.firstName, $scope.lastName, $scope.email);
            console.log('success..user registered');
        }).error(function(request){
            console.log('error')
        })
    }
}]);