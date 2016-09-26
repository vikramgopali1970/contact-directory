
/**
 * Created by vgopali on 25-09-2016.
 */

var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.submit = function(firstname){
        $http.post('../getData',{ "name": firstname }).success( function(response) {
            console.log("success - ", response.data);
        })
        .error( function(response) {
            console.log("error");
        });


    };
}]);
