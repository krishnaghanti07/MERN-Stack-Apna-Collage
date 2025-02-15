// Requiring Mongoose
const mongoose = require('mongoose');

// connect mongoose with MongoDB data-base
// mongoose.connect('mongodb://127.0.0.1:27017/test001');

main()
  .then(() => {
      console.log("Connection Successful...");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test001');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Creating Schema for models
const userSchema = new mongoose.Schema ({
    name : String ,
    email : String ,
    age : Number
});

// Creating model for collection 
const User = mongoose.model("User" , userSchema);
// const Employee = mongoose.model("Employee" , userSchema);

// // Creating Single object for Model
// // insert-One()
// const user2 = new User ({
//     name: "Eve" ,
//     email : "eve@google.com" ,
//     age : 42
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// // Creating Multiple object for Model
// // insert-Many()
// User.insertMany ([
//     {name: "Tony" , email: "tony@gmail.com" , age: 50} ,
//     {name: "Peter" , email: "peter@gmail.com" , age: 30} ,
//     {name: "Bruce" , email: "bruce@gmail.com" , age: 43} 
// ]).then((res) => {
//     console.log(res);
// });



// // Find Operation on Data-Base

// // Find all the Users
// User.find( {} )
//   .then((res) => {
//     console.log(res);
//   });

// // Find all the Users who's age is greater than 47
// User.find({ age: {$gt: 47} })
//   .then((res) => {
//     console.log(res);
//   });

// // Find a single Users who's age is greater than 47
// User.findOne({ age: {$gt: 47} })
//   .then((res) => {
//     console.log(res);
//   });

// // Find a Users on the basis of his 'Id'
// User.findById('67aeed1abb91ec21caaf3d9f')
//   .then((res) => {
//     console.log(res);
//   });



// // Find Operation on Data-Base

// // Update a single Users on the Data-Base
// User.updateOne({ name: "Bruce" } , { age: 49 })
//   .then((res ) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Update Multiple Users on the Data-Base
// User.updateMany({ age: {$gt: 48} } , { age: 55 })
//   .then((res ) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Find the first user matching with the given condition and Update...
// User.findOneAndUpdate({ name: "Bruce" } , { age: 49 }) // It'll show the old document
//   .then((res ) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Find the first user matching with the given condition and Update...
// User.findOneAndUpdate({ name: "Bruce" } , { age: 43 } , { new: true }) // It'll show the new updated document
//   .then((res ) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Find the user matching with the given 'Id' and Update...
// User.findByIdAndUpdate('67aeeb65f3fa07c5d79c5fe4' , { age: 43 } , { new: true }) // It'll show the new updated document
//   .then((res ) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// // Delete Operation on Data-Base

// // Delete a single user on the basis of some condition
// User.deleteOne({ name: "Bruce" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Delete multiple users on the basis of some condition
// User.deleteMany({ age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Find the first user matching with the given condition and Delete...
// User.findOneAndDelete({ name: "Peter" }) 
//   .then((res ) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Find the user matching with the given 'Id' and Delete...
User.findByIdAndDelete('67aeeb65f3fa07c5d79c5fe4') 
  .then((res ) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });