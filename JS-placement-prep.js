//looping array methods

var arr = [
    { name: "Tirth", age: 23 },
    { name: "Rahul", age: 12 },
    { name: "Sandeep", age: 23 },
    { name: "Shiva", age: 23 },
];


for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element.name, element.age);
}

