"use strict";
var Validations;
(function (Validations) {
    Validations.validaText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validaDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validaText('Isaac'));
//# sourceMappingURL=main.js.map