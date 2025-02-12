function saveToDb(data) {
    return new Promise((resolve , reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
        if (internetSpeed > 4) {
            resolve("Success : data was saved...") ;
        } else {
            reject("Failure : weak connection...") ;
        }
    });
}

saveToDb("Apna Collage")  // req = promise object
    .then((result) => {
        console.log("Data1 saved...");
        console.log(result) ;
        return saveToDb("Hello World");
    })
    .then((result) => {
        console.log("Data2 saved...");
        console.log(result) ;
        return saveToDb("Krishna Bro");
    })
    .then((result) => {
        console.log("Data3 saved...");
        console.log(result) ;
    })
    .catch((error) => {
        console.log("Promise was rejected...");
        console.log(error) ;
    });

// saveToDb("Apna Collage")  // req = promise object
//     .then(() => {
//         console.log("Data1 saved...");
//         saveToDb("Hello World").then(() => {
//             console.log("Data2 saved...")
//         })
//     })
//     .catch(() => {
//         console.log("Promise was rejected...")
//     });