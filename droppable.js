(function() {
    'use strict';

    angular.module('myApp')
        .directive('droppable', [droppable]);

    function droppable() {
        var directive = {
            scope: {callbackFn: '&callbackFn' },
            link: link,
            restrict: 'A',
            require: 'ngModel'
        };

        return directive;

        function link(scope, element, atrs, ngModelCtrl) {
            $(function () {
                element.droppable({
                    drop: function (event, ui) {
                        //add your callback here
			scope.callbackFn();
                    }
                });
            });
        }
    }
})();