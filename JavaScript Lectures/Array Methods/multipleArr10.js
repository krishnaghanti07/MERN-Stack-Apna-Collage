
let arr = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 10]  ;

let check = arr.every ((ele) => {
    return (ele % 10 == 0) ;
});

console.log(check) ;