const mongoose = require('mongoose');
const { Schema } = mongoose ;

main()
    .then(() => console.log("connection successful..!"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo01");
}

const orderSchema = new Schema ({
    item: String ,
    price: Number ,
});

const customerSchema = new Schema ({
    name: String ,
    orders: [
        {
            type: Schema.Types.ObjectId ,
            ref: "Order" ,
        },
    ],
});

// customerSchema.pre("findOneAndDelete" , async() => {
//     console.log("PRE MIDDLEWARE");
// });
// customerSchema.post("findOneAndDelete" , async() => {
//     console.log("POST MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete" , async(customer) => {
    // console.log(data);
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
});

const Order = mongoose.model("Order" , orderSchema);
const Customer = mongoose.model("Customer" , customerSchema);

const findCustomer = async() => { 
    let res = await Customer.find({}).populate("orders");
    console.log(res[0]);
}
// findCustomer() ;

const addCust = async() => {
    let newCust = new Customer({
        name: "Shyam Bahadur" ,
    });

    let newOrder = new Order({
        item: "Burger" ,
        price: 350 ,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
}
// addCust() ;

const delCust = async() => {
    let data = await Customer.findByIdAndDelete('67cf2b8a6365060c261b45df') ;
    console.log(data);
}
delCust() ;

// const addCustomer = async() => {
//     let cust1 = new Customer({
//         name: "Rahul Kumar" ,
//     });

//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Chocolate" });

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save() ;
//     console.log(result);
// };

// addCustomer() ;

// const addOrders = async() => {
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 15} ,
//         {item: "Chips", price: 20} ,
//         {item: "Chocolate", price: 45} ,
//     ]);
//     console.log(res);
// };

// addOrders();