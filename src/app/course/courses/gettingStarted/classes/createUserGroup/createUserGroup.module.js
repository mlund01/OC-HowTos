angular.module('orderCloud.course')
    .config(CreateUserGroupConfig);

function CreateUserGroupConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started.createUserGroup', {
            url: '/createUserGroup',
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/classes/createUserGroup/templates/createUserGroup.tpl.html'
                },
                'left@course.getting-started.createUserGroup': {
                    templateUrl: 'course/courses/gettingStarted/classes/createUserGroup/templates/createUserGroup-left.tpl.html',
                    controller: 'createUserGroupCtrl',
                    controllerAs: 'createUserGroup'
                },
                'middle@course.getting-started.createUserGroup': {
                    templateUrl: 'course/courses/gettingStarted/classes/createUserGroup/templates/createUserGroup-middle.tpl.html',
                    controller: 'createUserGroupCtrl',
                    controllerAs: 'createUserGroup'
                }
            }
        })
}