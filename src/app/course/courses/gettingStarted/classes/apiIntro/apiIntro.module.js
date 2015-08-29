angular.module('orderCloud.course')
    .config(ApiIntroConfig);

function ApiIntroConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started.apiIntro', {
            url: '/apiIntro',
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/classes/apiIntro/templates/apiIntro.tpl.html'
                },
                'left@course.getting-started.apiIntro': {
                    templateUrl: 'course/courses/gettingStarted/classes/apiIntro/templates/apiIntro-left.tpl.html',
                    controller: 'apiIntroCtrl',
                    controllerAs: 'apiIntro'
                },
                'middle@course.getting-started.apiIntro': {
                    templateUrl: 'course/courses/gettingStarted/classes/apiIntro/templates/apiIntro-middle.tpl.html',
                    controller: 'apiIntroCtrl',
                    controllerAs: 'apiIntro'
                }
            }
        })
}