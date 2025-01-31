let inp = document.querySelector("#text") ;
let p = document.querySelector("p") ;

inp.addEventListener("input" , (event)=> {
    console.log(event.target.value) ;
    p.innerText = event.target.value ;
});