function intro1(name:string,age:number,country?:string):string {
    if(country){
    return `My name is ${name} and age is ${age} I live in ${country}`;

    }
    
    return `My name is ${name} and age is ${age}`;
}

console.log(intro1("John",35));
console.log(intro1("John",35,"Thailand"));
