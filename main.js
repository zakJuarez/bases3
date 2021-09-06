"use strict";
(() => {
    ;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Viajar en el tiempo', 'supervelocidad']
    };
    let superMan = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Viajar en el tiempo', 'supervelocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: 'Isaac',
        age: 25,
        address: {
            id: 123,
            zip: 'asdasd',
            city: 'New Mexico'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map