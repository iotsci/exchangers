var mainApp = angular.module('main');

mainApp.controller('registerController', ['$scope', '$http', '$document', function ($scope, $http, $document) {
    $scope.registerUser = {};

    $scope.registerAction = function () {

        $document
            .find(".register-button")
            .attr('disabled', true)
            .text('Registering...');

        $http({
            method: 'POST',
            url: "/api/Account/Register",
            data: {
                'Email': $scope.registerUser.email,
                'Password': $scope.registerUser.password,
                'ConfirmPassword': $scope.registerUser.confirmPassword
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function () {
                $document
                    .find(".register-button")
                    .attr('disabled', false)
                    .text('Register');
                $scope.toggleRegisterLogin();
            });
    };
}]);