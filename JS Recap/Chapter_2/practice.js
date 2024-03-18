/// practice questions on loops and functions


// print marks in obj

const marks = {
    subject1: Math.floor(Math.random() * 101),
    subject2: Math.floor(Math.random() * 101),
    subject3: Math.floor(Math.random() * 101),
    subject4: Math.floor(Math.random() * 101),
    subject5: Math.floor(Math.random() * 101)
};

console.log(marks);



for (let mark in marks) {
    console.log(marks[mark]);
}