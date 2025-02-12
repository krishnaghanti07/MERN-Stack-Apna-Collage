class Mammal { // Parent/base class
    constructor(name) {
        this.name = name ;
        this.type = "Warm-blooded";
    }

    eat() {
        console.log("I am Eating...");
    }
}

class Dog extends Mammal { // Child Class
    constructor(name) {
        super(name) ;
    }
 
    bark() {
        console.log("Woff...");
    }

    // Override
    eat() {
        console.log("Dog is Eating...");
    }
}

class Cat extends Mammal { // Child Class
    constructor(name) {
        super(name) ;
    }
 
    bark() {
        console.log("Mew...");
    }
}

let d1 = new Dog("Tuffie");
console.log(d1.name);
console.log(d1.type);
d1.eat();
d1.bark();
