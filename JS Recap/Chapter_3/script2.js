// // Methods used in strings

// let name1= `shekhar`
// console.log(name1.length);

// console.log(name1.toUpperCase());
// console.log(name1.toLocaleLowerCase());

// // slicing

// let name2 = name1.slice(2 , 4 );
// console.log(name2);


// console.log(name1.replace("s" , "a"))




let name1 = " KAKASHI "
let name2 = " AF"
console.log(name1.concat(" IS BADASS ", name1));


let friend = " Nigga  "
console.log(friend.trim());

for (const i of name1) {
    console.log(name1[i]);
}

for (let index = 0; index < name1.length; index++) {
    const element = name1[index];
    console.log(element);
}

for (const char of name1) {
    console.log(char);
}