angular.module('orderCloud.course')
    .config(CreateProductConfig);

function CreateProductConfig($stateProvider) {
    $stateProvider
        .state('course.getting-started.createProduct', {
            url: '/createProduct',
            views: {
                '': {
                    templateUrl: 'course/courses/gettingStarted/partialViews/createProduct/templates/createProduct.tpl.html'
                }
            }
        })
}