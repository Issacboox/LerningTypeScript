type Dog = {
    name:string;
    barks: boolean;
    wags:boolean;
};

type Cat = {
    name: string ;
    purrs: boolean; 
};

type DogAndCatUnion = Dog | Cat ;

let dog: DogAndCatUnion = {
    name:"Budy",
    barks:true , 
    wags:false,
}

let cat: DogAndCatUnion = {
    name : "Tama" ,
    purrs : true ,
}

let dogAndcat:DogAndCatUnion = {
    name: "Hybrid",
    barks : false,
    wags: true ,
    purrs: true
}

// Union type can be either dog type or cat type just for ex
type stringOrNumber = number | string;

function addNumberOrString(a:stringOrNumber,b:stringOrNumber){
    if ( typeof a == "number" && typeof b == "number"){
        return a + b
    }else {
        return a.toString() + b.toString();
    }
}

console.log(addNumberOrString(5,10));
console.log(addNumberOrString("john",10));
// console.log(addNumberOrString("john",null));   << Can not do this it's not work

