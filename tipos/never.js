"use strict";
(function () {
    var error = function (message) {
        throw new Error(message); //Never no debe tener un punto alcanzabel en el codigo
    };
    error('Auxilio!');
    console.log('Hola mundo');
})();
//# sourceMappingURL=never.js.map