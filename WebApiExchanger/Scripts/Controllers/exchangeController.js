var mainApp = angular.module('main');

mainApp.controller('exchangerController', [
    '$scope',
    '$routeParams',
    'locationSetter',
    'splitParams',
    function ($scope, $routeParams, locationSetter, splitParams) {
        var data = $routeParams['data'];

        if (data) {
            if (splitParams.isValid(data)) {

                var params = splitParams.Split(data);

                $scope.leftOne = params.from;
                $scope.rightOne = params.to;

            }
        }

        $scope.options = [
            {
                name: 'options',
                id: 'option1',
                value: 'Option 1'
            },
            {
                name: 'options',
                id: 'option2',
                value: 'Option 2'
            },
            {
                name: 'options',
                id: 'option3',
                value: 'Option 3'
            },
        ];

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
