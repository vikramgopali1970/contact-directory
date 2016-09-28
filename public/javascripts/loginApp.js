/**
 * Created by vgopali on 29-09-2016.
 */
var app = angular.module("myApp",[]);

app.controller('LoginCtrl',['$scope', '$http', function($scope, $http){
    $scope.submit = function(){
        $http.post('/login',{'username_1':$scope.username, 'password_1':$scope.password}).success(function(response){
            console.log($scope.username,$scope.password);
            if(response.success == 'username_does_not_exists'){
                console.log('username_does_not_exists');
                // need to handle the display mesage in view
            }else if(response.success === true){
                window.location = '/savesuccess';
            }

        }).error(function(error){
            console.log('error');
        })
    }
}])