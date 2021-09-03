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
        getFullNamedesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('X-men', 'Logan', true);
})();
//# sourceMappingURL=main.js.map