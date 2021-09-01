(()=> {
    const addNumbers = (a: number, b: number) => a +b;

    const saludar = (name:string) : string => `Hola ${name}` ;

    const salvarElMundo = () => `El mundo está salvado`;

    

    // myFunction = 10;

    //? let myFunction: (y: number, z: number) => number;
    //? myFunction = addNumbers;
    //? console.log(myFunction(1,2));

    //* let myFunction: (y: string) => string;
    //* myFunction = saludar;
    //* console.log(myFunction('Isaac'));

    
    // let myFunction: () => void;
    // myFunction = salvarElMundo;
    // console.log(myFunction());
})()