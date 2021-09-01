(() => {
    const fullName = (firstName: string, lastName ?: string) : string => {
        return `${firstName} ${lastName || 'no lastname'}`
    }

    const fullName2 = (firstName: string, identidad: boolean, lastName ?: string) : string => {
        return identidad ? `${firstName} ${lastName || 'no lastname'}` : 'Sin identidad'
    }

    const name = fullName('Tony', 'Stark');
    const nameCap = fullName('Capitan america');
    const nameDup = fullName2('Clac Kent',true);

    console.log(name);
    console.log(nameCap);
    console.log(nameDup);
})()
