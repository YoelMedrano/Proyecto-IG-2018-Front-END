'use strict';

// declare modules
angular.module('Authentication', []);


angular.module('angularRestfulAuth', [
    'Authentication',
    'ngStorage',
    'ngRoute',
'angular-loading-bar',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/registro', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/registro.html'
        })
    
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'partials/login.html'
        })

        .when('/orden', {
            controller: 'LoginController',
            templateUrl: 'partials/orden.html'
        })

        .when('/direccion', {
            controller: 'LoginController',
            templateUrl: 'partials/direccion.html'
        })

        .when('/paquete', {
            controller: 'LoginController',
            templateUrl: 'partials/paquete.html'
        })

        .when('/seguimiento', {
            controller: 'LoginController',
            templateUrl: 'partials/seguimiento.html'
        })

        .when('/añadirdireccion', {
            controller: 'LoginController',
            templateUrl: 'partials/direccionadd.html'
        })

        .when('/añadirorden', {
            controller: 'LoginController',
            templateUrl: 'partials/ordenadd.html'
        })

        .when('/añadirpaquete', {
            controller: 'LoginController',
            templateUrl: 'partials/paqueteadd.html'
        })
        
        
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
        })

        .when('/eliminarcliente', {
            controller: 'LoginController',
            templateUrl: 'partials/eliminarc.html'
        })

        .when('/', {
            controller: 'LoginController',
            templateUrl: 'partials/userperfil.html'
        })
 
        .otherwise({ redirectTo: '/home' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/paquete' && $location.path() !== '/añadirdireccion' && $location.path() !== '/añadirpaquete' && $location.path() !== '/añadirorden' && $location.path() !== '/eliminarcliente' && $location.path() !== '/direccion' && $location.path() !== '/login' && $location.path() !== '/registro' && $location.path() !== '/orden'  && !$rootScope.globals.currentUser ) {
                window.location="#/home";
                
            }
        });
        

    }]);

