const nums = [1, 2, 3]

// const mytotal = nums.reduce(function(acc , currval) {
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc + currval
// } , 0)

const mytotal = nums.reduce((acc, curr) => acc + curr, 0)

console.log(mytotal);

const shoppingcart = [
    {
        itemname: "JS Course",
        price: 100
    },

    {
        itemname: "py course",
        price: 1000
    },
    {
        itemname: "Data scientist",
        price: 10000
    },
    {
        itemname: "AIML",
        price: 1323
    }

]


const pricetopay=shoppingcart.reduce((acc , item) => acc + item.price , 0)
console.log(pricetopay);