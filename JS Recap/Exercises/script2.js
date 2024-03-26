
// Stone , paper , scissor game 

// let comp choose among stone paper and scissor

let elements = ["stone", "paper", "scissor"]

// let comp = elements[Range.START_TO_END]

let comp = (elements[(Math.floor(Math.random() * elements.length))]);


console.log(comp);


let you = prompt("Choose among stone , paper , scissor")

if (you == comp) {
    console.log('tie');
}

else if (you == "stone" && comp == "paper") {
    console.log('comp win ', 'comp choose -', comp);
}

else if (you == "stone" && comp == "scissor") {
    console.log('you win ', 'comp choose -', comp);
}

else if (you == "paper" && comp == "stone") {
    console.log('you win ', 'comp choose -', comp);
}
else if (you == "paper" && comp == "scissor") {
    console.log('comp win ', 'comp choose -', comp);
}
else if (you == "scissor" && comp == "paper") {
    console.log('you win ', 'comp choose -', comp);
}
else if (you == "scissor" && comp == "stone") {
    console.log('comp win ', 'comp choose -', comp);
}





