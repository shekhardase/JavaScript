// //Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getUTCMilliseconds());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

let myCreatedDate = new Date()

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());
// // console.log();


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now() /1000);
// console.log(Math.floor(Date.now()/1000));



let NewDate = new Date()
// console.log(NewDate.getDay());

NewDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ''
})
