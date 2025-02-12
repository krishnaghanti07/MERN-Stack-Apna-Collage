let arr = [1 , 2 , 3 , 4] ;

let arrCopy = arr ; // They both are pointing same array

console.log(arr == arrCopy);
console.log(arr === arrCopy);

arr.push(5);
console.log(arr);
console.log(arrCopy);

arrCopy.push(6);
console.log(arr);
console.log(arrCopy);