'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
    

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.email, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials(response.success);
                    $location.path('/');

                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
        
        $scope.orden= function (){
            $scope.dataLoading = true;
            AuthenticationService.Orden($scope.direccionEntrega, $scope.direccionRecoleccion, function(response){
             if (response.success) {
                AuthenticationService.SetCredentialsO(response.success);
                $location.path('/direccion');

             }else{

                $scope.error = response.message;
                $scope.dataLoading = false;
             }
            });
         };

        
         $scope.logout= function (){
            AuthenticationService.ClearCredentials();
            $location.path('/home');
         };

  
}]);
