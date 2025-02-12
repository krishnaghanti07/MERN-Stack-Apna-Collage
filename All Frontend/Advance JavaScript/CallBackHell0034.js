function saveToDb(data , success , failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
    if (internetSpeed > 4) {
        // console.log("Your data was Saved : " , data);
        success() ;
    } else {
        // console.log("weak connection, data not saved...");
        failure() ;
    }
}

// saveToDb("Apna Collage") ;

// Nested Callback --> CallBack Hell
saveToDb("Apna Collage" , () => {
    console.log("Success : Your data was Saved...");
    saveToDb("Hello World" , () => {
        console.log("Success2 : data2 Saved...");
        saveToDb("Krishna Ghanti" , () => {
            console.log("Success3 : data3 Saved...");
        }, () => {
            console.log("Failure3 : weak connection...");
        });
    }, () => {
        console.log("Failure2 : weak connection...");
    });
}, () => {
    console.log("Failure : weak connection, data not saved...");
});