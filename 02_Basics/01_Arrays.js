// //arrays

// const MyArr=  [1,2,3,4,5,6,7,8,9,10]

// console.log(MyArr[0]);        //zero based indexing

// //arrays make shallows copies    - properties share same reference point 

// const MyArr2 = new Array(1,1,2,3,4)
// console.log(MyArr2)

// //Arrays Methods

// MyArr2.push(6)
// MyArr2.push(6)
// console.log(MyArr2)

// // MyArr2.unshift(2);
// MyArr2.shift(2);
// console.log(MyArr2.includes(8));

const myarr = [14,4,5,3,1];
const newarr = myarr.join()

// console.log(myarr);
// console.log(newarr);



//slice   // splice 

console.log("A" , myarr);

const myn1 = myarr.slice(1,4);           //give separate sliced array

console.log(myn1)
console.log("B" , myarr);

console.log("c" , myarr.splice(1,4))        // splice slices main array (original array)
console.log(myarr); 