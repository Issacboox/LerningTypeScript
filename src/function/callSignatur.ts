enum Ageunit {
    years = "years",
    months = " months"
}

type greetingFunction = (greeting:string) => string;

type Persons = {
    name : string ;
    age : number ;
    ageUnit : Ageunit ;
    country : string ;
    greet : greetingFunction;  // Can also use arrow function () => {}
}
const personss : Persons = {
    name : "Scott",
    age : 25,
    ageUnit : Ageunit.years,
    country:"USA",
    greet: (greeting:string) => {
        return `${greeting} ${personss.name}`
    },
};

function convertAgeToMonths (personss : Persons ): Persons {
    personss.age = personss.age * 12;
    personss.ageUnit = Ageunit.months ;
    return personss 

}

// console.log(convertAgeToMonths(personss))
console.log(personss.greet("Good Bye!"))
