/**
 * Created by vgopali on 29-09-2016.
 */
var app = angular.module("myApp1",[]);

app.controller('LoginCtrl',['$scope', '$http', function($scope, $http){
    $scope.submit = function(){
        $http.post('/',{'param1':$scope.username_3, 'param2':$scope.password_3}).success(function(response){
            console.log('inside post of login'+$scope.username+$scope.password)
            if(response.success == 'username_does_not_exists'){
                console.log('username_does_not_exists');
                // need to handle the display mesage in view
            }else if(response.success === true){
                window.location = '/options';
            }

        }).error(function(error){
            console.log('error');
        })
    }
}])