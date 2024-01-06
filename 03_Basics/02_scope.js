
// // let a   = 100


// // if(true)
// // {
// //     let a = 10             //scope limited
// //     const b = 20           //scope limited
// //     // var c = 40 //or             //ye baher ayega
// //     c =40
// // }


// // console.log(a)
// // // console.log(b)
// // console.log(c)



// // -----------------------------------------------------------------

// // function one() {
// //     const usernmae  = " shekhar "


// //     function two() {
// //         const website = " youtube "
// //         console.log(usernmae);
// //     }

// //     // console.log(website)              nhi chalega


// //     two()
// // }

// // one()

// if(true)
// {
//     const usernmae = " shekhar "
//     if(usernmae == " shekhar ")
//     {
//         const website = "youtube"
//         console.log(usernmae+website)
//     }
//     // console.log(website)             error not accessable
// }

// // console.log(usernmae)


// ===============interesting==========================


function addone(num)
{
    return num+1;
}


// addone(5)           // will not print   just call not print command
console.log(addone(5))


addtwo(5)                        // error later discussed in hoisting 
const addtwo = function(num)
{
    return num+2;
}
