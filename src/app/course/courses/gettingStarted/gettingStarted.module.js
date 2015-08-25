angular.module('orderCloud.course')
    .config(GettingStartedConfig);

function GettingStartedConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started', {
            url: '/getting-started',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/templates/getting-started.tpl.html'
                },
                'courseBottom@course.getting-started' : {
                    templateUrl: 'course/courses/gettingStarted/templates/getting-started-bottom.tpl.html'
                }
            }

        })
}