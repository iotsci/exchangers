var mainApp = angular.module('main');

mainApp.controller('loginController', [
    '$scope',
    '$http',
    '$document',
    '$httpParamSerializerJQLike',
    'locationSetter',
    'httpApiRequest',
    function ($scope, $http, $document, $httpParamSerializerJQLike, locationSetter, httpApiRequest) {

        $scope.login = {};

        if (httpApiRequest.isAuthorized()) {

            locationSetter.setExchangerLocation();

        }

        $scope.loginAction = function () {

            $document
                .find('.login-button')
                .attr('disabled', true)
                .text('Singing...');

            httpApiRequest.Authorize($scope.login.email, $scope.login.password, function (token) {
                sessionStorage.setItem('AccessToken', token);
                $document
                    .find('.login-button')
                    .attr('disabled', false)
                    .text('Sing in');

                locationSetter.setExchangerLocation();
            });
        };

    }]);
