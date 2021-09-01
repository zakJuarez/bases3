(() => {
    const Hero: [string, number, boolean] = ['Dr Strange',100,true];
    Hero[0] = 'Ironman';
    Hero[1] = 50;
    Hero[2] = false;
    console.log({Hero});
})()