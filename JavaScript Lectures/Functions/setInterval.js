console.log("Implementing Set-Interval ...");

let id1 = setInterval(() => {
    console.log("Hello World ...");
} , 2000) ;

let id2 = setInterval(() => {
    console.log("Apna Collage ...");
} , 3000) ;

// clearInterval(id1) ;
// clearInterval(id2) ;

setTimeout(() => {
    clearInterval(id1) ; 
}, 6000);