const coding = ["js" , "Ruby" , "Java" , "Python" , "CPP"]
console.log(coding);
coding.pop("Java")
console.log(coding);



coding.forEach(function (item) {
    console.log(item);
})

console.log("--------------------------")
coding.forEach((item) => {
    console.log(item);
})


coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
})



const myCoding = {
    
}