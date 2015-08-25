angular.module('orderCloud.course')
    .config(CreateProductConfig);

function CreateProductConfig($stateProvider) {
    $stateProvider
        .state('course.createProduct', {
            url: '/createProduct',
            templateUrl: 'createProduct/templates/createProduct.tpl.html',
            controller: 'createProductCtrl',
            controllerAs: 'createProduct'
        })
}