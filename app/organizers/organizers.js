window.counter=0;
window.m=0;

angular.module('gdgXBoomerang')
.controller('OrganizersController', function ($http, Config, NavService) {
    var vm = this;
    vm.loading = false;
    NavService.setNavTab(4);

    var url = 'http://hub.gdgx.io/api/v1/chapters/' + Config.id + '?callback=JSON_CALLBACK';
    var headers = { 'headers': { 'Accept': 'application/json;' }, 'timeout': 5000 };
    $http.jsonp(url, headers).success(function (data) {
        if (data.organizers) {
            vm.organizers = data.organizers;
            vm.organizers.push('103195414388965623915');//melissa
            vm.organizers.push('100529824397301243887');//rafael
            vm.organizers.push('112795548622667943663');//Italo
            vm.organizers.push('118431497527196529448');//Edson
            vm.organizers.push('101036373509755301700');//Katherine
            vm.organizers.push('112275852719996728275');//Italo 2
            vm.organizers.push('104677978417503697355');//Jhoon
            vm.organizers.push('111741150284406068613');//Victoria
            console.log('organizers' + data.organizers);
        }
    });
});