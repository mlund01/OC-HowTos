angular.module('orderCloud.course')
    .config(CreateBuyerConfig);

function CreateBuyerConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started.createBuyer', {
            url: '/createBuyer',
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/partialViews/createBuyer/templates/createBuyer.tpl.html'
                },
                'left@course.getting-started.createBuyer': {
                    templateUrl: 'course/courses/gettingStarted/partialViews/createBuyer/templates/createBuyer-left.tpl.html',
                    controller: 'createBuyerCtrl',
                    controllerAs: 'createBuyer'
                },
                'middle@course.getting-started.createBuyer': {
                    templateUrl: 'course/courses/gettingStarted/partialViews/createBuyer/templates/createBuyer-middle.tpl.html',
                    controller: 'createBuyerCtrl',
                    controllerAs: 'createBuyer'
                },
                'right@course.getting-started.createBuyer': {
                    templateUrl: 'course/courses/gettingStarted/partialViews/createBuyer/templates/createBuyer-right.tpl.html',
                    controller: 'createBuyerCtrl',
                    controllerAs: 'createBuyer'
                }
            }
        })
}