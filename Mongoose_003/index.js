
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chat");
const methodOverride = require('method-override');


const port = 8050 ;

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use method override middleware
app.use(methodOverride('_method'));

main()
  .then(() => {
      console.log("Connection Successful...");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp02');
}

// Indeex Route
app.get("/chats" , async (req , res) => {
  let chats = await Chat.find();
  console.log(chats);
  // res.send("Working...");
  res.render("index.ejs" , { chats });
});

// new-chat Route
app.get("/chats/new" , (req , res) => {
  res.render("new.ejs");
});

// create route
app.post("/chats" , (req, res) => {
  let {from , msg , to} = req.body ;
  let newChat = new Chat ({
    from: from ,
    to: to ,
    msg: msg ,
    created_at: new Date()
  });
  // console.log(newChat);
  newChat.save()
    .then((res) => {
      console.log("Chat was saved...");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.send("Wroking...!");
  res.redirect("/chats");
});

// Edit Route
app.get("/chats/:id/edit" , async (req , res) => {
  let { id } = req.params ;
  let chat = await Chat.findById(id) ;
  res.render("edit.ejs" , { chat });
});

// Update Route
app.put("/chats/:id" , async (req , res) => {
  let { id } = req.params ;
  let { msg: newMsg } = req.body ;
  let updatedChat = await Chat.findByIdAndUpdate (
    id ,
    { msg: newMsg } ,
    { runValidators: true , new: true }
  );
  // console.log(updatedChat);
  res.redirect("/chats");
});

// Destroy Route
app.delete("/chats/:id" , async (req , res) => {
  let { id } = req.params ;
  let deletedChat = await Chat.findByIdAndDelete(id) ;
  // console.log(deletedChat) ;
  res.redirect("/chats") ;
});

app.get("/" , (req , res) => {
    res.send("Route is Working...");
});

app.listen(port , () => {
    console.log(`Server is running on Port : ${port}`);
});