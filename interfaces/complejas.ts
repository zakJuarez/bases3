(() => {

    interface Client {
        name:string;
        age?: number;
        address: Address;
        getFullAddress (id : string ): string;
    }

    interface Address{
        id: number;
        zip:string;
        city: string;
    }

    const client :Client = {
        name :'Isaac',
        age: 25,
        address:{
            id: 123,
            zip: 'asdasd',
            city: 'New Mexico'
        },
        getFullAddress(id:string){
            return this.address.city;
        }
    }

})()