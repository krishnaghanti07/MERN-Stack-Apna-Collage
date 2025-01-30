
let arr = [1,3,6,2,5,3,7,5,9] ;

let max = arr[0] ;

// Using Loop //
// for (let i=0 ; i<arr.length ; i++) {
//     if (arr[i] > max) {
//         max = arr[i] ;
//     }
// }

// Using Reduce Function
max = arr.reduce((acc , ele) => {
    if (ele > acc) {
        return ele ;
    } else {
        return acc ;
    }
});

console.log(max) ;