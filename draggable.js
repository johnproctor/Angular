(function() {
    'use strict';

    angular.module('myApp')
        .directive('draggable', [draggable]);

    function draggable() {
        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel'
        };

        return directive;

        function link(scope, element, atrs, ngModelCtrl) {
            $(function () {
                element.draggable({ revert: true});
            });
        }
    }
})();