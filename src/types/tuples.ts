// firstname, lastname, age
let persons : [string,string,number?];

persons = ["John","Doe"];

// [
//     NumberOFStudents: Number , 
//     passing : boolean , 
//     'John','Stella'
// ]

type listOfStudents = [number,boolean, ...string[]]; // ...string[] mean that the next index here is array < array in array >

const passingStudent: listOfStudents = [3,true, "John","Stella","Mark"];
const failingStudent : listOfStudents = [1,false,"Mako"]


// Read only Array

let numbers: readonly number[] = [1,2,3];

// numbers.push(1)

type readOnlyPerson = readonly[string, string, number];

const personn: readOnlyPerson = ["John","Smith",32];

type a = Readonly<string[]>;

type c = Readonly<[string, string, number]>;

