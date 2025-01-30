
function call (...args) { // arguments
    for (let i=0 ; i<args.length ; i++) {
        console.log(`You gave us : ${args[i]}`) ;
    }
}

call (1,2) ;



function defaultArgs (a , b , c , d) {
    console.log(arguments) ; // It's actually a default collection of JS
    console.log(arguments.length) ;
}

defaultArgs(1,2,3) ;
defaultArgs() ;