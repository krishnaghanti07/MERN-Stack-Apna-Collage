let btn = document.querySelector("button");
let url = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    getColleges(country);
});

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        console.log(res.data);
    } catch (e) {
        console.log("Error - ", e);
    }
}
