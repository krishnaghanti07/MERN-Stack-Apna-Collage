
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chat");
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError");

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
  await mongoose.connect('mongodb://127.0.0.1:27017/FakeWhatsapp002');
}

// Index Route
app.get("/chats" , asyncWrap(async (req , res) => {
  let chats = await Chat.find();
  console.log(chats);
  // res.send("Working...");
  res.render("index.ejs" , { chats });
}));

// new-chat Route
app.get("/chats/new" , (req , res) => {
  // throw new ExpressError (404 , "Page Not Found..!");
  res.render("new.ejs");
});

// create route
app.post("/chats" , asyncWrap(async (req, res) => {
  let {from , msg , to} = req.body ;
  let newChat = new Chat ({
    from: from ,
    to: to ,
    msg: msg ,
    created_at: new Date()
  });
  // console.log(newChat);
  await newChat.save()
  // res.send("Wroking...!");
  res.redirect("/chats");
}));

function asyncWrap(fn) {
  return function (req , res , next) {
    fn(req , res , next).catch((err) => next(err)) ;
  } ;
}

// NEW - Show Route
app.get("/chats/:id" , asyncWrap(async (req , res , next) => {
  let { id } = req.params ;
  let chat = await Chat.findById(id);
  if (!chat) { // if chat not found (if passed wrong id)
    next (new ExpressError (404 , "Chat Not Found..!"));
  }
  res.render("edit.ejs" , { chat });
}));

// Edit Route
app.get("/chats/:id/edit" , asyncWrap(async (req , res) => {
  let { id } = req.params ;
  let chat = await Chat.findById(id) ;
  res.render("edit.ejs" , { chat });
}));

// Update Route
app.put("/chats/:id" , asyncWrap(async (req , res) => {
  let { id } = req.params ;
  let { msg: newMsg } = req.body ;
  let updatedChat = await Chat.findByIdAndUpdate (
    id ,
    { msg: newMsg } ,
    { runValidators: true , new: true }
  );
  // console.log(updatedChat);
  res.redirect("/chats");
}));

// Destroy Route
app.delete("/chats/:id" , asyncWrap(async (req , res) => {
  let { id } = req.params ;
  let deletedChat = await Chat.findByIdAndDelete(id) ;
  // console.log(deletedChat) ;
  res.redirect("/chats") ;
}));

app.get("/" , (req , res) => {
    res.send("Route is Working...");
});

const handleValidationError = (err) => {
  console.log("This was a validtion error. Please follow rules..!");
  console.dir(err.message);
  return err ;
}

app.use((err , req , res , next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

// Error Handling Middleware
app.use((err , req , res , next) => {
  let {status=500 , message="Some Error Occurred..!"} = err ;
  res.status(status).send(message) ;
});

app.listen(port , () => {
    console.log(`Server is running on Port : ${port}`);
});