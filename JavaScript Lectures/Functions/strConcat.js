
let arr = ["abcd" , "efgh" , "i" , "jkl" , "m" , "nop" , "qrst" , "uv" , "wx" , "yz"] ;

function concatArr (array) {
    let final = "" ;
    for (ele of arr) {
        final += ele ;
    }
    return final ;
}

const result = concatArr(arr) ;

console.log(result) ;