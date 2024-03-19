// array to string

let a = [1, 2, 34, 54, 5, 52, 3, 13]

let b = a.toString()

console.log(b, typeof b);

let c = a.join(" and ")
console.log(c, typeof c);
console.log(a.length);
a.pop()  // remove elemets from last
console.log(a);

console.log(a.length);


let r = a.shift()  // removes element at first and return
console.log(r);

r = a.unshift(); // adds elemnt to start of element