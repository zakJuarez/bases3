(() => {
    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman : Avenger = {name: 'Ironman', weapon: 'Armorsuir'};
    const captainAmerica : Avenger = {name: 'Capital America', weapon: 'Shield'};
    const thor : Avenger = {name: 'Thor', weapon: 'Mholnir'};

    const avengers = [ironman, captainAmerica, thor];

    // for (const avenger of avengers) {
    //     console.log({avenger});
    // }
})()