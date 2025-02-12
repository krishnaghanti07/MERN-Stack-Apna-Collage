
async function greet() {
    // throw "weak connection.." ;
    return "Hello..!" ;
}

greet()
.then((result) => {
    console.log("Promise was resolved...");
    console.log("result was : " , result) ;
})
.catch((err) => {
    console.log("Promise was rejected with Error : " , err);
})