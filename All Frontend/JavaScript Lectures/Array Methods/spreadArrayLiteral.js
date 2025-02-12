
const arr = [1,2,3,4,5,6,7] ;
const odd = [1,3,5,7,9] ;
const even = [2,4,6,8,10] ;

let copyArr = [...arr] ;
console.log(copyArr) ;

let strArr = [..."Apna Collage"] ;
console.log(strArr) ;

let combine = [...odd , ...even];
console.log(combine) ;