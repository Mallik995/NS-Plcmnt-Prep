//looping array methods

var arr = [
    { name: "Tirth", age: 23 },
    { name: "Rahul", age: 12 },
    { name: "Sandeep", age: 23 },
    { name: "Shiva", age: 23 },
];

//Simple for-loop
for (let index = 0; index < arr.length; index++) {
    // const element = arr[index];
    // console.log(element.name, element.age);
    console.log(arr[index]['name'], "|" + arr[index]['age']);
    console.log("StudentName : " + arr[index].name, "| Age:" + arr[index].age);
    //both are fine
}

//Array Iteretation - JavaScript Array Iteration
//forEach
//filter
//map
//reduce

//forEach Examples :- ************************************************
arr.forEach(function (item, index, arr) { // You can skip index & arr
    console.log(item.age);
})

arr.forEach(function (item, index, arr) { // You can skip index & arr
    console.log(item.name);
})

arr.forEach(element => { // forEach using "arrowfunction"
    console.log(element.name);
});


//filter Examples ************************************************
var filteredArr = arr.filter(function (item, index, arr) {
    if (item.age >= 18) {
        return true;
    }
    //or
    // return item.age >= 18;
})
console.log(filteredArr);

/*
 o/p : - >
(3) [{…}, {…}, {…}]
0: {name: 'Tirth', age: 23}
1: {name: 'Sandeep', age: 23}
2: {name: 'Shiva', age: 23}
length: 3
[[Prototype]]: Array(0)

*/

// filter the arry without "Array-filter-method"
let temp = []
for (let index = 0; index < arr.length; index++) {
    if (arr[index]['age'] >= 18) {
        temp.push(arr[index]);
    }
}
console.log(temp);


//map() examples *******************************************************
var ageMapped = arr.map(function (param1, param2, arr) {
    return param1.age * 2;
})
console.log(ageMapped);

// reduce method exampl ***************************************************
// [1,2,3,4,5]=1+2+3+4+5=15

let sumOfAge = 0;

// for (let index = 0; index < arr.length; index++) {
//     // sumOfAge += arr[index].age;
//     //OR
//     sumOfAge += arr[index]['age'];
// }
// console.log(sumOfAge);


sumOfAge = arr.reduce(function (temp, item, index, arr) { // inde and arr ---> are optional as usual
    return temp + item.age;
}, 10)
console.log(sumOfAge);

let reducedString = "";

reducedString = arr.reduce(function (temp, item, index, arr) {
    return temp + item.name + "|";
}, "")
console.log(reducedString);



// some() ********************************************************************
// The some() method check if some array values pass a test.
// return true or false

console.log("alteast some elemet has age >=18 :" + arr.some(function (item, index, arr) {
    return item.age >= 18;
}));

// every() ********************************************************************
//The every() method check if all array values pass a test.
console.log("is Every elemet has age >=18 :" + arr.every(function (item, index, arr) {
    return item.age >= 18;
}));


// find() *****************************************************************
//The find() method returns the value of the first array element that passes a test function.
//after find the matches returns that element as output and stops further execution
// returns 1st matches and stops execution further

console.log(arr.find(function (item, index, arr) {
    return item.age >= 18;
}));

//index()*********************************************************
// give the index of the first occurance/matches of the "search element"
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position); // o/p : - 0


//lastIndexOf ***************************************************
// give the index of last occurance/matches of the "search element"
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
position = fruits.lastIndexOf("Apple");
console.log(position); // o/p : - 2




//************************************** Remove Duplicate elements from an array**************** */
let a = [1, 2, 5, 2, 3, 3, 4, 7]
// soulition -------------->
let b = [];
console.log("before removing duplicates :" + a);
for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}
console.log("after removing duplicates :" + b);
console.log("Another way of removing duplicates in array- by Set & Spread- operator");
console.log([...new Set(a)]);
