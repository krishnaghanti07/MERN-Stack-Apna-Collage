const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

const port = 3000 ;

// app.use ((req , res, next) => {
//     console.log("Hii, I'm 1st middleware...");
//     // res.send("Middleware Finished...");
//     next()
// });

// app.use ((req , res, next) => {
//     console.log("Hii, I'm 2nd middleware...");
//     // res.send("Middleware Finished...");
//     next()
// });

const checkToken =  (req , res , next) => {
    let {token} = req.query ;
    if (token === "giveaccess") {
        next()
    }
    throw new ExpressError (401 , "Error -- Access Denied..!")
};

app.get("/api" , checkToken , (req , res) => {
    res.send("data..");
});

app.get("/" , (req , res) => {
    res.send("Hii, I'm Root...");
});

app.get("/random" , (req , res) => {
    res.send("This is an Random Page...");
});

// app.get("/wrong" , (req , res) => {
//     abcd = abcd ;
// });

// app.use("/random" , (req , res , next) => {
//     console.log("I'm only for random..");
//     next()
// });

// Custom Error-Handler
// app.use((err , req , res , next) => {
//     // console.log(err);
//     console.log("---------- Error ----------");
//     // next(err);
//     res.send(err);
// });

app.get("/err" , (req , res) => {
    abcd = abcd ;
});

app.get("/admin" , (req , res) => {
    throw new ExpressError(403 , "Access to admin is Forbidden..!");
})

app.use((err , req , res , next) => {
    let {status = 500 , message = "Some Error Occurred..!"} = err ;
    // next(err);
    res.status(status).send(message);
});

// app.use((err , req , res , next) => {
//     // console.log(err);
//     console.log("---------- Error2 Middleware ----------");
//     next(err);
// });

// // Middleware must be written in above of the request-oprations (Neither, it will not be executed)
// app.use((req , res , next) => {
//     req.time = new Date(Date.now()).toString() ;
//     console.log(req.method , req.hostname , req.path , req.time);
//     next()
// }); // Utility Middleware (Logger - Morgan)

// // 404 - Not Found (want to access some page that is not exits)
// app.use((req , res) => {
//     res.status(404).send("Error..! - Page not Found...");
// }); // add rhis at the thhe last of the file ...

app.listen(port , () => {
    console.log(`the server is listening on port : ${port}`);
});