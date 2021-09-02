"use strict";
(() => {
    class avenger {
        constructor(name = 'no_name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }
    class flyingAvenger extends avenger {
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }
    const Hulk = new avenger('Hulk', 9001);
    const Falcon = new flyingAvenger('Falcon', 60);
    console.log(Hulk);
    console.log(Falcon);
})();
(() => {
    const avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Robert Dawni Jr',
        vision: 'Paul Betanny',
        activo: true,
        poder: 5000
    };
    const avengerArr = ['Capitan America', true, 150.5];
    const [capitan, ironman,] = avengerArr;
})();
(() => {
    const ironman = { name: 'Ironman', weapon: 'Armorsuir' };
    const captainAmerica = { name: 'Capital America', weapon: 'Shield' };
    const thor = { name: 'Thor', weapon: 'Mholnir' };
    const avengers = [ironman, captainAmerica, thor];
})();
(() => {
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map