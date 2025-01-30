
let arr = 
[{
    name : "Aman" , 
    marks : 95
    
} , {
    name : "Shraddha" , 
    marks : 93
} , {
    name : "Rohit" , 
    marks : 78
}];

arr.forEach((el) => {
    console.log(`${el.name} got ${el.marks} marks`)
});