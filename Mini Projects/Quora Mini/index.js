const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require('method-override');

const port = 8050 ;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
// override with POST having ?_method=PATCH
app.use(methodOverride('_method'));

app.set("view engine" , "ejs");

app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));

let posts = [
    {
        id : uuidv4() ,
        username : "Krishna" ,
        content : "I Love Coding..!"
    } ,
    {
        id : uuidv4() ,
        username : "Minnu" ,
        content : "I want to be an Engineer..!"
    } ,
    {
        id : uuidv4() ,
        username : "Rahul" ,
        content : "Dream Big, Achieve More..!"
    } ,
    {
        id : uuidv4() ,
        username : "Pappu" ,
        content : "Life is a journey, Not a race..!"
    } ,
    {
        id : uuidv4() ,
        username : "Mahi" ,
        content : "Archary is my Passion..!"
    } ,
]

app.get("/posts" , (req , res) => {
    // res.send("Server is working fine....");
    res.render("index.ejs" , { posts });
});

app.get("/posts/new" , (req , res) => {
    res.render("new.ejs");
});

app.post("/posts" , (req , res) => {
    // console.log(req.body);
    let {username , content} = req.body ;
    // Creating new ID
    let id = uuidv4() ;
    posts.push({ id , username , content });
    // res.send("Post added successfully...!");
    res.redirect("/posts");
});

app.get("/posts/:id" , (req , res) => {
    let { id } = req.params ;
    // console.log(id) ;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("Request Working...");
    res.render("show.ejs" , { post });
});

app.patch("/posts/:id" , (req , res) => {
    let { id } = req.params ;
    let newContent = req.body.content ;
    // console.log(id) ;
    // console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent ; // Fetchinh & updating content to new-content
    console.log(post);
    // res.send("Patch request working...");
    res.redirect("/posts");
});

app.get("/posts/:id/edit" , (req , res) => {
    let { id } = req.params ;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs" , { post });
});

app.delete("/posts/:id" , (req , res) => {
    let { id } = req.params ;
    posts = posts.filter((p) => id !== p.id);
    // res.send("Successfully Deleted...!");
    res.redirect("/posts");
});

app.listen(port , () => {
    console.log(`Listening to port : ${port}`);
});