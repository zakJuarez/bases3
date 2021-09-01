"use strict";
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Viajar en el tiempo', 'supervelocidad']
    };
    // flash = {
    //     name2: 'Otro nombre' 
    // };
    flash = {
        name: 'Clack Kent',
        age: 25,
        powers: ['Volar', 'vision de calor'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
//# sourceMappingURL=object.js.map