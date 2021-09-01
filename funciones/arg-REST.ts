(()=> {
    const fullName = (firstname:string, ...restArgs:string[] ) :string => {
        return `${firstname} ${restArgs.join(' ')}`;
    };

    const superName = fullName('Clark','Josep', 'Kent');

    console.log(superName);


})()