angular.module('orderCloud.course')
    .factory('ApiConsole', ApiConsoleSvc);

function ApiConsoleSvc($resource) {
    function _get(url, params, headers) {
        return $resource(url, params, {apiGet: {method: 'GET', headers: headers}}, {'stripTrailingSlashes': true}).apiGet().$promise;
    }
    function _post(url, params, headers, object) {
        console.log('hit');
        return $resource(url, {}, {apiPost: {method: 'POST', headers: headers, params: params}}, {'stripTrailingSlashes': true}).apiPost(object).$promise;
    }
    return {
        POST: _post,
        GET: _get
    };
}