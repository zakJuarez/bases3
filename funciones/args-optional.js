"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'no lastname');
    };
    var fullName2 = function (firstName, identidad, lastName) {
        return identidad ? firstName + " " + (lastName || 'no lastname') : 'Sin identidad';
    };
    var name = fullName('Tony', 'Stark');
    var nameCap = fullName('Capitan america');
    var nameDup = fullName2('Clac Kent', true);
    console.log(name);
    console.log(nameCap);
    console.log(nameDup);
})();
//# sourceMappingURL=args-optional.js.map