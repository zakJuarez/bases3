(() => {
    abstract class Mutante{
        constructor(public name: string, public realName: string){

        }
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return `Mundo a salvo!...`;
        }
    }

    class Villian extends Mutante{
        conquistarMundo(){
            return `Mundo conquistado!!`;
        }
    }

    const printName = (character : Mutante )=>{
        console.log(character.realName);
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    printName(magneto);
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
})()