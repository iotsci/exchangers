var mainApp = angular.module('main');

mainApp.controller('loginController', [
    '$scope',
    '$http',
    '$document',
    '$httpParamSerializerJQLike',
    'locationSetter',
    function ($scope, $http, $document, $httpParamSerializerJQLike, locationSetter) {

        $scope.login = {};

        if (sessionStorage.getItem('AccessToken')) {

            locationSetter.setExchangerLocation();

        }

        $scope.loginAction = function () {

            $document
                .find('.login-button')
                .attr('disabled', true)
                .text('Singing...');

            $http({
                method: "POST",
                url: '/Token',
                data: $httpParamSerializerJQLike({
                    grant_type: 'password',
                    username: $scope.login.email,
                    password: $scope.login.password
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                sessionStorage.setItem('AccessToken', response.data.access_token);
                $document
                    .find('.login-button')
                    .attr('disabled', false)
                    .text('Sing in');

                locationSetter.setExchangerLocation();
            });
        };

    }]);