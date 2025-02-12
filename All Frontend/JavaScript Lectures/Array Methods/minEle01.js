
let arr = [23,41,6,67,7,8,94,4,33,22,35] ;

let min = arr[0] ;

min = arr.reduce ((acc , ele) => {
    if (ele < acc) {
        return ele ;
    } else {
        return acc ;
    }
});

console.log(min) ;