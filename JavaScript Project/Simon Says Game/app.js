
let gameSeq = [] ;
let userSeq = [] ;

let btns = ["yellow" , "red" , "purple" , "green"] ;

let started = false ;
let level = 0 ;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if (started == false) {
        console.log("Game is Started....");
        started = true ;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash") ;
    setTimeout(function() {
        btn.classList.remove("flash") ;
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userflash") ;
    setTimeout(function() {
        btn.classList.remove("userflash") ;
    }, 200);
}

function levelUp() {
    userSeq = [] ;
    level++ ;
    h2.innerHTML = `Level : ${level}` ;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx] ;
    let randBtn = document.querySelector(`.${randColor}`) ;
    // console.log(randIdx) ;
    // console.log(randColor) ;
    // console.log(randBtn) ;
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn) ;
}

function checkAns(idx) {
    // console.log("Curr. Level : " , level);
    // let idx = level-1 ;

    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("Same Value ...");
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp , 1000) ;
        }
    } else {
        h2.innerHTML = `Game Over..! Your score was : <b>${level}</b> <br />Press any key to Start..` ;
        document.querySelector("body").style.backgroundColor = "red" ;
        document.querySelector("body").style.color = "white" ;
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white" ;
            document.querySelector("body").style.color = "black" ;
        }, 200);
        reset() ;
    }
}

function btnPress() {
    // console.log(this);
    let btn = this ;
    userFlash(btn) ;

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length - 1) ;
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = false ;
    gameSeq = [] ;
    userSeq = [] ;
    level = 0 ;
}