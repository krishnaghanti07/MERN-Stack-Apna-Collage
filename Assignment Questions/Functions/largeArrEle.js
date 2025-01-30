
function largeArrElem (a) {
    arr = [] ;
    for (let i=a+1 ; i<=a+5 ; i++) {
        arr.push(i) ;
    }
    return arr ;
}

let ar = largeArrElem(7) ;
console.log(ar) ;