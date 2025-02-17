// Print using this console.log() function
console.log("Hello World!");
console.log("Hello World #2");

// Pop up using this alert() function
// document.getElementById("myh1").textContent = "Hello!";
// document.getElementById("myP").textContent = "How are you?";

// Variables: A decleration (let x) & an assignement (x=100)
let age = 21;
let salary = 10.99;
console.log(age); // console.log is a function that prints to the console for the dev
console.log(`You are ${age} years old and make ${salary} per hour`)
console.log(typeof age); // Shows type


// Data Types: Number, String, Boolean, Object, Array
let num = 100; // Number
let username = "John"; // String
let isTrue = true; // Boolean
let obj = {name: "John", age: 21}; // Object
let arr = [10, 20, 30]; // Array

document.getElementById("p1").textContent = username;
document.getElementById("p2").textContent = `${username} is ${age} years old!`;
document.getElementById("p3").textContent = salary;

// arithmatic operators: +, -, *, /, %, ++, --
let students = 30;
students = students + 1 // or students += 1;
students = students - 1
students = students * 2
students = students / 2
// students = students ** 2 // exponent operator
students = students % 2; // remainder when divided by 2 (modulus)
console.log(students);
