angular.module('orderCloud.course')
    .controller('createProductCtrl', CreateProductController);

function CreateProductController() {
    var vm = this;
    vm.leftScript1 = '\n' +
            'GET https://api.ordercloud/v1/buyers' +
            '\n'
}