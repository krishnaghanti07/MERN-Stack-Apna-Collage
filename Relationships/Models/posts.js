const mongoose = require('mongoose');
const { Schema } = mongoose ;

main()
    .then(() => console.log("connection successful..!"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo01");
}

const userSchema = new Schema ({
    username: String ,
    email: String ,
});

const postSchema = new Schema({
    content: String ,
    likes: Number ,
    user: {
        type: Schema.Types.ObjectId ,
        ref: "User" ,
    },
});

const User = mongoose.model("User" , userSchema);
const Post = mongoose.model("Post" , postSchema);

// const addData = async() => {
//     let user1 = new User({
//         username: "Mohit Dev" ,
//         email: "mohit@gmail.com" ,
//     });

//     let post1 = new Post({
//         content: "Hello There.. I'm Mohit.." ,
//         likes: 13 ,
//     });

//     post1.user = user1 ;

//     await user1.save();
//     await post1.save();
// };
// addData();

// const addData = async() => {
//     let user1 = await User.findOne({username: "Mohit Dev"});

//     let post2 = new Post({
//         content: "Bye Bye Guys.. I'll be back.." ,
//         likes: 17 ,
//     });

//     post2.user = user1 ;
//     await post2.save();
// };
// addData();

const getData = async() => {
    let result = await Post.findOne({}).populate("user" , "username");
    console.log(result);
};
getData();