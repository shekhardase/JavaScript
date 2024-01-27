const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newnums = numbers.map((num) => {return num+10})



//chainning

const newnums = numbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    // .map((num) => num+10)
    .filter((num) => num >= 40)
console.log(newnums);