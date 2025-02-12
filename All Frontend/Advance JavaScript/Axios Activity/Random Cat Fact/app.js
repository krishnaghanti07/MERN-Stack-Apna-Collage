
let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click" , async () => {
    // console.log("Button was clicked...");
    let fact = await getFacts();
    // console.log(fact) ;

    p.innerText = fact ;
});



let url = "https://catfact.ninja/fact" ;

async function getFacts() {
    try {
        let res = await axios.get(url);
        // console.log(res) ;
        return (res.data.fact) ;
    } catch(e) {
        console.log("Error - " , e);
        return "No fact found..." ;
    }
}