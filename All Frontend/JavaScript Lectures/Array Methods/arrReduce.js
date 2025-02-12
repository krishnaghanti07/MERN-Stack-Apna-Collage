
let arr = [1 , 2 , 3 , 4] ;

let finalAns = arr.reduce((acc , ele) => {
    console.log(acc) ;
    return (acc + ele) ;
});

console.log(finalAns);