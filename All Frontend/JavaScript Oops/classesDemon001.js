
class Person {
    constructor (name , age) {
        this.name = name ;
        this.age = age ;
    }

    talk() {
        console.log(`Hii... , My name is : ${this.name}`);
    }
}

let p1 = new Person("Adam" , 32);
let p2 = new Person("Eve" , 23);
p1.talk() ;