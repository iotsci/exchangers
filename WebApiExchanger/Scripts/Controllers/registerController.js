var mainApp = angular.module('main');

mainApp.controller('registerController', [
    '$scope',
    '$http',
    '$document',
    'httpApiRequest',
    function ($scope, $http, $document, httpApiRequest) {
        $scope.registerUser = {};

        $scope.registerAction = function () {

            $document
                .find(".register-button")
                .attr('disabled', true)
                .text('Registering...');
            
            httpApiRequest.Register(
                $scope.registerUser.email,
                $scope.registerUser.password,
                $scope.registerUser.confirmPassword,
                function () {
                    $document
                        .find(".register-button")
                        .attr('disabled', false)
                        .text('Register');
                    $scope.toggleRegisterLogin();
                }
            );
        };
    }]
);