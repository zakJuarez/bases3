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

    // const printName = ({ironman, ...resto}: Avengers) => {
    //     console.log(avengers.ironman, resto);
    // }

    // printName(avengers);


    // const avengerArr = ['Capitan America', 'IronMan', 'Hulk'];
    const avengerArr: [string, boolean, number] = ['Capitan America', true, 150.5];
    // const ironman =  avengerArr[1];

    const [capitan,ironman,] = avengerArr
    // console.log({capitan,ironman});

})()