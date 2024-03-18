let name1 = "shekhar"
let name2= 'shekhar'

console.log(name1.length);
console.log(name2.length);


for (let i = 0; i < name1.length; i++) {
    const element = name1[i];
    console.log(element);
}

// template literals

let b1 = " Promod"
let b2 = "Niggu"

let sentence = `${b1} is ${b2}`
console.log(sentence);


// Escape sequence characters

let fruit = 'bana \'ba'
console.log(fruit);


// let hou = " soioienfw \n 3333"
// let hou = " soioienfw \t 3333"
let hou = " soioienfw \r 3333"
console.log(hou);

