// const roles = ["admin","author","editor"];
//  import * as role from './role'

enum Roles {
    admin = 0,
    author = 1,
    editor = 2,
}
// import { Roles } from "./role";

type People = {
    name:string;
    email: string;
    pass : string ;
    role : Roles ; // So here mean there can be anything with up there role as i can see about that
};


const people: People = {
    name : " John ",
    email : "bra bra bra",
    pass : "dnjkdfh",
    role : Roles.editor,
}

console.log(people)

//typscript Way
// console.log(Roles.author)



