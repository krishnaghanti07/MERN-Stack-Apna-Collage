const express = require('express');
const app = express();

const port = 8050 ;

// to parse data in such readable format that "Express" will understand 
app.use(express.urlencoded({ extended: true })); // Parse "url-encoded" data
app.use(express.json()); // Parse "json" data

app.get("/register" , (req , res) => {
    // Accessing the incoming data from "Query-String" -- for "get-response"
    let {user , password} = req.query ;
    res.send(`Standerd GET response... Welcome ${user}..👋🏻`);
});

app.post("/register" , (req , res) => {
    // Accessing the incoming data from "Request-Body" -- for "post-response"
    let {user , password} = req.body ;
    // console.log(req.body);
    res.send(`Standerd POST response... Welcome ${user}..👋🏻`);
});

app.listen(port , () => {
    console.log(`Server is running on port : ${port}`);
});