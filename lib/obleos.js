"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obleos = void 0;
var sigils_1 = require("./sigils");
function obleos() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var lines = x.join().split('\n');
    var result = lines.filter(function (line) {
        if (line.charCodeAt(0) == sigils_1.dcCode) {
            console.debug('processing', line);
            return false;
        }
        else {
            return true;
        }
    });
    return result;
}
exports.obleos = obleos;
