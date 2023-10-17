//this function is ise when detail or data is store any type can be number with string and can be return with string
function intro(name:string,age:number):string {
    return `My name is ${name} and age is ${age}`
}

const introduce = function intro(name:string,age:number):string {
    return `My name is ${name} and age is ${age}`
}

//arrow function

const intro3 = (name:string, age:number): string => {
    return `My name is ${name} and age is ${age}`
}