 app.controller('EmailCtrl', function ($scope) {
            var email_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                emailArray,
                arrOfValidEmails = [],
                arrOfInvalidEmails = [];
            $scope.boxEmail = [];
            $scope.email = '';

            //function call when model changes
            $scope.changeModel = function () {
                if ($scope.email.indexOf(',') > -1) {
                    var arr = extractEmail();
                    validateEmail(arr);
                }
            }

            //function to extract emails from string
            var extractEmail = function () {
                emailArray = $scope.email.split(",");
                return emailArray;
            }

            //function to validate emails
            var validateEmail = function (emailArray) {
                for (var i = 0; i < emailArray.length; i++) {
                    if (email_REGEXP.test(emailArray[i])) {
                        arrOfValidEmails.push(emailArray[i]);
                    } else {
                        arrOfInvalidEmails.push(emailArray[i])
                    }
                }
                if (arrOfValidEmails.length) {
                    $scope.validEmail = true;
                    $scope.email = arrOfInvalidEmails.slice();
                    arrOfInvalidEmails = [];
                    $scope.boxEmail = arrOfValidEmails.slice();
                    document.getElementsByClassName("textarea")[0].focus();
                }
            }
        });
