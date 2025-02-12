
// Constructors -- Doesn't return anything & start with capital
function Person (name , age) {
    this.name = name ;
    this.age = age ;
}

// Creating a method for the constructor "Person"
Person.prototype.talk = function () {
    console.log(`Hii... , My name is : ${this.name}`);
}

let p1 = new Person("adam" , 32) ;
let p2 = new Person("eve" , 23) ;
p1.talk() ;