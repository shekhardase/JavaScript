let a= [1,24,5,6,7,8,24,5,36,432,25,2356,6,246]
// delete a[0]  // delete
// //delete does not affect the length 
// console.log(a);

// // concat  join arrays

// let b = [0,0,9,99,9,9,0,0,0,0,0]

// console.log(a.concat(b)); // does not change existing array
a.sort();  // alphabatically sorting array
console.log(a);



let compare = (a,b)=>
{
    return b - a
}

a.sort(compare)
console.log(a);

console.log(a.reverse); 

