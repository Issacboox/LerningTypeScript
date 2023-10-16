function multiByTwo(number:unknown){
    if(typeof number == "number"){
        return number * 2 ;
    }
    return "Please provide valid number"
 }

 console.log(multiByTwo(4));
 console.log(multiByTwo("John")); // it's will display NaN
