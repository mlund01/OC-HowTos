angular.module('orderCloud.course')
    .controller('courseCtrl', CourseController);

function CourseController($stateParams, CourseDefinition, ClassDefinition) {
    var vm = this;
    vm.class = {};
    vm.course = {};
    CourseDefinition.setScope($stateParams.courseID, $stateParams.classID, function(data) {
        vm.course = data;
    });
    ClassDefinition.setScope($stateParams.classID, function(data) {
        vm.class = data;
    });
    vm.processApiRequest = processApiRequest;

    function processApiRequest (method, url, params, headers, object) {
        if (vm.class.fakeResponse) {
            console.log('hit fake');
            vm.class.apiCall.apiResponse = $filter('json')(vm.class.fakeResponse);
            vm.class.apiCallSuccess = true;
        } else {
            ApiConsole.processRequest(method, url, params, headers, object)
                .then(function(data) {
                    vm.class.apiCall.apiResponse = $filter('json')(data);
                    vm.class.apiCallError = false;
                    vm.class.apiCallSuccess = true;
                    ApiConsole.storeSessionCookie(data.access_token);
                }, function(reason) {
                    vm.class.apiCall.apiResponse = $filter('json')(reason);
                    vm.class.apiCallError = true;
                })

        }

    }



    vm.httpOptions = [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ];
}