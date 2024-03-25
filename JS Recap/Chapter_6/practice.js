
let age = prompt("Enter your age: ");
age = parseInt(age);

if (isNaN(age)) {
    alert("Invalid age. Please enter a valid number.");
} else {
    if (age >= 18) {
        alert("You can drive.");
    } else {
        alert("You are not old enough to drive.");
    }
}


const setPromptAgain = confirm("Do you want to set the prompt again?");

if (setPromptAgain) {
    let age = prompt("Enter your age: ");
    age = parseInt(age);

    if (isNaN(age)) {
        console.error("Invalid age. Please enter a valid number.");
    } else {
        if (age >= 18) {
            alert("You can drive.");
        } else {
            alert("You are not old enough to drive.");
        }
    }
}
// setPromptAgain = confirm("Do you want to set the prompt again?");


if (age > 4) {
    window.location.href = "https://www.google.com";
}