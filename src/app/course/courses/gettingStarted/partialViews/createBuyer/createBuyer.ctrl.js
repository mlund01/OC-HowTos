angular.module('orderCloud.course')
    .controller('createBuyerCtrl', CreateBuyerController);

function CreateBuyerController($filter) {
    var vm = this;
    vm.leftScript1 = '\n' +
            'Method: POST' + '\n' +
            'Location: https://api.ordercloud.io/v1/buyers' + '\n' +
            'Content-Type: application/json' + '\n' +
            'Authentication: Bearer .....' + '\n';
    /*vm.leftScript2 = '{' + '\n' +
            '   "BuyerName": "...",' + '\n' +
            '   "BuyerID": "...",' + '\n' +
            '   "Active": false' + '\n' +
            '}';*/
    vm.testobject = {
        cat: true,
        dog: false,
        object: [
            'color',
            'weight'
        ],
        kitty: {
            cog: true,
            dog: true
        },
        donkey: false
    };
    vm.leftScript2 = $filter('json')(vm.testobject);

    vm.leftScript3 = {
        BuyerName: "...",
        BuyerID: "...",
        Active: false
        };
    vm.leftScript3 = $filter('json')(vm.leftScript3);
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
    function jsonToAce(object) {
        var newObject = JSON.stringify(object);
        var chars = newObject.split("");
        var newline = false;
        var tabcount = 0;
        var spaces = 0;
        var omit = false;
        var returnString = '';
        var last = '';
        chars.forEach(function(each) {
            if (each == '"') {
                omit = !omit;
            }
            if (last == ']' || last == '}') {

                if (each = ',') {
                    console.log('hit');
                    returnString = returnString.slice(0, (0 - spaces));
                }

            }
            if (each == '{' || each == '}' || each == '[' || each == ']' || each == ',' && omit == false) {
                newline = true;
            }
            if (each == '{' || each == '[' && omit == false) {
                tabcount++;
            }
            if (each == '}' || each == ']' && omit == false) {
                returnString += '\n';
                tabcount--
            }
            spaces = 4 * tabcount;
            if (each == '}' || each == ']') {
                if (spaces > 0 && newline == true && omit == false) {
                    for (var i = 1; i <= spaces; i++) {
                        returnString += ' ';
                    }
                }
            }
            returnString += each;
            if (each === ':' && !omit) {
                returnString += ' ';
            }
            if (newline == true && omit == false && each !== '}' && each != ']') {
                returnString += '\n';
            }
            if (spaces > 0 && newline == true && omit == false) {
                for (var i = 1; i <= spaces; i++) {
                    returnString += ' ';
                }
            }
            newline = false;
            last = each;
        });
        return returnString;

    }
}