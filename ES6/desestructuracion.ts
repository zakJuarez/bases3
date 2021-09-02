(()=> {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers :Avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Robert Dawni Jr' ,
        vision: 'Paul Betanny',
        activo: true,
        poder: 5000
    };

    //Desestructuracion
    // const {poder, vision} =avengers
    // console.log(poder.toFixed(), vision.toUpperCase());

    const printName = ({ironman, ...resto}: Avengers) => {
        console.log(avengers.ironman, resto);
    }

    printName(avengers);

})()