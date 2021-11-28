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



// Inheritance
console.log("Inheritance in JS ****************************************************** ");
// if you write constructor in child class then super should be the firstline written to access and initialise the parents variable.
// with the help of "super" we can access methods too.
// if you dont write child-constructor then direcly you can create the object and further can access methods
class Instructor extends Student {
    constructor(name, age, designation) {
        super(name, age);
        this.designation = designation;
        console.log("child constructor.....");
    }
    takeSession() {
        console.log(`${this.name} is taking the session....`);
        super.run();
    }
}

var instruct1 = new Instructor('Mallikarjun', 40, "senior-Faculty");
console.log(instruct1); // to see what its holding
instruct1.pass();
instruct1.home().fn();
instruct1.takeSession();

console.log("Call by value & call by reference in JS *******************************************");

var a = 10;
var b = a;
console.log(a); //10
console.log(b); //10;
a = 20;
console.log(a); //20
console.log(b); //10;

var arr1 = [10, 20];
var arr2 = arr1;
console.log(arr1); //[10,20]
console.log(arr2); //[10,20]
arr1[0] = 100;
console.log(arr1); //[100,20]
console.log(arr2); //[100,20]

var obj1 = {
    name: "mallik",
    rollno: 100
}
var obj2 = obj1;
console.log(obj1);//{name: 'mallik', rollno: 100}
console.log(obj2);//{name: 'mallik', rollno: 100}
obj1.name = 'Arjun';
console.log(obj1);//{name: 'Arjun', rollno: 100}
console.log(obj2);//{name: 'Arjun', rollno: 100}

console.log("we can do pass by value in objects with the help of (...) spread operator ************");
// in-case if we have 100 key-value props & we want to change only 1 or 2 props among 100 properties
// then in that case this trick useful
var obj3 = {
    name: "Mallikarjun",
    roll: 30,
    //.... if 100 more props
}
var obj4 = {
    ...obj3,// copys the "property:value" only not reference
    name: "Dodamani" // modifying the value
}

console.log(obj3);
console.log(obj4);



