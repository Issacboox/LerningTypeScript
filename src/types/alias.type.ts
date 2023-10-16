type Article = {
    author : string ;
    content : string ;
    title : string ;
    image? : string ; //optional if type ? after object
}

let articles:Article = {
    author : "Me",
    content: "Hi",
    title : "Im the problem is me",
};

let post:Article = {
    author : "Another one",
    content: "Hi",
    title : "Im the problem is me",
}
type Caterer = {
    name:string ;
    address:string ;
    phone:number;
}

type Airplan = {
    model:string;
    flightNumber:string;
    timeOfDeparture:Date;
    timeOfArrival:Date;
    carterer:Caterer;
}

const airplan:Airplan = {
    model: "Airbus A380",
    flightNumber : "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    carterer : {
        name : "Special Food Ltd.",
        address : "Bangkok",
        phone : 123456789
    },
};