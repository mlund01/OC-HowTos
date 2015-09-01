angular.module('orderCloud.course')
    .controller('createBuyerCtrl', CreateBuyerController);

function CreateBuyerController($filter, ApiConsole) {
    var vm = this;
    vm.apiCallError = false;
    vm.apiCall = {};
    vm.apiCall.url = 'https://testapi.ordercloud.io/v1/';
    vm.apiCall.params = {};
    vm.apiCall.headers = {};
    vm.apiCall.headers['Content-Type'] = 'application/json';
    vm.apiCall.headers['Authorization'] = 'Bearer ' + ApiConsole.getSessionCookie();
    vm.apiCall.object = {
        BuyerName: '...',
        BuyerID: '...',
        Active: true
    };
    vm.apiCall.object = $filter('json')(vm.apiCall.object);

    vm.processApiRequest = processApiRequest;
    function processApiRequest (method, url, params, headers, object) {
        if (method === 'POST') {
            ApiConsole.POST(url, params, headers, object)
                .then(function(data) {
                    vm.apiCall.apiResponse = $filter('json')(data);
                    vm.apiCallError = false;

                }, function(reason) {
                    vm.apiCall.apiResponse = $filter('json')(reason);
                    vm.apiCallError = true;
                })
        }

    }

    vm.leftScript1 = '\n' +
            'Method: POST' + '\n' +
            'Location: https://api.ordercloud.io/v1/buyers' + '\n' +
            'Content-Type: application/json' + '\n' +
            'Authentication: Bearer .....' + '\n';

    vm.leftScript2 = {
        BuyerName: "...",
        BuyerID: "...",
        Active: false
        };
    vm.leftScript2 = $filter('json')(vm.leftScript2);
    vm.leftScript3 = vm.leftScript2;
    vm.httpOptions = [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ];


}