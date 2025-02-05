
let btn = document.querySelector("button");
let p = document.querySelector("p") ;

const url = "https://icanhazdadjoke.com/" ;

btn.addEventListener("click" , async () => {
    let joke = await getJokes() ;
    // console.log(joke) ;
    p.innerText = joke ;
});

async function getJokes() {
    try {
        // Passing Headers to Axios-request
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url , config);
        return (res.data.joke);
    } catch (err) {
        console.log("Error - " , err) ;
        return "No jokes found..." ;
    }
}