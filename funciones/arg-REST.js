"use strict";
(function () {
    var fullName = function (firstname) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstname + " " + restArgs.join(' ');
    };
    var superName = fullName('Clark', 'Josep', 'Kent');
    console.log(superName);
})();
//# sourceMappingURL=arg-REST.js.map