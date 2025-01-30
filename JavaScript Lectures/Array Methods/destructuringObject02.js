
const students = {
    name : "Karan" ,
    age : 17 ,
    class : 11 ,
    subjects : ["Math" , "Physics" , "Chemistry" , "Biology" , "English"] ,
    username : "#karan@007" ,
    password : "1234@abcd"
}

// let {username , password} = students ;
// console.log(username);
// console.log(password);

let obj2 =  {username: user , password: secret} = students ;
// console.log(username);
// console.log(password);
console.log(user);
console.log(secret);