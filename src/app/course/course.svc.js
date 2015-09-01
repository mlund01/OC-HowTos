angular.module('orderCloud.course')
    .factory('ApiConsole', ApiConsoleSvc)
    .factory('CourseDefinition', CourseDefinitionSvc)
    .factory('ClassDefinition', ClassDefinitionSvc);

function ApiConsoleSvc($resource, $cookies) {
    function get(url, params, headers) {
        return $resource(url, params, {apiGet: {method: 'GET', headers: headers}}, {'stripTrailingSlashes': true}).apiGet().$promise;
    }
    function post(url, params, headers, object) {
        return $resource(url, {}, {apiPost: {method: 'POST', headers: headers, params: params}}, {'stripTrailingSlashes': true}).apiPost(object).$promise;
    }
    function put(url, params, headers, object) {
        return $resource(url, {}, {apiPut: {method: 'PUT', headers: headers, params: params}}, {'stripTrailingSlashes': true}).apiPut(object).$promise;
    }
    function patch(url, params, headers, object) {
        return $resource(url, {}, {apiPatch: {method: 'PATCH', headers: headers, params: params}}, {'stripTrailingSlashes': true}).apiPatch(object).$promise;
    }
    function del(url, params, headers, object) {
        return $resource(url, {}, {apiDelete: {method: 'DELETE', headers: headers, params: params}}, {'stripTrailingSlashes': true}).apiDelete(object).$promise;
    }

    function _storeSessionCookie(token) {
        $cookies.put('consoleToken', token);
    }
    function _getSessionCookie() {
        return $cookies.get('consoleToken')
    }
    function _processRequest(method, url, params, headers, object) {
        if (method == 'POST') {
            return post(url, params, headers, object)
        }
        if (method == 'PUT') {
            return put(url, params, headers, object)
        }
        if (method == 'PATCH') {
            return patch(url, params, headers, object)
        }
        if (method == 'GET') {
            return get(url, params, headers)
        }
        if (method == 'DELETE') {
            return del(url, params, headers, object)
        }
    }

    return {
        processRequest: _processRequest,
        storeSessionCookie: _storeSessionCookie,
        getSessionCookie: _getSessionCookie
    };
}



function ClassDefinitionSvc($http) {
    function _getClasses() {
        return $http.get('assets/classes.json');
    }

    function _setScope(classID, cb) {
        var returnObject = {};
        console.log('hit before');
        _getClasses()
            .success(function(data) {
                data.forEach(function(each) {
                    if (each.ID == classID) {
                        returnObject.name = each.Name;
                        for (var key in each.Scope) {
                            returnObject[key] = each.Scope[key];
                        }
                    }
                });
                cb(returnObject);
            })


    }

    return {
        getClasses: _getClasses,
        setScope: _setScope
    }
}

function CourseDefinitionSvc($http) {
    function _getCourses() {
        return $http.get('assets/courses.json');
    }

    function _setScope(courseID, classID, cb) {
        var returnObject = {};
        _getCourses()
            .success(function(data){
                data.forEach(function(each) {
                    if (each.ID == courseID) {
                        returnObject.name = each.Name;
                        returnObject.classCount = each.Classes.length;
                        for (var i = 0; i < each.Classes.length; i++) {
                            if (each.Classes[i] == classID) {
                                returnObject.courseLevel = i + 1;
                                if (i + 1 != each.Classes.length) {
                                    returnObject.nextClass = each.Classes[i + 1]
                                }
                            }
                        }
                        for (var key in each.Scope) {
                            returnObject[key] = each[key];
                        }
                    }
                });
                cb(returnObject)
            });

    }

    return {
        getCourses: _getCourses,
        setScope: _setScope
    }
}