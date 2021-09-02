"use strict";
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
    for (const avenger of avengers) {
        console.log({ avenger });
    }
})();
(() => {
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map