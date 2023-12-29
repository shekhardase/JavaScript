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
const obj4 = { 6: "a", 8: "b" }
// const obj3 = {obj1 , obj2};        //objects in objects     //we face problem here because of nesting

// const obj3 = Object.assign( {} ,obj1 , obj2 , obj4);
//              empty target           all other source

//     const returntarget  = object.assign(target , source);


const obj3 = { ...obj1, ...obj2 }          //spread and print
console.log(obj3);


// console.log(instapp)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

