'use strict';

/* Controllers */

angular.module('angularRestfulAuth')
    .controller('HomeCtrl', ['$rootScope', '$scope', '$location', '$localStorage', 'Main', function($rootScope, $scope, $location, $localStorage, Main) {

        $scope.signin = function() {
            var formData = {
                correoElectronico: $scope.correoElectronico,
                contrasena: $scope.contrasena
            }

            Main.signin(formData, function(res) {
                if (res.type == false) {
                    alert(res.data)    
                } else {
                   //window.localStorage.setItem('token',res.data.token);
                    $localStorage.token = res.token;
                    window.location = "#/";    
                }
            }, function() {
                $scope.error = 'Error al ingresar';
            })
        };

        $scope.signup = function() {
            var formData = {
                 nombre : $scope.nombre,
                 apellido : $scope.apellido,
                 correoElectronico : $scope.correoElectronico,
                 contrasena : $scope.contrasena,
                 confirmacioncontrasena: $scope.confirmacioncontrasena,
                 fechaNacimiento : $scope.fechaNacimiento     
            }

            Main.signup(formData, function(res) {
                if (res.type == false) {
                    alert(res.data);
                } else {
                    $localStorage.token = res.token;
                    window.location = "#/login";  
                }
            }, function() {
                $rootScope.error = 'Error al registar';
            })
        };

        $scope.me = function() {
            Main.me(function(res) {
                $scope.myDetails = res;
            }, function() {
                $rootScope.error = 'Failed to fetch details';
            })
        };

        $scope.logout = function() {
            Main.logout(function() {
                window.location = "#/home"
            }, function() {
                alert("Failed to logout!");
            });
        };
        $scope.token = $localStorage.token;
    }])

.controller('MeCtrl', ['$rootScope', '$scope', '$location', 'Main', function($rootScope, $scope, $location, Main) {

        Main.me(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
        })
}]);
