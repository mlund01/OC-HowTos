angular.module('orderCloud.course')
    .factory('ApiConsole', ApiConsoleSvc);

function ApiConsoleSvc($resource) {
    function _get(url, params, headers) {
        return $resource(url, params,
            {
                'stripTrailingSlashes': true,
                'actions': {
                    'apiGet': {
                        method: 'GET',
                        headers: headers
                    }
                }
            }
        ).apiGet();
    }
    function _post(url, params, headers, object) {
        return $resource(url, {},
            {
                'apiPost': {
                    method: 'POST',
                    headers: headers,
                    params: params
                }
            }
        ).apiPost(object);
    }

    return {
        POST: _post,
        GET: _get
    }
}