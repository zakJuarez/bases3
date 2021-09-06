(()=> {

    interface Xmen{
        name: string;
        realName: string;
        mutantPower(id:number):string;
    }

    interface Human{
        age: number;

    }

    class  Mutan implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;
        mutantPower(id:number){
            return this.name + ' ' + this.realName;
        }
    }

})()