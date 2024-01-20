// //for of 

// // ["" , "" , ""]


// const arr = [1, 2, 34, 5]

// for (const val of arr) {
//     console.log(val);
// }


// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is *${greetings}`);
// }


//maps
const map = new Map()
map.set('in', 'India')
map.set('Us', 'United states')
map.set('IN', 'india')
// console.log(map)

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}



// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }