angular.module('orderCloud.course')
    .config(CreateProductConfig);

function CreateProductConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started.createProduct', {
            url: '/createProduct',
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/classes/createProduct/templates/createProduct.tpl.html'
                },
                'left@course.getting-started.createProduct': {
                    templateUrl: 'course/courses/gettingStarted/classes/createProduct/templates/createProduct-left.tpl.html',
                    controller: 'createProductCtrl',
                    controllerAs: 'createProduct'
                },
                'middle@course.getting-started.createProduct': {
                    templateUrl: 'course/courses/gettingStarted/classes/createProduct/templates/createProduct-middle.tpl.html',
                    controller: 'createProductCtrl',
                    controllerAs: 'createProduct'
                }
            }
        })
}