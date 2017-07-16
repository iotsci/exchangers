var mainApp = angular.module('main');

mainApp.controller('registerController', [
    '$scope',
    '$document',
    'httpApiRequest',
    function ($scope, $document, httpApiRequest) {
        $scope.registerUser = {};

        $scope.registerAction = function (registerForm) {

            if (registerForm.$valid) {
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
            }
        };
    }]
);