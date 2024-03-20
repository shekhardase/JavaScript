// array loops

let a = [1, 2, 3, 4, 5, 6, 7, 8, 12, 4, 4, 132, 34]

for (let i = 0; i < a.length; i++) {
    // const element = a[i];
    console.log(a[i]);

}

console.log("----------End-------------");



//foreach loop
a.forEach((i) => {
    console.log(i * i);
})


// array.from

let name1 = 'shekhar'

let arr = Array.from(name1)
console.log(arr);



// for of

let b = [0,0,0,0,0,0,0,0]

for(let i of b)
{
    console.log(b[i]);
}


// for in loop
let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}