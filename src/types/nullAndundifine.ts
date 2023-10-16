// null, undifined
// let user: string;
// console.log(user);
// let saveButton = document.getElementById( elementId:"save" );
// console.log(saveButton;)

let loggedInUsername :string ;
const users = [
    {name: "Obby",age:12},
    {name:"Hina",age:23}
];

const loggedInUser = users.find((user:{age:number,name:string})=> user.name == loggedInUsername)

// console.log(loggedInUser.age)
let saveButton: HTMLElement  = document.getElementById("save")!; // add < ! > so system stop worry about it and doesnt error
 if (saveButton != null){
    //do something
 }