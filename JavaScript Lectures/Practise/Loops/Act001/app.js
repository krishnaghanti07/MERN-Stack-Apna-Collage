let favMovie = "avatar" ;
let guess = prompt("Enter Favourite Movie ");

while (guess !== favMovie) {
    if (guess === "quit") {
        console.log ("You Quit...") ;
        break ;
    }
    console.log ("Wrong") ;
    guess = prompt("Wrong guess, Please try again ");
}

if (guess === favMovie) {
    console.log ("Correct") ;
}