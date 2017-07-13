var mainApp = angular.module('main');

mainApp.service('locationSetter', [
    '$location',
    'splitParams',
    function ($location, splitParams) {

        var exchangerPath = '/Home/Exchanger';

        var pattern = splitParams.getPattern();

        this.setExchangerLocation = function () {

            $location.url(exchangerPath);

            return true;
        };

        this.addExchangersToPath = function (from, to) {
            $location.url(exchangerPath + '/' + from + pattern + to);
        };
    }
]);