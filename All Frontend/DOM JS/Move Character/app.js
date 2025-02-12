
let inp = document.querySelector("input");

inp.addEventListener("keydown" , (event) => {
    // console.log(`Code = ${event.code}`); // ArrowUp , ArrowDown , ArrowLeft , ArroeRight

    if (event.code == "ArrowUp") {
        console.log("Character Moves Forward...");
    } else if (event.code == "ArrowDown") {
        console.log("Character Moves Backward...");
    } else if (event.code == "ArrowLeft") {
        console.log("Character Moves Left...");
    } else if (event.code == "ArrowRight") {
        console.log("Character Moves Right...");
    }
});