"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Robert Dawni Jr',
        vision: 'Paul Betanny',
        activo: true,
        poder: 5000
    };
    const printName = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(avengers.ironman, resto);
    };
    printName(avengers);
})();
(() => {
    console.log('let');
    const nombre = 'Isaac';
    console.log(nombre);
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map