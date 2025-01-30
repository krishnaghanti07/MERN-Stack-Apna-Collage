const max = prompt("Enter The max Number : 😊");

const random = Math.floor(Math.random() * max) + 1 ;

let guess = prompt("Guess The Number : 🫠");

while (guess != random) {
    if (guess == "quit") {
        console.log ("You Quit....");
        break ;
    }
    if (guess < random) {
        console.log ("**Hint : Your guess is too small..! , Please try again");
    } else if (guess > random) {
        console.log ("**Hint : Your guess is very large..! , Please try again");
    }
    // console.log("Wrong Guess..! Guess the number correctly : ");
    guess = prompt("Wrong Guess..! Guess the number correctly : 🤗");
}

if (guess == random) {
    console.log ("You Guess Correctly....🥰😘");
}