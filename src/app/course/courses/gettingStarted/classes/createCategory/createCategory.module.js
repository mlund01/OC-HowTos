angular.module('orderCloud.course')
    .config(CreateCategoryConfig);

function CreateCategoryConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started.createCategory', {
            url: '/createCategory',
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/classes/createCategory/templates/createCategory.tpl.html'
                },
                'left@course.getting-started.createCategory': {
                    templateUrl: 'course/courses/gettingStarted/classes/createCategory/templates/createCategory-left.tpl.html',
                    controller: 'createCategoryCtrl',
                    controllerAs: 'createCategory'
                },
                'middle@course.getting-started.createCategory': {
                    templateUrl: 'course/courses/gettingStarted/classes/createCategory/templates/createCategory-middle.tpl.html',
                    controller: 'createCategoryCtrl',
                    controllerAs: 'createCategory'
                }
            }
        })
}