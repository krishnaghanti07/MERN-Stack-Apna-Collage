let buttons = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert("Button was clicked..!");
// }

function sayHello() {
    alert("Hello Krishna..!");
}

function sayName() {
    alert("Apna Collage..!");
}

function mousEntr() {
    console.log("You Enter inside a Button..!");
}

for (btn of buttons) {
    // btn.onclick = sayHello ;
    // btn.onclick = sayName ;       // We can't create multiple in-line events on a single object
    // btn.onmouseenter = mousEntr;

btn.addEventListener('click', sayHello);  // we can add multiple event-listener on a single object
btn.addEventListener('click', sayName);
btn.addEventListener('mouseenter', mousEntr);
}