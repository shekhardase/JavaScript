//  singleton objects here


// const instapp = new Object()
// ----------or---------------

instapp = {}
instapp.id = "1234abc"
instapp.name = "Sam"
instapp.isLoggedIn = true


const regularUser = {             //multiple nesting is possible 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shekhar",
            lastname: " Dase "
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);     //nesting can be accessed using dots

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }        

// const obj3 = {obj1 , obj2};        //objects in objects     //we face problem here because of nesting

const obj3 = Object.assign( {} ,obj1 , obj2);

console.log(obj3);


// console.log(instapp)



