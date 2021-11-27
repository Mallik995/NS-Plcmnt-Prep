// class name always start with capital letter
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    pass() {
        console.log(`${this.name} has passed`);
    }
    fail() {
        console.log(`${this.name} has failed!!!`);
    }
    run() {
        console.log(`${this.name} is running !`);
        return this;
    }
    home() {
        console.log(`${this.name} has reached home @`);
        return {
            fn() {
                console.log("Another method inside home");
            }
        }
    }
}

// creating objects
var stud1 = new Student("Mallik", 20);
var stud2 = new Student("Arjun", 22);

stud1.pass();
stud1.fail();
stud1.run();
console.log("chaining of methods can be done by 'adding return-stmt'");
stud1.run().home();
stud1.home().fn(); // this is bit tricky please observe this carefully
