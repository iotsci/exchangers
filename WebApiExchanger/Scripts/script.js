var mainApp = angular.module("main");

mainApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider.when(
        '/', {
            templateUrl: '/Home/RegisterOrLogin'
        }
    );

    $routeProvider.when(
        '/Home/Exchanger/:data?', {
            templateUrl: '/Home/RealExchanger',
            controller: 'exchangerController'
        }
    );

    $routeProvider.otherwise({
        redirectTo: "/"
    })

    $locationProvider.html5Mode(true);
}]);
