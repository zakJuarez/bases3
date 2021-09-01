(() => {
    const error = (message : string): never => {
        throw new Error(message);//Never no debe tener un punto alcanzabel en el codigo
    };
    error('Auxilio!');
    console.log('Hola mundo');
})()