"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || '---')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '---');
        }
    };
    var fullName2 = function (firstName, identidad, lastName) {
        return identidad ? firstName + " " + (lastName || 'no lastname') : 'Sin identidad';
    };
    var nameDup = fullName('Clac Kent', 'Starck');
    console.log(nameDup);
})();
//# sourceMappingURL=arg-defaul.js.map