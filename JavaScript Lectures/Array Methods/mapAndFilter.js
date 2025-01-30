
let arr = [1,2,3,4,5,6,7,8,9,10] ;

let map01 = arr.map((el) => {
    return el*el ;
});

let filter01 = arr.filter((el) => {
    return (el%2 == 0) ;
});

console.log(arr) ;
console.log(map01) ;
console.log(filter01) ;