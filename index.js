/* Print using this console.log() function
console.log("Hello World!");
console.log("Hello World #2");

// Pop up using this alert() function
// document.getElementById("myh1").textContent = "Hello!";
// document.getElementById("myP").textContent = "How are you?";

// Variables: A decleration (let x) & an assignement (x=100)
// let age = 21;
let salary = 10.99;
console.log(age); // console.log is a function that prints to the console for the dev
console.log(`You are ${age} years old and make ${salary} per hour`)
console.log(typeof age); // Shows type


// Data Types: Number, String, Boolean, Object, Array
let num = 100; // Number
let firstname = "John"; // String
let isTrue = true; // Boolean
let obj = {name: "John", age: 21}; // Object
let arr = [10, 20, 30]; // Array

document.getElementById("p1").textContent = firstname;
document.getElementById("p2").textContent = `${firstname} is ${age} years old!`;
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

// Ternary Operator ? codeIfTrue : codeIfFalse; (DIDN'T CODE IT)
*/

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