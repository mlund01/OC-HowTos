angular.module('orderCloud.course')
    .controller('authenticationCtrl', AuthenticationController);

function AuthenticationController($filter, ApiConsole) {
    var vm = this;
    vm.apiCallSuccess = false;
    vm.apiCall = {};
    vm.apiCall.url = 'https://testauth.ordercloud.io/oauth/token';
    vm.apiCall.params = {};
    vm.apiCall.headers = {};
    vm.apiCall.object = '';
    vm.apiCall.apiResponse = '';
    vm.processApiRequest = processApiRequest;
    function processApiRequest (method, url, params, headers, object) {
        ApiConsole.processRequest(method, url, params, headers, object)
            .then(function(data) {
                vm.apiCall.apiResponse = $filter('json')(data);
                vm.apiCallError = false;
                vm.apiCallSuccess = true;
                ApiConsole.storeSessionCookie(data.access_token);
            }, function(reason) {
                vm.apiCall.apiResponse = $filter('json')(reason);
                vm.apiCallError = true;
            })

    }



    vm.leftScript1 = 'client_id=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&grant_type=password&username=xxxxxxxx&password=xxxxxxxx&scope=FullAccess';
    vm.httpOptions = [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ];


}