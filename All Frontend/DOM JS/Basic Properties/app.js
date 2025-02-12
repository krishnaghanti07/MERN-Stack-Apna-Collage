// let smallImages = document.getElementsByClassName("oldImg") ;

// for (let i=0 ; i<smallImages.length ; i++) {
//     console.dir(smallImages[i]);
// }




// let objects = document.querySelectorAll(".box ul li a") ;

// // for (let i=0 ; i<objects.length ; i++) {
// //     objects[i].style.color = "yellow" ;
// // }

// for (obj of objects) {
//     obj.style.color = "green" ;
// }




let para = document.createElement('p');
let body = document.querySelector('body');
body.appendChild(para) ;
para.innerText = "Hey I'm Red...!" ;
para.classList.add('red') ;


let h4 = document.createElement('h3');
body.appendChild(h4) ;
h4.innerText = "I'm Blue h3...!" ;
h4.classList.add('blue');

let div = document.createElement('div');
body.appendChild(div) ;
div.classList.add('div');

let h1 = document.createElement('h1');
div.appendChild(h1) ;
h1.innerText = "I'm in a div";

let p = document.createElement('p');
div.appendChild(p) ;
p.innerText = "ME TOO!";