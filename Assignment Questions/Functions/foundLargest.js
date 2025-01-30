
function foundlargest (arr) {
    let n = arr.length ;
    let largest = "" ;
    for (let i=0 ; i<n ; i++) {
        if (arr[i].length > largest.length) {
            largest = arr[i] ;
        }
    }
    return largest ;
}

let country=["Australia","Germany","United States of America"] ;
let ans = foundlargest(country) ;
console.log(ans) ;