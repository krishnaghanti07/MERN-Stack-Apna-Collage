h1 = document.querySelector("h1") ;

// function changeColor(color , delay) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             h1.style.color = color ;
//             resolve("Color Changed...!");
//         } , delay);
//     });  
// }


// // Callback Nesting --> Callback-Hell
// changeColor("red" , 1000 , () => {
//     changeColor("orange" , 1000 , () => {
//         changeColor("green" , 1000 , () => {
//             changeColor("yellow" , 1000 , () => {
//                 changeColor("blue" , 1000 , () => {
    
//                 });
//             });
//         });
//     });
// });



// // Promise--> Optimized
// changeColor("red" , 1000)
//     .then(() => {
//         console.log("Red color was completed...");
//         changeColor("orange" , 1000);
//     })
//     .then(() => {
//         console.log("Orange color was completed...");
//         changeColor("green" , 1000);
//     })
//     .then(() => {
//         console.log("Green color was completed...");
//         changeColor("yellow" , 1000);
//     })
//     .then(() => {
//         console.log("Yellow color was completed...");
//         changeColor("blue" , 1000);
//     })
//     .then(() => {
//         console.log("Blue color was completed...");
//     })
//     .catch(() => {
//         console.log("Color was not completed...");
//     })



function changeColor(color , delay) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) = 1 ;
            if (num > 3) {
                reject("promise rejected...!");
            }

            h1.style.color = color ;
            resolve("Color Changed...!");
        } , delay);
    });  
}

// async-await ===> moduler and efficient
async function demo() {
    try {
        await changeColor("red" , 1000) ;
        await changeColor("orange" , 1000) ;
        await changeColor("green" , 1000) ;
        await changeColor("yellow" , 1000) ;
        await changeColor("blue" , 1000) ;
    } catch (err) { // if error occurred it will not hamper the rest of the code ...
        console.log("Error caught...");
        console.log(err) ;
    }

    let a = 5 ;
    console.log(a);
    console.log("New number = " , a+3);
}