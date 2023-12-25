const mc = ["naruto" , "luffy" , "Zoro"]
const dc = ["batman" , "Joker" , "Flash"]

// mc.push(dc)
// console.log(mc);            //isne yaha array ko as a element leliya

// console.log(mc[3][1])

// mc.concat(dc)
// console.log(mc);

// const AllCh = mc.concat(dc)
// console.log(AllCh);


const all_new_character = [... mc , ...dc]    //.. . karne se har ek element ko individually count kiya
console.log(all_new_character);

const another_array = [1,2,3,[4,5,6],7,[2,6436,2,],[23]]

const real_array = another_array.flat(Infinity) ;          //flat array ko spread out karga

console.log(real_array);

console.log(Array.isArray("shekhar"))

let s1 = 1
let s2 = 2 
let s3 = 4

console.log(Array.of(s1,s2,s3))

