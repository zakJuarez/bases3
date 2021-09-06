namespace Validations{
    export const validaText = (text:string) :boolean => {
        return (text.length > 3) ? true:false;
    }

    export const validaDate = (myDate: Date) : boolean => {
        return (isNaN(myDate.valueOf())) ? true:false;
    }
}

console.log(Validations.validaText('Isaac'));
console.log(Validations.validaDate())