var mainApp = angular.module('main');

mainApp.controller('exchangerController', [
    '$scope',
    '$routeParams',
    'locationSetter',
    'splitParams',
    'httpApiRequest',
    function ($scope, $routeParams, locationSetter, splitParams, httpApiRequest) {
        var data = $routeParams['data'];

        if (data) {
            if (splitParams.isValid(data)) {

                var params = splitParams.Split(data);

                $scope.leftOne = params.from;
                $scope.rightOne = params.to;

                httpApiRequest.getExchangers(
                    splitParams.getExchangerId(params.from),
                    splitParams.getExchangerId(params.to),
                    $scope.exchangers = []
                );
            }
        }
        
        httpApiRequest.getCurrencies($scope.options = []);

        $scope.leftRadioClick = function (option) {
            $scope.leftOne = option.id;
            checkParams();
        };

        $scope.rightRadioClick = function (option) {
            $scope.rightOne = option.id;
            checkParams();
        };

        var checkParams = function () {
            if ($scope.leftOne != undefined && $scope.rightOne != undefined) {
                locationSetter.addExchangersToPath($scope.leftOne, $scope.rightOne);
            }
        };
    }
]);
