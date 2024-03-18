// functions

function sum(a, b) {
    console.log('done');
    return a + b;
}
console.log(sum(5, 10)); // Output: 15

function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4)); // Output: 12

function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('John')); // Output: Hello, John!

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(6)); // Output: true

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateCircleArea(5)); // Output: 78.53981633974483




// arrow function

const divide = (a, b) => {
    return a / b
}

console.log(divide(4, 2));


function call() {
    console.log("Hello NIGA");
}
call()


let call2 = () => {
    console.log("Hello nigro again");
}
call2()


let addmore = (a, b, c) => {
    return a + b + c;
}
console.log(addmore(1, 2, 3));