// let smallImages = document.getElementsByClassName("oldImg") ;

// for (let i=0 ; i<smallImages.length ; i++) {
//     console.dir(smallImages[i]);
// }




let objects = document.querySelectorAll(".box ul li a") ;

// for (let i=0 ; i<objects.length ; i++) {
//     objects[i].style.color = "yellow" ;
// }

for (obj of objects) {
    obj.style.color = "green" ;
}