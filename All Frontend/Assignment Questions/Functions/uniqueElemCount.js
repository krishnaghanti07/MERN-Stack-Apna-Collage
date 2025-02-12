
function uniqueCount (str) {
    let n = str.length ;
    let final = "" ;
    for (let i=0 ; i<n ; i++) {
        if (!final.includes(str[i])) {
            final = final + str[i] ;
        }
    }
    return final ;
}

let ans = uniqueCount("abcdabcdefgggh") ;
console.log (ans) ;

