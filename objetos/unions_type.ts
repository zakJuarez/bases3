(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: ()=>string
    };

    let myCustomerVariable: (string | number | Hero) = "Isaac";
    console.log(typeof myCustomerVariable);

    myCustomerVariable = 20;
    console.log(typeof myCustomerVariable);

    myCustomerVariable = {name: 'Bruce Wayne', age: 45, powers: ['Ninguno'] }
    console.log(typeof myCustomerVariable);
})()