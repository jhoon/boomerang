'use strict';

angular.module('gdgXBoomerang')
.directive('gplusPerson', function ($http, $filter, Config) {
    return {
        restrict: 'EA',
        templateUrl: 'app/organizers/components/gplus_person.html',
        scope: {
            gplusId: '='
        },
        link: function (scope) {

            var nload= function(newVal)
            {

                $http.jsonp('https://www.googleapis.com/plus/v1/people/' + newVal +
                        '?callback=JSON_CALLBACK&fields=aboutMe%2CdisplayName%2Cimage&key=' + Config.googleApi)
                        .success(function (data) {
                            //console.log("succes "+data);
                            if (data && data.image && data.image.url) {
                                data.image.url = data.image.url.replace('sz=50', 'sz=170');
                            }
                            scope.person = data;
                        }).
                        error(function (data)
                        {
                            //console.log("error "+data);
                        })

            };

            scope.$watch('gplusId', function (oldVal, newVal) {
                if (newVal) {

                    //console.log("counter "+ window.counter+" "+window.counter%5);
                    if(window.counter%5==0)
                    {
                        window.m++;
                    }
                    setTimeout(function(){nload(newVal)},window.m*1000);
                    window.counter++;
                }
            });
        }
    };
});
