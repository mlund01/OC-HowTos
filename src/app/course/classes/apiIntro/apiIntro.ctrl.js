angular.module('orderCloud.course')
    .controller('apiIntroCtrl', ApiIntroController);

function ApiIntroController($filter, ApiConsole) {
    var vm = this;
    vm.apiCall = {};
    vm.apiCall.url = 'https://testapi.ordercloud.io/v1/buyers/four51/users/df5h78';
    vm.apiCall.params = {};
    vm.apiCall.headers = {};
    vm.apiCall.headers['Content-Type'] = 'application/json';
    vm.apiCall.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJtbHVuZCIsImNpZCI6IjVmZWY4OWU4LTM3NTMtNDcyOC1hMTI2LTA1NjY4MTZjNWIyZCIsInJvbGUiOiJGdWxsQWNjZXNzIiwiaXNzIjoiaHR0cDovL2ZvdXI1MS5jb20iLCJhdWQiOiJodHRwczovL3Rlc3RhcGkub3JkZXJjbG91ZC5pby9hcGkiLCJleHAiOjE0NDA4MTAwMzQsIm5iZiI6MTQ0MDc4MDAzNH0.plTlhn-9GjlgJ-EdedExhXb5RYwzk9JR2o25ObngI5o';
    vm.apiCall.object = $filter('json')(vm.apiCall.object);

    vm.processApiRequest = processApiRequest;
    function processApiRequest () {
        vm.apiCall.apiResponse = $filter('json')({
            "ID": "df5h78",
            "Username": "BobJohnson",
            "FirstName": "Bob",
            "LastName": "Johnson",
            "Email": "bobjohnson@four51.com",
            "Phone": "555-555-5555",
            "TermsAccepted": "2016-01-01T03:02:01+05:03",
            "Active": true,
            "xp": null
        })

    }

    vm.apiCall.apiResponse = {};


    vm.leftScript3 = {
        BuyerName: "...",
        BuyerID: "...",
        Active: false
        };
    vm.leftScript3 = $filter('json')(vm.leftScript3);
    vm.httpOptions = [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ];


}