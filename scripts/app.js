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

        .when('/solicitud', {
            controller: 'LoginController',
            templateUrl: 'partials/solicitud.html'
        })
        
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
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
            if ($location.path() !== '/login' && $location.path() !== '/registro' && $location.path() !== '/solicitud'  && !$rootScope.globals.currentUser ) {
                window.location="#/home";
                
            }
        });
        

    }]);

