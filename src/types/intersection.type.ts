type Rabbit = {
    name : string ;
    purrs : boolean;
    color : string ;
};

type Fox = {
    name : string ;
    barks : boolean ;
    color : string ;
}

// all unique property combine with common property wit the two type
type HybridAnimal = Rabbit & Fox ;

const hybridgeAnimal:HybridAnimal = {
    name: "Max",
    color:"White",
    barks:true,
    purrs:false
}
