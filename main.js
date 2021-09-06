"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return `Mundo a salvo!...`;
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return `Mundo conquistado!!`;
        }
    }
    const printName = (character) => {
        console.log(character.realName);
    };
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    printName(magneto);
})();
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
})();
//# sourceMappingURL=main.js.map