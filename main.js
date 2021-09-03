"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ( ${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Aveger llamado!');
        }
        getFullName() {
            return `${this.name} (${this.realName})`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado!');
        }
        get fullName() {
            return `${this.name} - (${this.realName})`;
        }
        set fullName(name) {
            if (name.length < 4) {
                throw new Error('El nombre debe ser mayor a 3 caracteres.');
            }
            this.name = name;
        }
        getFullNamedesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('X-men', 'Logan', true);
    wolverine.fullName = 'Isaac';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map