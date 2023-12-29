// // SingleTon


// the below are object literals



// Object.create             // constructor method
const JsUser = {
    name:"shekhar",        //key can be anything
    age:19,
    location: "pune"    ,
    email: "fodsin@io",
    isLogIn: false,     
    LastLogIn : ["monday" , "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);    //by using square notation we can access deep object within key

// console.log(typeof JsUser["email"])    // string
// console.log(typeof JsUser["age"])          //  number 
//                                         // inorder to access we use " "  as it treats as string


// JsUser.email = "zorop@gmail.com"

// Object.freeze(JsUser)          // this will prevent chagning Object 

// console.log(JsUser["email"])





// // myArray = ["h" , "i"]

// // myArray[1]



JsUser.greeting = function()
{
    console.log("Hello Js User");
}

console.log(JsUser.greeting());



