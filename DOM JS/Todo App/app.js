
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click" , () => {
    let item = document.createElement("li");
    item.innerText = input.value ;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete" ;
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn) ;
    ul.appendChild(item) ;
    input.value = "" ;
});

// let deleteBtns = document.querySelectorAll(".delete");
// for (deleteBtn of deleteBtns) {
//     deleteBtn.addEventListener("click" , function() {
//         let par = this.parentElement ;
//         par.remove();
//         // console.log(par) ;
//     })
// }


// Event Delegation

ul.addEventListener("click" , function(event) {
    // console.log(event.target.nodeName) ;
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement ;
        listItem.remove();
        // console.log("listItem");
        // console.log("Delete Item");
    }
})