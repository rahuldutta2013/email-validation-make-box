   app.directive('emailBox', function () {
            return {
                restrict: 'E',
                template: '<span class="border">{{eachEmail}}<button ng-click="remove()" class="close-button">&times;</button></span>',
                link: function (scope, element, attrs, tabsCtrl) {
                    scope.remove = function () {
                        element.remove();
                        document.getElementsByClassName("textarea")[0].focus();
                    }
                }
            };
        });