
const mongoose = require('mongoose');
const Chat = require("./models/chat");

main()
  .then(() => {
      console.log("Connection Successful...");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp02');
}

// let chat1 = new Chat ({
//     from: "Neha" ,
//     to: "Priya" ,
//     msg: "Send me your exam sheet..." ,
//     created_at: new Date()
// });

// chat1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

let allChats = [
    {
      from: "Arjun",
      to: "Ravi",
      msg: "Are we meeting tomorrow for the project?",
      created_at: new Date()
    },
    {
      from: "Priya",
      to: "Neha",
      msg: "Don't forget to bring the notes.",
      created_at: new Date()
    },
    {
      from: "Rohit",
      to: "Sonia",
      msg: "Check your email for the assignment file.",
      created_at: new Date()
    },
    {
      from: "Ananya",
      to: "Manish",
      msg: "Can you send the list of topics we need to cover?",
      created_at: new Date()
    },
    {
      from: "Kavya",
      to: "Vikas",
      msg: "I can't make it to the class today..",
      created_at: new Date()
    },
    {
      from: "Shweta",
      to: "Rahul",
      msg: "Let's meet at the library around 3 PM.",
      created_at: new Date()
    },
    {
      from: "Amit",
      to: "Reema",
      msg: "I've completed my part of the presentation..",
      created_at: new Date()
    }
];
Chat.insertMany(allChats);