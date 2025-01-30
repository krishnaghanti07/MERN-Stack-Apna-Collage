
const data = {
    name : "Krishna Ghanti" ,
    email : "krishna123@gmail.com" ,
    password : "abcd@1234" ,
} ;

let dataCopy = {...data , id: 123 , country: "India"} ;

console.log(dataCopy) ;

let obj2 = { ..."Hello World"} ;
console.log(obj2) ;