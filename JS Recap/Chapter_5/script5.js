// console.log();
// let a = [12, 12, 3, 52, 5, 3]

// console.log(a);



// creating map for a and performing simple operation on each element 
// let b = a.map((value) => {
//     console.log(value);
//     return value + 1;
// })

// console.log(b);


// let b = a.map((value , index , array) => {
//     console.log(value , index , array);
//     return value + index;
// })

// console.log(b);



// Filter 

let arr = [1, 2, 4, 5, 6, 7]

let a32 = arr.filter((a) => {
    return a < 10;
})

console.log(a32);
console.log("---------------------------");



// Reduce

let arr2 = [1, 2, 34, 5, 6, 7, 8]
console.log(arr2);
let red_function = (h1, h2) => {
    return h1 + h2;
}

let newarr3 = arr2.reduce(red_function);
console.log(newarr3);