let a = prompt("Hello ur age ? ")
console.log("UR age is ", a);
console.log(typeof a)


a = Number.parseInt(a) // converting string to number

console.log(typeof a);


if (a > 0) {
    alert("This is valid age")
}

else if (a < 9) {
    alert("Ur a kid ")
}

else if (a > 9 && a < 18) {
    alert("After 18")
}

else {
    alert("This is invalid age")
}

// -------------------------------------


// switch statements
let age = prompt("Enter your age");

age = Number.parseInt(age);
switch (age) {

    case 18:
        console.log("One more year till you can drive");
        break;

    case 19:
        console.log("You can drive now!");
        break;

    default:
        if (age < 18) {
            console.log("You are too young!");
        } else {
            console.log("Please enter a valid age.");
        }
}



///////////////////////////////////////////////////

// Ternary operators   ? 

let marks = 199;

(marks  > 150 ) ? "Pass" : "Fail"
