var mainApp = angular.module('main');

mainApp.service('splitParams', function () {

    var pattern = '-to-';

    this.getPattern = function () {
        return pattern;
    };

    this.isValid = function (path) {
        var result = path.indexOf(pattern);

        if (result == -1) {
            return false;
        } else {
            return true;
        }
    };

    this.Split = function (path) {
        var params = path.split(pattern);

        return {
            from: params[0],
            to: params[1]
        }
    };
});