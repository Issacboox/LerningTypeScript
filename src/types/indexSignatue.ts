type Airplane = {
    flightNumber : string ;
    airplaneModel : string ;
    dateOfDepature : string ;
    timeOfDeparture : string ;
    from : string ;
    to : string ;
    seats : {
        // orderProperty:string;
        [key: string] : string; //incase i want to change orderProperty to number I can to that 
    };                          //because key is string but if need to change you can just put | number after string in key first
}

const airPlane:Airplane = {
    flightNumber : "SG102",
    airplaneModel : "A380", 
    dateOfDepature : "01/12/2022",
    timeOfDeparture  : "23:10",
    from : "JFK",
    to  :"DCA",
    seats: {
        "10A" : "John Doe",
        "11A" : "MAruko",
    }
}