angular.module('orderCloud.course')
    .controller('createProductCtrl', CreateProductController);

function CreateProductController($filter, ApiConsole) {
    var vm = this;
    vm.apiCall = {};
    vm.apiCall.url = 'https://testapi.ordercloud.io/v1/';
    vm.apiCall.params = {};
    vm.apiCall.headers = {};
    vm.apiCall.headers['Content-Type'] = 'application/json';
    vm.apiCall.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJtbHVuZCIsImNpZCI6IjVmZWY4OWU4LTM3NTMtNDcyOC1hMTI2LTA1NjY4MTZjNWIyZCIsInJvbGUiOiJGdWxsQWNjZXNzIiwiaXNzIjoiaHR0cDovL2ZvdXI1MS5jb20iLCJhdWQiOiJodHRwczovL3Rlc3RhcGkub3JkZXJjbG91ZC5pby9hcGkiLCJleHAiOjE0NDA4MTAwMzQsIm5iZiI6MTQ0MDc4MDAzNH0.plTlhn-9GjlgJ-EdedExhXb5RYwzk9JR2o25ObngI5o';
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