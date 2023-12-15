let score = "10"
// let score = null
// let score = undefined 

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);      //guarentee that score is now number
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"22"  =>22
//"22abc" => NaN
//true => 1 ; false => 0

// let IsLoggedIn = 1
let IsLoggedIn = true
// let IsLoggedIn = "shekhar"
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(IsLoggedIn)
console.log(typeof IsLoggedIn)


// 1 => true;   0=> false
// " "=> false
// " Shekhar" => true


let someNumber = 44
console.log(typeof someNumber)
let stringnumber = String(someNumber)

console.log(stringnumber);
console.log(typeof stringnumber)