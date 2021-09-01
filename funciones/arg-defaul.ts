(() => {
    
    const fullName = (firstName: string, lastName ?: string, upper: boolean = false) : string => {
        if(upper){
            return `${firstName} ${lastName || '---'}`.toUpperCase() ;
        }
        else{
            return `${firstName} ${lastName || '---'}` ;
        }
    }

    const fullName2 = (firstName: string, identidad: boolean, lastName ?: string) : string => {
        return identidad ? `${firstName} ${lastName || 'no lastname'}` : 'Sin identidad'
    }

    const nameDup = fullName('Clac Kent','Starck');
    console.log(nameDup);
})()
