var mainApp = angular.module('main');

mainApp.service('httpApiRequest', ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike) {

    this.isAuthorized = function () {
        if (sessionStorage.getItem('AccessToken')) {
            return true;
        } else {
            return false;
        }
    };

    this.Authorize = function (email, password, callback) {
        $http({
            method: "POST",
            url: '/Token',
            data: $httpParamSerializerJQLike({
                grant_type: 'password',
                username: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            callback(response.data.access_token);
        });
    };

    this.Register = function (email, password, confirmPassword, callback) {
        $http({
            method: 'POST',
            url: "/api/Account/Register",
            data: {
                'Email': email,
                'Password': password,
                'ConfirmPassword': confirmPassword
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function () {
            callback();
        });
    };

    var getHeaders = function () {
        return {
            'Authorization': 'Bearer ' + sessionStorage.getItem('AccessToken'),
            'Content-Type': 'application/json'
        };
    };

    this.getCurrencies = function (options) {
        $http({
            method: 'GET',
            url: "/api/Currency",
            headers: getHeaders()
        }).then(function (response) {
            var currencies = response.data;
            
            currencies.forEach(function (value, index) {
                options.push({ name: value.Name, id: value.Name + '-' + value.Id, value: value.Name});
            });
        });
    };

    this.getExchangers = function (from, to, exchangersToReturn) {
        $http({
            method: 'GET',
            url: "/api/Exchangers/" + from + "/" + to,
            headers: getHeaders()
        }).then(function (response) {
            response.data.forEach(function (value) {
                exchangersToReturn.push(value);
            });
        });
    };
}]);
