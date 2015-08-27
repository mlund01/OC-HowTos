angular.module('orderCloud.course')
    .factory('ApiConsole', ApiConsoleSvc);

function ApiConsoleSvc($resource) {
    function _post(url, params, object) {
        return $resource(url, params).save(object);
    }
    function _get(url, params) {
        return $resource(url).get(params)
    }
    function _list(url, params) {
        return $resource(url, params)
    }
}