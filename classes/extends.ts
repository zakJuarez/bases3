(()=> {
    class Avenger{
        constructor(
            public name:string, 
            public realName:string){
            console.log('Constructor Aveger llamado!');
        }

        protected getFullName(){
            return `${this.name} (${this.realName})`
        }
    }

    class Xmen extends Avenger{
        constructor(
            public name:string, 
            public realName:string,
            public isMutant: boolean
        ){
            super(name,realName);
            console.log('Constructor Xmen llamado!');
        }

        getFullNamedesdeXmen(){
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('X-men', 'Logan', true);

    // wolverine.getFullNamedesdeXmen();

    // const newAverger = new Avenger('Hola', 'Mundo');
    // console.log(newAverger.getFullName());
})()