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

        get fullName(){
            return `${this.name} - (${this.realName})`
        }

        set fullName(name: string){
            if(name.length < 4){
                throw new Error('El nombre debe ser mayor a 3 caracteres.');
            }
            this.name =name;
        }

        getFullNamedesdeXmen(){
            console.log(super.getFullName());
        }
    }

    // const wolverine = new Xmen('X-men', 'Logan', true);
    // wolverine.fullName = 'Isaac';
    // console.log(wolverine.fullName);

    // const newAverger = new Avenger('Hola', 'Mundo');
    // console.log(newAverger.getFullName());
})()