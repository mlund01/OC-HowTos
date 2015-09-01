angular.module('orderCloud.course', [])
    .config(CourseConfig);


function CourseConfig($stateProvider) {
    $stateProvider
        .state('course', {
            url: '/course/:courseID/:classID',
            templateUrl: 'course/templates/course.tpl.html',
            controller: 'courseCtrl',
            controllerAs: 'course'
        })
        .state('courses', {
            url: '/courses',
            templateUrl: 'course/templates/courses.tpl.html',
            controller: 'coursesCtrl',
            controllerAs: 'courses'
        })

}