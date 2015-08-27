angular.module('orderCloud.course')
    .controller('createBuyerCtrl', CreateBuyerController);

function CreateBuyerController() {
    var vm = this;
    vm.leftScript1 = '\n' +
            'Method: POST' + '\n' +
            'Location: https://api.ordercloud.io/v1/buyers' + '\n' +
            'Content-Type: "application/json"' + '\n' +
            'Authentication: "Bearer ....."' + '\n';
    /*vm.leftScript2 = '{' + '\n' +
            '   "BuyerName": "...",' + '\n' +
            '   "BuyerID": "...",' + '\n' +
            '   "Active": false' + '\n' +
            '}';*/
    vm.testobject = {
        cat: true,
        dog: false
    };
    vm.leftScript2 = aceParse(vm.testobject);
    vm.leftScript3 = '{' + '\n' +
        '   "BuyerName": "...",' + '\n' +
        '   "BuyerID": "...",' + '\n' +
        '   "Active": false' + '\n' +
        '}';
    vm.httpOptions = [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ];
    vm.httpLoc = "https://api.ordercloud.io/v1/buyers";
    vm.token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJuZ2hlbHBlciIsImNpZCI6ImQ4M2IyMTZjLTM1NjEtNGJjYS05OGZjLTkyY2M2MmRhNDc4ZCIsInJvbGUiOiJGdWxsQWNjZXNzIiwiaXNzIjoiaHR0cDovL2ZvdXI1MS5jb20iLCJhdWQiOiJodHRwczovL3Rlc3RhcGkuT3JkZXJDbG91ZC5pby9hcGkiLCJleHAiOjE0NDAxNDY0ODUsIm5iZiI6MTQ0MDExNjQ4NX0.K-iZl0ASdEqxVRgAbU22ibWzLAWwO3rBaWzuAsqZDZA"

    vm.aceLoaded = function(_editor) {
        var _session = _editor.getSession();
        var _renderer = _editor.renderer;

        _session.on('change', function() {
            vm.codeStuff = JSON.parse(_editor.getValue().replace('\n', ''));
        })
    };
    function aceParse(object) {
        var newObject = JSON.stringify(object);
        var chars = newObject.split("");
        var newline = false;
        var tabcount = 0;
        var spaces = 0;
        var returnString = "";
        var omit = false;
        chars.forEach(function(each) {
            if (each == '"') {
                omit = !omit;
            }
            if (each == '{' || each == '}' || each == ',' && omit == false) {
                newline = true;
            }
            if (each == '{' && omit == false) {
                returnString += '\n';
                tabcount++;
            }
            if (each == '}' && omit == false) {
                returnString += '\n';
                tabcount--
            }
            spaces = 4 * tabcount;
            returnString += each;
            if (newline == true && omit == false) {
                returnString += '\n';
            }
            if (spaces > 0 && newline == true && omit == false) {
                for (var i = 1; i <= spaces; i++) {
                    returnString += ' ';
                }
            }
            newline = false;
        });
        return returnString;

    }
}