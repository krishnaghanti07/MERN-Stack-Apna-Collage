class Person {
    constructor (name , age) {
        this.name = name ;
        this.age = age ;
        console.log("Person's class Constructor")
    }

    talk() {
        console.log(`Hii... , I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name , age , marks) {
        super(name , age) ; // Parent class's constructor is being is called
        this.marks = marks ;
        console.log("Student's class Constructor")
    }
}

class Teacher extends Person {
    constructor (name , age , subject) {
        super(name , age) ; // Parent class's constructor is being is called
        this.subject = subject ;
        console.log("Teacher's class Constructor")
    }
}

let s1 = new Student("Adam" , 21 , 94) ;
s1.talk();
let t1 = new Teacher("Eve" , 21 , "English") ;
t1.talk();