var mainApp = angular.module('main');

mainApp.controller("switchController", function ($scope) {
    $scope.regLoginForm = "login";

    $scope.toggleRegisterLogin = function () {
        if ($scope.regLoginForm == "login") {
            $scope.regLoginForm = "register";
        } else {
            $scope.regLoginForm = "login";
        }
    }
});