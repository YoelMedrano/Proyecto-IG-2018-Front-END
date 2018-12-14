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

         $scope.direccion= function (){
            $scope.dataLoading = true;
            AuthenticationService.Direccion($scope.direccion1, $scope.direccion2, $scope.codigoPostal, $scope.ciudad,
                $scope.pais, $scope.tipoDeDireccion, $scope.latitud, $scope.longitud, function(response){
             if (response.success) {
                AuthenticationService.SetCredentialsD(response.success);
                $location.path('/paquete');

             }else{

                $scope.error = response.message;
                $scope.dataLoading = false;
             }
            });
         };

         $scope.paquete= function (){
            $scope.dataLoading = true;
            AuthenticationService.Paquete($scope.nombreApellidoEntrega, $scope.pesoKgs, $scope.descripcionPaquete, function(response){
             if (response.success) {
                AuthenticationService.SetCredentialsP(response.success);
                $location.path('/');

             }else{

                $scope.error = response.message;
                $scope.dataLoading = false;
             }
            });
         };

        $scope.eliminarc= function (){
            $scope.dataLoading = true;
            AuthenticationService.Eliminarc(function(response){
             if (response.success) {
                AuthenticationService.ClearCredentials();
                $location.path('/home');

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

         $scope.latitud= function (latitud,longitud){
            AuthenticationService.SetCredentialsLat(latitud,longitud);
            
         };


  
}]);
