// Requiring Mongoose
const mongoose = require('mongoose');

main()
  .then(() => {
      console.log("Connection Successful...");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon001');
}

// Defining Schema with constraints....
const bookSchema = new mongoose.Schema ({
    title: {
        type: String ,
        required: true ,
        maxLength: 20 ,
    } ,
    author: {
        type: String ,
    } ,
    price: {
        type: Number , // We can also define our custom Error
        min: [1 , "Price is too low for Amazon selling.."] ,
    } ,
    discount: {
        type: Number ,
        default: 0 ,
    } , 
    category: {
        type: String , 
        enum: ["fiction" ,"non-fiction"] ,
    } ,
    genre: [String] 
});

// Creating Model / Collections using the Schema...
const Book = mongoose.model("Book" , bookSchema);

// // Creating Object / Document into the collection
// let book1 = new Book({
//     title: "Gone Girl" ,
//     author: "Peter Stoke" ,
//     price: "499"
// });
// // Saving the book-document manually
// book1.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });




// // Updating the book price

// // Even though constraints is defined , the price value got updated violating the Schema-Contraints
// Book.findByIdAndUpdate("67af7042c3d6e701cbbe4eaa" , {price: -499})
//     .then((res) => { 
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// to prevent the violation against the Schema-Constraints , we've to pass "runValidators: true"
Book.findByIdAndUpdate("67af7042c3d6e701cbbe4eaa" , {price: -499} , {runValidators: true})
    .then((res) => { 
        console.log(res);
    })
    .catch((err) => { // Printing our custom Error-Message
        console.log(err.errors.price.properties.message);
    });