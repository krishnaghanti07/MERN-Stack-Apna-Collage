// const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema ;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String ,
        required: true ,
    }
});

// set passportLocalMongoose as plugin to the User
userSchema.plugin(passportLocalMongoose);  
// (it automatically adds hashing, username, salting, hashed-password)

module.exports = mongoose.model("User" , userSchema);