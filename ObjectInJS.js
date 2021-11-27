const obj = { name: "Mallikarjun", age: 23 }
let whatHasObjectValues = " ";
for (let key in obj) {
    whatHasObjectValues += obj[key] + " ";
};
console.log(whatHasObjectValues);
document.getElementById("demo").innerHTML = whatHasObjectValues;
document.getElementById("demo").style.color = "red"