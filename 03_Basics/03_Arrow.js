// // const user = {
// //     username: "shekhar",
// //     price: 111,
// //     welcomeMessage: function () {
// //         console.log(`${this.username}, welcome to website`);
// //         console.log(this);
// //     }

// // }

// // // user.welcomeMessage()
// // // user.username = " sam "
// // // user.welcomeMessage()


// // console.log(this);                 //node mai empty context dega


// // function chai(){
// //     let username = " shekhar "
// //     console.log(this.username);          // context undefined  functions ke ander nhi chelga
// // }

// // chai()


// // const chai = () => {
// //     let username = " shekhar "
// //     console.log(this)
// // }

// // chai()

// // const addtwo = (n1, n2) => {              //implicit return 
// //     return n1 + n2; 
// // }

// // const addtwo = (n1, n2) =>  n1 + n2;            //explicite return 
// // const addtwo = (n1, n2) =>  (n1 + n2);

// const addtwo = (n1 , n2 ) => ({username: "shekhar"})

// // addtwo(3,4)

// console.log(addtwo(1, 1))

// const myarray = [1,2,3,4]
// myarray.forEach(() => ())

