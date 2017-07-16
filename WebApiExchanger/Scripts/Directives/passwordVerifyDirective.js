var mainApp = angular.module('main');

mainApp.directive('passwordVerify', passwordVerify);

function passwordVerify() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, elem, attrs, ngModel) {
            if (!ngModel) return;
            
            scope.$watch(attrs.ngModel, function () {
                validate();
            });
            
            attrs.$observe('passwordVerify', function (val) {
                validate();
            });

            var validate = function () {
                var val1 = ngModel.$viewValue;
                var val2 = attrs.passwordVerify;

                ngModel.$setValidity('passwordVerify', val1 === val2);
            };
        }
    }
}