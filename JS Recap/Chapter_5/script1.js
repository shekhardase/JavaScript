let a = [1,2,342,5,5]

// console.log(a);   // whole array
// console.log(a[0]);      // first
// console.log(a[13]);     // undefined out of bound

// console.log(a.length);

a[4]= 2
a[0] = 0
// console.log(a);

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}
