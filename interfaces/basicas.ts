(() => {
    interface Hero {
        name: string,
        age?: number,
        powers: string[],
        getName?: ()=>string
    };

    let flash : Hero = {
        name :'Barry Allen',
        age: 24,
        powers: ['Viajar en el tiempo', 'supervelocidad']        
    };

    let superMan : Hero = {
        name :'Clark Kent',
        age: 24,
        powers: ['Viajar en el tiempo', 'supervelocidad'],
        getName(){
            return this.name
        }
    };
})()