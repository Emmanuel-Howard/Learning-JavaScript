/* 
Print using this console.log() function
console.log("Hello World!");
console.log("Hello World #2"); 
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Pop up using this alert() function
// document.getElementById("myh1").textContent = "Hello!";
// document.getElementById("myP").textContent = "How are you?";
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Variables: A decleration (let x) & an assignement (x=100)
// let age = 21;
let salary = 10.99;
console.log(age); // console.log is a function that prints to the console for the dev
console.log(`You are ${age} years old and make ${salary} per hour`)
console.log(typeof age); // Shows type
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Data Types: Number, String, Boolean, Object, Array
let num = 100; // Number
let firstname = "John"; // String
let isTrue = true; // Boolean
let obj = {name: "John", age: 21}; // Object
let arr = [10, 20, 30]; // Array

document.getElementById("p1").textContent = firstname;
document.getElementById("p2").textContent = `${firstname} is ${age} years old!`;
document.getElementById("p3").textContent = salary;
--------------------------------------------------------------------------------------------------------------------
*/
/*
// arithmatic operators: +, -, *, /, %, ++, --
let students = 30;
students = students + 1 // or students += 1;
students = students - 1
students = students * 2
students = students / 2
// students = students ** 2 // exponent operator
students = students % 2; // remainder when divided by 2 (modulus)
console.log(students);
--------------------------------------------------------------------------------------------------------------------
*/
/*
// How to accept User input:
// 1. Easy Way (Window Prompt)

/* let username;
username = window.prompt("What is your username: ")
console.log(username); 

// 2. Professional Way (HTML Textbox)
let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Welcome ${username}`
}   
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Type conversion 
let age = window.prompt("How old are you?")
age = Number(age);
age +=1;
console.log(age, typeof age)

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Constants (const) = variable that can't be changed
const PI = 3.14159
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    console.log(radius);
    circumference = 2 * PI * radius;
    console.log(`The circumference is ${circumference}.`);

    document.getElementById("result").textContent = `Circumference: ${circumference}`; 
}
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Math
Math.PI
let x = 3.21;
let y = 2;
let z = 1;
console.log(Math.PI)
// z = Math.round(x)
// z = Math.floor(x)      (round down)
let max = Math.max(x,y,z);
console.log(max) 
--------------------------------------------------------------------------------------------------------------------
*/
/*
// If statements
let time = 14  // time
if(time < 12){
    console.log("Good morning!")
}
else{
    console.log("Good afternoon!")
}

let isStudent = false  // student

if(isStudent){
    console.log("You are a student!")
}
else{
    console.log("You are not a student!")
}

let age = 18;  // nested if statement
let haslicense = false;

if(age >= 16){
    console.log("You are old enough to have a license!")

    if(haslicense){
        console.log("You also have a license!")
    }
    else{
        console.log("You do not have a license...")
    }
}
else{
    console.log("You are not old enough to have a license...")
}

let age = 0; // elsee if statements

if(age >= 18){
    console.log("You are old enough to drink.")
}
else if(age <= 0){
    console.log("Your age can't be below 0")
}
else{
    console.log("You must be 18+ to drink")
}
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Checkboxes & Radio Buttons
const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const masterBtn = document.getElementById("masterBtn")
const debitBtn = document.getElementById("debitBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You have chosen to pay with Visa";
    }
    else if(masterBtn.checked){
        paymentResult.textContent = "You have chosen to pay with Mastercard";
    }
    else if(debitBtn.checked){
        paymentResult.textContent = "You have chosen to pay with Debit";
    }
    else{
        paymentResult.textContent = "You haven't yet selected a payment method...";
    }
    }   
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Ternary Operator ? codeIfTrue : codeIfFalse; (DIDN'T CODE IT)
--------------------------------------------------------------------------------------------------------------------
*/
/*
// SWITCH = Replaces many else / if statements 
let day = 4 ;

switch(day){
    case 1:                       // If case == day, it will execute the code under.
        console.log("It is Monday")
        break;                   // Don't forget the break or the switch will continue 
    case 2:                       
        console.log("It is Tuesday")
        break;     
    case 3:                       
        console.log("It is Wednesday")
        break;     
    default:
        console.log(`${day} is not a day...`)        // Like an else statement
}
--------------------------------------------------------------------------------------------------------------------
*/
/*
// String Methods: Allows me to work with text (strings)

let userName = "Emmanuel";

console.log(userName.charAt(0)) ;  // 0 is the index (E) - Returns letter at index of 0
console.log(userName.indexOf("E"));   // Returns index of E
console.log(userName.length);      // length of string
console.log(userName.trim());      // Trims any whitespace
console.log(userName.toLowerCase());  // Returns lowercase string
console.log(userName.repeat(3))       // Returns string x3
let result = userName.startsWith("E") // Can also use .endsWith()
console.log(result)                   // Returns Boolean Value 
console.log(userName.includes("E"))   // Returns Boolean Value 

let phoneNumber = "123-456-7890"

phoneNumber = phoneNumber.replaceAll("-", " ")  // replace all dashes with spaces
phoneNumber = phoneNumber.padStart(15, "0")     // Defines the length of the string as 15 & fills the start woth 0s
phoneNumber = phoneNumber.padEnd(15, "0")       // Same but end
console.log(phoneNumber)
--------------------------------------------------------------------------------------------------------------------
*/
/*
// String Slicing = Creating a substring from a portion of another string

let fullName = "Emmanuel Howard";

// let firstName = fullName.slice(0, 5)  ;  // Use built-in slice method + index
// OR: To find names regardless of length
let firstName = fullName.slice(0, fullName.indexOf(" "));        // Slice from 0 to the first space
let lastName = fullName.slice(fullName.indexOf(" ") + 1);       // Slice from the letter after the first space

console.log(firstName);
console.log(lastName);
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Method Chaining = Calling one method after another in one continous line of code

// Example of NO Method Chaining

let username = window.prompt("Enter your username");

// This program makes the first letter Upper and the others lower 
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1); //  Everything after "E"
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username);

// Example of Method Chaining                      = Using a "." to call multiple methods 
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Logical Operators = Used to combine or manipulate boolean values (True / False)
// AND = &&, OR = ||, NOT = !

const temp = 20;

if(temp > 0 && temp <=30){
    console.log("The weather is good!")
}
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Strict Equality Operator
// = assignment operator
// = comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
const PI = 3.14;

if(PI === "3.14"){                           // That is not Pi, since it's a string  | Remove "" and it is Pi
    console.log("That is Pi.")
}
else{
    console.log("That is not Pi.")
}
--------------------------------------------------------------------------------------------------------------------
*/
/*
// while loop = Repeat some code WHILE some condition is true

let username = "";

while(username === "" || username === null){           // By pressing cancel, username ==- null = Now, you can't cancel
    username = window.prompt(`Enter your name:`)
}
console.log(`Your name is ${username}.`)

// The do while loop: Does the action (winow prompt) at least once before checking the condition

do{
    username = window.prompt(`Enter your name:`);
}while(username === "" || username === null)

    console.log(`Your name is ${username}.`)
--------------------------------------------------------------------------------------------------------------------
*/
/*
// for loop = repeat some code a limited amount of times

for(let i = 0; i < 10; i+=2){      // Set i = 0, and add 1 as long as under 10
    console.log(i);                      
} 

for(let i = 20; i > 0; i-=1){

    if(i == 13){                   
        continue               // Skips (Continues) over 13
        // break               If we break, it breaks the loop
    }
    else{
        console.log(i)
    }
}
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Function = A section of reusable code
function happyBirthday(name){                  // Creating the function with a parameter
    console.log(`Happy Birthday to ${name}!`)
};

happyBirthday("Emmanuel"); // Calling it with an argument. Seperate args with ,

function add(x, y){
    let result = x + y
    return result;  // This returns the result
}

let answer = add(2,3);  // Storing result in another variable 
console.log(answer)
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Variable scope (local & global variables)
// In a function = local. They can't see inside of other functions.
// = Like in Python
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Array = A variable like structire that can hold more than 1 value
// Like a list in python

let fruits = ["apple", "pineapple", "banana"];
fruits.push("coconut"); // Will add element to the end 
fruits.unshift("Grape");  // Will add element to front
fruits.sort(); // Sorts alphabetically 

let numOfFruits = fruits.length; // Define length
let index = fruits.indexOf("apple") // Will log the index

console.log(fruits[0]); // Can add index

for(let i=0; i< fruits.length; i++){  // Will loop through all the elements  
    console.log(fruits[i]);
}
// This is a shorter for loop. Replace fruit with anything
for(let fruit of fruits){
    console.log(fruit);
}
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Spread Operator = "..." Allows an iterable (ex.array) to be unpacked into multiple elements

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers); 
console.log(maximum);// In this case, max won't be logged since its array isn't unpacked

let minimum = Math.min(...numbers); // ... unpacks the elements
console.log(minimum); // Now, this works

let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrots", "orange", "celery"];

let food = [...fruits, ...vegetables]; // Can combine multiple arrays
console.log(food)
 --------------------------------------------------------------------------------------------------------------------
*/
/*
// Rest Parameters = (...rest) allows a function work with a variable number of arguments bu bundling them into an array 
// The opposite of a spread, as it bundles elements
// uhh.. read on it when needed cuz wtf

function openFridge(...foods){   // Rest Parameter: Combining foods
    console.log(...foods);     // NOTE: I use ... as a spread operator, removing them from the new array
}

const food1 = "pizza";
const food2 = "apple";
const food3 = "sushi";
const food4 = "chips";

openFridge(food1, food2, food3, food4);  // Logging each food into foods
--------------------------------------------------------------------------------------------------------------------
*/
/*
// Callback = A function that is passed as an argument to another function.
// Uses: Reading a file, Network requests, Interacting with databases
// = "Hey, when you're done, call this next!"

function hello(callback){
    console.log("hello")
    callback();           // Since we add the callback, it does the arg(goodbye) after
};
function goodbye(){
    console.log("goodbye")  
};
// hello();
// goodbye(); // In this case, we are calling goodbye after hello. If hello was reading a big file, goodbye would be logged before
            // To prevent this, we'll pass goodbye as an argument in hello
// So:
hello(goodbye);

// So: 1. Add callback to main function
//     2. Add the 2nd function as an arg when calling them

// Example 2:
function sum(callback, x, y){   // Can have multiple parameters
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(result)
}

sum(display, 3, 2);
--------------------------------------------------------------------------------------------------------------------
*/
/*
// forEach() = method used to iterate over the elements of an array and apply a specified
            // (continue) function (callback) to each element

            // element, index, array are provided
            // array.forEach(callback)

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double); // Callback of double doubles all elements (numbers)
numbers.forEach(display); // Iterates over each element in numbers

function display(element){
    console.log(element);
}

function double(element, index, array){ 
    array[index] = element * 2; // During each iteration, take the index in the array, and * 2
}
--------------------------------------------------------------------------------------------------------------------
*/

