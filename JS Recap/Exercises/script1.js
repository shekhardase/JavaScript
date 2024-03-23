
// telll greater or smaller
// score = 100 - no . of guess



console.log("There will be random number between 1 to 100");

let number = Math.floor(Math.random() * 101);

let i = 0;
function guess(number) {
    let a = prompt("Enter the number you have guessed");
    a = parseInt(a);

    if (a === number) {
        console.log("You have entered the correct number");
        return;
    } else if (a > number) {
        console.log("The number you've entered is greater than the actual number");
    } else if (a < number) {
        console.log("The number you've entered is smaller than the actual number");
    }

    i++;
    guess(number);
}

guess(number);


console.log("SO your score is - " , 100 - i);