

const map = (array: unknown[], func: (item: unknown) => unknown[]): unknown[] => {
    //check if array is empty
    if (array.length == 0) {
      return array;
    }
  
    //Create a new arrays to correct values
    let result: unknown[] = [];
  
    //Loop through each item and call the func
    for (let i = 0; i < array.length; i++) {
      result[i] = func(array[i]);
    }
  
    //return new array
    return result;
  };
let Num = [4,5,6,7,8];
// @ts-ignore

const converted = map(Num, (Num) => Num.toString());
console.log(converted);
  
  //here generic way 

//   function map<T, U>(array: T[], func: (item: T) => U[]): U[] {
//     //check if array is empty
//     if (array.length == 0) {
//       return array;
//     }
  
//     //Create a new arrays to correct values
//     let result: U[] = [];
  
//     //Loop through each item and call the func
//     for (let i = 0; i < array.length; i++) {
//       result[i] = func(array[i]);
//     }
  
//     //return new array
//     return result;
//   }
  