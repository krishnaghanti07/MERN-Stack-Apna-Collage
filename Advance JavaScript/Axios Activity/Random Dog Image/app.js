
let btn = document.querySelector("button");
let imag = document.querySelector("img");

let url = "https://dog.ceo/api/breeds/image/random" ;


btn.addEventListener("click" , async () => {
    let link = await getImage() ;
    console.log(link);
    imag.src = link ;
    // imag.setAttribute("src" , link);
})

async function getImage() {
    try {
        let res = await axios.get(url) ;
        // console.log(res) ;
        return (res.data.message) ;
    } catch (e) {
        console.log("Error - " , e);
        return "/"
    }
}
