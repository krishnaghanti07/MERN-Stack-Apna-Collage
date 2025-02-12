
let names = ["John" , "Peter" , "Karlo" , "Maria" , "kunal" , "Rohit" , "Sunil"] ;

// let winner = names[0] ;
// let firstRunnerUp = names[1] ;
// let secondRunnerUp = names[2] ;

let [winner , firstRunnerUp , secondRunnerUp , ...others] = names ;

console.log(winner) ;
console.log(firstRunnerUp) ;
console.log(secondRunnerUp) ;

console.log(others) ;