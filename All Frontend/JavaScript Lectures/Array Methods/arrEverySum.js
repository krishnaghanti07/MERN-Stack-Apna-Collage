
let arr = [1,2,3,4,5,6,7,8,9,10] ;

let every01 = arr.every((el) => {
    return (el%2 == 0) ;
});

let some01 = arr.some((el) => {
    return (el%2 == 0) ;
});

console.log(arr) ;
console.log(every01) ;
console.log(some01) ;