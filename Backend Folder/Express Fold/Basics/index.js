const express = require('express');
const app = express();

// console.dir(app);

let port = 8050 ;

app.listen(port , ()=> {
    console.log(`App is running on port ${port}`);
});

// Get Requests ....
app.get("/" , (req , res) => {
    res.send("You contacted to The Root path...");
});
app.get("/search" , (req , res) => {
    res.send("You contacted to The Search path...");
});
app.get("/help" , (req , res) => {
    res.send("You contacted to The Help path...");
});

// Wild-Card (can be anything) (execute if above-paths are not execute)
app.get("*" , (req , res) => {
    res.send("This path doesn't exist...");
});


// Get Requests ....
app.post("/" , (req , res) => {
    res.send("You send apost request to The Root path...");
});

// //Middlewares
// app.use((req , res) => {
//     // console.log(req);
//     console.log("Request Received...");
//     res.send("This is a basic Responce...");
// });