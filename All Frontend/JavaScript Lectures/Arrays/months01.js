
let months = ["january" , "july" , "march" , "august"] ;

months.shift() ;
let b = months.shift() ;
months.unshift("june") ;
months.unshift(b) ;


console.log(months) ;