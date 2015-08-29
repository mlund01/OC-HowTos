angular.module('orderCloud.course')
    .config(CreateUserConfig);

function CreateUserConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started.createUser', {
            url: '/createUser',
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/classes/createUser/templates/createUser.tpl.html'
                },
                'left@course.getting-started.createUser': {
                    templateUrl: 'course/courses/gettingStarted/classes/createUser/templates/createUser-left.tpl.html',
                    controller: 'createUserCtrl',
                    controllerAs: 'createUser'
                },
                'middle@course.getting-started.createUser': {
                    templateUrl: 'course/courses/gettingStarted/classes/createUser/templates/createUser-middle.tpl.html',
                    controller: 'createUserCtrl',
                    controllerAs: 'createUser'
                }
            }
        })
}