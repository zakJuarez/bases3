(()=>{

    class avenger {
        name;
        power;

        constructor(name :string = 'no_name', power: number = 0){
            this.name = name;
            this.power = power;
        }
    }

    class flyingAvenger extends avenger{
        flying;
        constructor(name:string, power:number){
            super(name, power);
            this.flying = true;
        }
    }


    const Hulk = new avenger('Hulk', 9001);
    const Falcon = new flyingAvenger('Falcon', 60);

    console.log(Hulk);
    console.log(Falcon);
})()