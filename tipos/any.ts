(() => {
    let avenger: any = 123;

    let power;
    avenger = 'Dr Strange';

    console.log((avenger as string).charAt(2));

    avenger = 1234.45;
    console.log((<number>avenger).toFixed(2));
})()