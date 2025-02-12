const express = require("express");
const app = express();

// console.dir(app);

let port = 8050;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});


// Get Requests ....
app.get("/", (req, res) => {
  res.send("Hello I'm The Root path...");
});
// Setting-up variables...
app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let {username , id} = req.params ;
    // res.send("You contacted to The Search path...");
    htmlStr = `<h1>Welcone to the page of @${username}..!</h1>` ;
    res.send(htmlStr);
});


// Demonstrating Query-String
app.get("/search" , (req , res) => {
    // console.log(req.query) ;
    let { q } = req.query ; // For Single-Query..
    if (!q) { // if no query present
        res.send(`<h1>Nothing Searched..!</h1>`)
    }
    res.send(`<h1>Search result for query: ${q}</h1>`);
})