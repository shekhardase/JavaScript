/// practice questions on loops and functions


// print marks in obj

const marks = {
    subject1: Math.floor(Math.random() * 101),
    subject2: Math.floor(Math.random() * 101),
    subject3: Math.floor(Math.random() * 101),
    subject4: Math.floor(Math.random() * 101),
    subject5: Math.floor(Math.random() * 101)
};


for (let i in marks) {
    console.log(i, marks[i]);
}

// console.log(marks);



// for (let mark in marks) {
//     console.log(marks[mark]);
// }

// for (let index = 0; index < marks.length; index++) {
// console.log(marks.Object.keys(marks)[index]);
// console.log(Object.keys(marks)[index]);
// }


// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log(Object.keys(marks)[i], " ", marks[Object.keys(marks)[i]]);
// }


// q3 

// let number = 109;

// let i

// while (number != i) {
//     i = prompt("enter a number");
// }

// console.log("Entered number is correct");


// find mean

let mean = (a, b, c, d) => {
    console.log((a + b + c + d) / 4);
}

mean(1, 1, 1, 1)