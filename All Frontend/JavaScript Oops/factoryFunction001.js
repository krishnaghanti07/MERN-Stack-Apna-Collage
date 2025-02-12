function PersonMaker(name , age) {
    const person = {
        name : name ,
        age : age ,
        talk() {
            console.log(`Hii... , My name is : ${this.name}`);
        },
    };

    return person ;
}

let p1 = PersonMaker("Shyam" , 32) ;
let p2 = PersonMaker("Era" , 24) ;
p1.talk() ;