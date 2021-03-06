'use strict';
 
angular.module('Authentication')
 
.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.Login = function (correoElectronico, contrasena, callback) {
            
             $http.post( 'https://proyectopaquetes.herokuapp.com/cliente/login', {correoElectronico : correoElectronico , contrasena : contrasena})
              .success(function (response,idCliente){
                       var response= { success: response.idCliente };
                        
                       callback(response);
                      
            },1000)
            .error(function (response) {
              response.message = "Correo Electronico o Contraseña invalida";
              callback(response);
              
            });
            
         

        };

        service.Eliminarc = function (callback) {
            $http({
            method: 'DELETE',
            url: 'https://proyectopaquetes.herokuapp.com/cliente/eliminar/' + $rootScope.globals.currentUser.authdata
            }).success(function(response,message){
                    var response = {success : response.message};
                    callback(response)
                },1000)
                .error(function(response){
                    response.message="Ocurrio un error";
                    callback(response);
                });
        };

        
        service.SetCredentials = function (idCliente) {
            var authdata =idCliente;
 
            $rootScope.globals = {
                currentUser: {
                    authdata: authdata 
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.SetCredentialsO = function (idOrden) {
            var authdata =idOrden;
 
            $rootScope.globalsO = {
                currentUser: {
                    authdata: authdata 
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookieStore.put('globalsO', $rootScope.globalsO);
        };

        service.SetCredentialsP = function (idPaquete) {
            var authdata =idPaquete;
 
            $rootScope.globalsP = {
                currentUser: {
                    authdata: authdata 
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookieStore.put('globalsP', $rootScope.globalsP);
        };

        service.SetCredentialsD = function (idDireccion) {
            var authdata =idDireccion;
 
            $rootScope.globalsP = {
                currentUser: {
                    authdata: authdata 
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookieStore.put('globalsD', $rootScope.globalsD);
        };



        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
            $rootScope.globalsO = {};
            $cookieStore.remove('globalsO');
            $http.defaults.headers.common.Authorization = 'Basic ';
            $rootScope.globalsD = {};
            $cookieStore.remove('globalsD');
            $http.defaults.headers.common.Authorization = 'Basic ';
            $rootScope.globalsP = {};
            $cookieStore.remove('globalsP');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        service.Orden = function (direccionEntrega,direccionRecoleccion,callback) {
            $http.post('https://proyectopaquetes.herokuapp.com/orden/registrar/' + $rootScope.globals.currentUser.authdata ,
                {direccionEntrega : direccionEntrega , direccionRecoleccion : direccionRecoleccion}).success(function(response,message){

                    var response = {success : response.message};
                    callback(response)
                },1000)
                .error(function(response){
                    response.message="Ocurrio un error";
                    callback(response);
                });
        };

        service.Paquete = function (nombreApellidoEntrega,pesoKgs,descripcionPaquete,callback) {
            $http.post('https://proyectopaquetes.herokuapp.com/paquete/registrar/' + $rootScope.globalsO.currentUser.authdata ,
                {nombreApellidoEntrega : nombreApellidoEntrega , pesoKgs : pesoKgs , descripcionPaquete : descripcionPaquete}).success(function(response,message){
                    var response = {success : response.message};
                    callback(response)
                },1000)
                .error(function(response){
                    response.message="Ocurrio un error";
                    callback(response);
                });
        };

        service.Direccion = function (direccion1,direccion2,codigoPostal,ciudad,pais,tipoDeDireccion,latitud,longitud,callback) {
            $http.post('https://proyectopaquetes.herokuapp.com/direccion/registrar/' + $rootScope.globals.currentUser.authdata +
                '/'+$rootScope.globalsO.currentUser.authdata ,
                {direccion1 : direccion1 , direccion2 : direccion2 , codigoPostal : codigoPostal, ciudad : ciudad, pais : pais,
                    tipoDeDireccion : tipoDeDireccion, latitud : latitud, longitud : longitud}).success(function(response,message){

                    var response = {success : response.message};
                    callback(response)
                },1000)
                .error(function(response){
                    response.message="Ocurrio un error";
                    callback(response);
                });
        };
 
 
        return service;
    }])
 
.factory('Base64', function () {
    /* jshint ignore:start */
 
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
 
    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
 
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
 
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
 
                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
 
            return output;
        },
 
        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));
 
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
 
                output = output + String.fromCharCode(chr1);
 
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
 
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
 
            } while (i < input.length);
 
            return output;
        }
    };
 
    /* jshint ignore:end */
});

