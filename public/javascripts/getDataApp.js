
/**
 * Created by vgopali on 25-09-2016.
 */

var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.searchResult=[];
    $scope.submit = function(firstname){
        $scope.searchResult=[];
        $http.post('/getData',{ "name": firstname }).success( function(response) {
            //console.log("success - ", response.data);
            angular.forEach(response.data,function (item) {
                $scope.searchResult.push(item);
                //console.log(item);
            });
            console.log($scope.searchResult);
        })
        .error( function(response) {
            console.log("error");
        });

    };
}]);


