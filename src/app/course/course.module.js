angular.module('orderCloud.course', [])
    .config(CourseConfig);


function CourseConfig($stateProvider) {
    $stateProvider
        .state('course', {
            abstract: true,
            url: '/course',
            views: {
                '': {
                    templateUrl: 'course/templates/course.tpl.html'
                },
                'top@course': {
                    templateUrl: 'course/templates/course-top.tpl.html'
                },
                'bottom@course': {
                    templateUrl: 'course/templates/course-bottom.tpl.html'
                }
            }
        }
    )

}