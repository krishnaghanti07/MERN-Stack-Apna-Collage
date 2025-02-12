const express = require('express');
const path = require('path');
const app = express() ;

const port = 8050 ;

// Defining the exact path for the "Static-files"
app.use(express.static(path.join(__dirname , "public/js"))); // Static-files always will be inside the "Public-Folder"
app.use(express.static(path.join(__dirname , "public/css"))); // Static-files always will be inside the "Public-Folder"
//Setting-up the view-engine
app.set("view engine" , "ejs"); // Express internally requires 'ejs'
// Defining the exact path for the "views-folder"
app.set("views" , path.join(__dirname , "/views"));
// __dirname ==> current working directory for "index.js"

app.get("/" , (req , res) => {
    res.render('home.ejs');
});

app.get("/hello" , (req , res) => {
    res.send('Greeting you "Hello" from the "Hello-Route"...');
});

app.get("/ig/:username" , (req , res) => {
    let { username } = req.params ;
    const instaData = require("./data.json");
    const data = instaData[username] ;
    // console.log(data) ;
    if (data) {
        res.render("instagram.ejs" , { data });
    } else {
        res.render("error.ejs");
    }

    // const followers = ["adam" , "bob" , "steve " , "abc" , "john" , "kamal"] ;
    // let { username } = req.params ;
    // // console.log(username);
    // res.render("instagram.ejs" , { username , followers });
});

app.get("/rolldice" , (req , res) => {
    // assume "diceVal" coming from Data-Base
    let diceVal = Math.floor(Math.random() * 6) + 1 ;
    // res.render('rolldice.ejs' , {num: diceVal}); // passing Data to EJS as Object (Key-Value pair)
    res.render('rolldice.ejs' , { diceVal }); // passing Data to EJS as Object (Key-Value pair)
});

app.listen(port , () => {
    console.log(`Server is listening on port : ${port}`);
});