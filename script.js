//Variables, data types, and Control statements in JavaScript
//Data types - Primitive and Non-Primitive

//Primitive data types - string, number, boolean, null, undefined,
//non-primitive data types - object, array, function

//primitive data types

//String
// let str = "Hello, World!";
// console.log(typeof str); // string
//Number
// let num = 42;
// console.log(typeof num);
// boolean
// let bool = true; //true or false
// console.log(typeof bool);
//null
// let emptyValue = null;
// emptyValue = 2;
// console.log(emptyValue); // object
//undefined
// let notAssigned;
// console.log(notAssigned); // undefined

//-------------------------------------------------------------

//non-primitive data types

//object
// let person = {
//   name: "Alice",
//   age: 30
// };
// console.log(typeof person); // object

//array
// let numbers = [1, 2, 3, 4, 5];
// console.log(typeof numbers); // object

//--------------------------------------------------------------

//Primitive data types vs Non-Primitive data types
//Primitive data types are stored in stack memory
//Non-primitive data types are stored in heap memory

// let p1 = 10; //1234 unique memory address
// let p2 = p1; //4566 copy by value

// p1 = 20;

// console.log(p1, "p1");
// console.log(p2, "p2");

//cannot modify const primitive data types
// const a = 10;
// a = { firstNamre: "Selvam" }; // TypeError: Assignment to constant variable.

//non-primitive data types

// let obj1 = { age: 10 }; // unique memory address 1234
// let obj2 = obj1; //1234 copy by reference
// let obj2 = { ...obj1 }; //3344343 copy by reference
// obj2.age = 20;

// console.log(obj1.age, "obj1");
// console.log(obj2.age, "obj2");

// let arr1 = [1, 2, 3]; // unique memory address 5678
// let arr2 = arr1; //5678 copy by reference

// arr1.push(4);

// console.log(arr1, "arr1");
// console.log(arr2, "arr2");

//modifying values in const non-primitive data types
// const arr = [1, 22, 53];
// arr[0] = 10;
// console.log(arr, "arr");
// const obj = { a: 1, b: 2 };
// obj.a = 10;
// console.log(obj, "arr");

//operators
//arithmetic operators +, -, *, /, %
// let a = 10;
// let b = 11;

// console.log("Addition:", a + b); //13
// console.log("Subtraction:", a - b); //7
// console.log("Multiplication:", a * b); //30
// console.log("Division:", a / b); //3.33
// console.log("Modulus:", a % b); //1
//--------------------------------------------------------------

//variables - var, let, const

/*
var - function scoped, can be re-declared and updated
hoisting - variables declared with var are hoisted and initialized with undefined
*/

// name = "John"; // declaration and initialization
// var name = null; // declarations
// console.log(name); // John

// var x = 1;
// function varTest() {
//   console.log(x); // 1
// }
// varTest();
// console.log(x); // ReferenceError: x is not defined

//let - block scoped, cannot be re-declared in the same scope, can be updated
//ES 6 feature - 2015 version of JavaScript

// let a = 25; // declaration and initialization
// a = "name"; // updating
// console.log(a); // 26

//Const - block scoped, cannot be re-declared or updated
//ES 6 feature - 2015 version of JavaScript

// const lastName = "Doe";
// lastName = "Smith"; // TypeError: Assignment to constant variable.
// console.log(lastName); // Doe

//--------------------------------------------------------------

//conditional operators - ==, ===, !=, !==, >, <, >=, <=

// console.log("Equal to:", a == b); //false
// console.log("Strict equal to:", a === b); //false
// console.log("Not equal to:", a != b); //true
// console.log("Greater than:", a > b); //true
// console.log("Less than:", a < b); //false
// console.log("Greater than or equal to:", a >= b); //true
// console.log("Less than or equal to:", a <= b); //false

//---------------------------------------------------------------
//logical operators - &&, ||, !

// console.log("Logical AND:", a > 5 && b < 15); //true
// console.log("Logical OR:", a > 5 || b < 10); //true
// console.log("Logical NOT:", !(a > 5)); //false

//---------------------------------------------------------------
//increment and decrement operators

// let i = 0;
// i = i + 1;
// i += 1;
// i++;
// console.log(i); //1
// i = i - 1;
// i -= 1;
// i--;
// console.log(i); //0

//---------------------------------------------------------------

//conditinal statements
//if statement
// if-else statement
//if - elseif - else statement
//switch statement

// let age = 18;

//if statement
// if (age == 18) {
//   console.log("Minor");
// }

//if-else statement
// if (age < 18) {
//   console.log("Minor");
// } else {
//   console.log("Adult");
// }
//if - elseif - else statement
// if (age < 13) {
//   console.log("Child");
// } else if (age >= 13 && age < 18) {
//   console.log("Teenager");
// } else {
//   console.log("Adult");
// }

// if (day == 1) {
//   console.log("Monday");
// } else if (day == 2) {
//   console.log("Tuesday");
// } else if (day == 3) {
//   console.log("Wednesday");
// } else if (day == 4) {
//   console.log("Thursday");
// } else if (day == 5) {
//   console.log("Friday");
// } else if (day == 6) {
//   console.log("Saturday");
// } else if (day == 7) {
//   console.log("Sunday");
// } else {
//   console.log("Invalid day");
// }

//switch statement
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//---------------------------------------------------------------
//Control statements

//loops
//for loop
//while loop

//for loop
// const arr = [10, 20, 30, 40, 50];
// for (let a = 0; a <= 3; a++) {
//   console.log("Iteration:", arr[a]);
// }

//while loop
// let count = 10;
// while (count > 0) {
//   console.log("Count:", count);
//   count++;
//   console.log("Internet is connceted");
// }

//---------------------------------------------------------------

//functions in JavaScript
//function declaration
//function expression
//arrow function - ES6 feature

// console.log(greet("Alice"));

//function declaration

//Hosting - function declarations are hoisted
// function greet(name) {
//   console.log(name, "name");
//   return "Greeting sent to " + name;
// }

// console.log(greet("Bob"));

//function expression
//not hoisted
// const add = function (a, b) {
//   return a + b;
// };

// console.log("Addition:", add(5, 10));
// console.log("Addition:", add(20, 30));

//arrow function - ES6 feature
// not hoisted
// const newAdd = (a, b) => a + b;

// console.log("Addition:", newAdd(15, 25));
// console.log("Addition:", newAdd(12, 25));

//---------------------------------------------------------------

//Arrays in JavaScript

//Array methods
//push, pop, shift, unshift, indexOf, splice, slice, forEach, map, filter, reduce

// let fruits = ["Apple", "Banana", "Orange", 1, true, null, undefined, [], {}];
// console.log("Fruits array:", fruits);
// console.log("First fruit:", fruits[0]);

// const vegetables = ["Carrot", "Broccoli", "Spinach", "tomato"];
// console.log("Vegetables array:", vegetables);
// vegetables.push("tomato");

//Pop removes the last element from the array

// const removedVegetable = vegetables.pop();
// console.log("Vegetables array after pop:", vegetables);
// console.log("Removed vegetable:", removedVegetable);

//Shift removes the first element from the array

// const removedFirstVegetable = vegetables.shift();
// console.log("Vegetables array after shift:", vegetables);
// console.log("Removed first vegetable:", removedFirstVegetable);

//Unshift adds an element at the beginning of the array

// vegetables.unshift("Cabbage");
// console.log("Vegetables array after unshift:", vegetables);
// console.log("Vegetables array:", vegetables);

//IndexOf returns the index of the element in the array
// const index = vegetables.indexOf("Spinach");
// console.log("Index of Spinach:", index);

//Splice - adds/removes elements from the array

// vegetables.splice(1, 2, "tomato"); // from index 1, remove 1 element and add Lettuce and Cucumber
// console.log("Vegetables array after splice:", vegetables);

//Slice - returns a new array from the specified start and end index
// const citrusFruits = vegetables.slice(0, 2); // from index 0 to 2
// console.log("Citrus fruits:", citrusFruits);
// console.log("Vegetables array:", vegetables);

//forEach - iterates over the array and executes the callback function for each element

// vegetables.forEach((veg, index) => {
// console.log(`Vegetable at index ${index}: ${veg}`);
//   console.log("Vegetable at index" + index + ":" + veg);
// });

//map - creates a new array by applying the callback function to each element

// const upperCaseVegetables = vegetables.map((veg, index, arry) => {
//   console.log("Array inside map:", arry);
//   if (index == 2) {
//     return veg.toUpperCase();
//   }
//   return veg;
// });
// console.log("Uppercase vegetables:", upperCaseVegetables);

//filter - creates a new array with elements that pass the test implemented by the callback function

// const longNamedVegetables = vegetables.filter((veg) => {
//   console.log(veg.length, "length of", veg);
//   return veg.length > 6;
// });
// console.log("Long named vegetables:", longNamedVegetables);

//reduce - applies a function against an accumulator and each element in the array to reduce it to a single value
// const marks = [85, 90, 78, 92, 88];
// console.log("Marks array:", marks);
// const totalLength = marks.reduce((acc, cur) => acc + cur, 0);
// console.log("Total length of vegetable names:", totalLength);

//Split - string to array
// const name = "Selvam is a teacher";
// const nameInArray = name.split(" ");

// console.log(name.split(" "), "name as array");
// console.log([1, 2, 4, 5].toString(), "name as array");

//Join - array to string
// const joinedName = nameInArray.join(" - ");
// console.log("Joined name:", joinedName);

//toString - array to string
// const arr = [1, 2, 3, 4, 5];
// const arrToString = arr.toString();
// console.log("Array to string:", arrToString);

//---------------------------------------------------------------

//Objects in JavaScript
//Creating objects - object literal, constructor function, ES6 class

//Object literal
// let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   isElectric: false,
//   colors: ["Red", "Blue", "Green"]
// };

// const toyataCar = [
//   { make: "Toyota", model: "Corolla", year: 2021 },
//   { make: "Toyota", model: "RAV4", year: 2022 },
//   { make: "Toyota", model: "Highlander", year: 2023 }
// ];

// console.log("Car object:", car);
// console.log("Car make:", car.make); // Dot notation
// console.log("Car model:", car["model"]); // Bracket notation

//Object methods

//Object.keys(), Object.values(), Object.entries(), Object.assign()

//Object.keys() - returns an array of the object's keys
// console.log("Car keys:", Object.keys(car));

//Object.values() - returns an array of the object's values
// console.log("Car values:", Object.values(car));

//Object.entries() - returns an array of the object's key-value pairs
// console.log("Car entries:", Object.entries(car));

//Object.assign() - copies the values of all enumerable own properties from one or more source objects to a target object
// let newCar = { color: "Black" };
// Object.assign(newCar, car);
// console.log(car, "New car object:", newCar);

//---------------------------------------------------------------

//DOM Manipulation using JavaScript

//DOM - Document Object Model

//Selecting elements - getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll

//Manipulating elements - innerHTML, textContent, style, classList, setAttribute, getAttribute

//Creating elements - createElement, appendChild, removeChild

//Event handling - addEventListener , removeEventListener

//------Start of selecting elements------//
// Selecting elements

// const heading1 = {
//   textContent: "New arrival"
// };

// const heading = document.getElementById("new-arrival");
// heading1.textContent = "Latest Products";
// console.log("Heading element:", heading);

// const h1Tag = heading.querySelector("h1");
// console.log("H1 tag inside heading:", h1Tag.innerText);

// const productCard = document.getElementsByClassName("product-card");
// console.log("Product cards:", productCard[0].innerText);

// const buttons = document.getElementsByTagName("button");
// console.log("Buttons:", buttons);

// const heroSection = document.querySelector(".hero h1");
// console.log("Hero section heading:", heroSection.innerText);

// const productCards = document.querySelectorAll(".product-card");
// console.log("All product cards:", productCards);

//----End of selecting elements----//

//------Start of manipulating elements------//

//Manipulating elements

// h1Tag.textContent = "Latest Arrivals";

// heading.innerHTML =
//   "<h4 class='content'>Lastest Content</h4> <button style='color:red'> Click</button>";

// buttons[0].style.color = "blue";

// heading.classList.add("highlighted");

// console.log("Heading classes:", heading.classList);

// heading.setAttribute("data-heading", "selvam");

// heading.setAttribute("data-type", "header");

// console.log(
//   "Heading data-type attribute:",
//   heading.getAttribute("data-heading")
// );

// const commentSection = document.getElementById("comment");

//----End of manipulating elements------//

//------Start of creating elements------//

//Creating elements

// const newComment1 = document.createElement("p");

// newComment1.textContent = "This is a new section created using JS";

// const newComment2 = document.createElement("p");

// newComment2.textContent = "This is another comment added using JS";

//Appending elements

// commentSection.appendChild(newComment1); // Only one element can be added

// commentSection.append(newComment1, newComment2); // verify and let you know

//Removing elements

// commentSection.removeChild(newComment1);

// const shopNowEvent = function () {
//   alert("Shop Now button clicked!");
// };

//----End of creating elements------//

//------Start of event handling------//

//Event handling

// const shopNowButton = document.querySelector(".hero button");

// shopNowButton.addEventListener("click", function () {
//   alert("Shop Now button clicked!");
// });

// shopNowButton.addEventListener("click", shopNowEvent);

// const products = document.getElementById("products");

// products.addEventListener("input", function (event) {
//   if (event.target.classList.contains("qty")) {
//     const productCard = event.target.closest(".product-card");
//     const productId = productCard.getAttribute("data-id");
//     const productQty = event.target.value;

//     console.log("Product ID:", productId);
//     console.log("Quantity changed to:", typeof event.target.value);
//     console.log("Quantity changed to:", Number(event.target.value));
//   }
// });

// const emailSubscribeInput = document.getElementById("emailSubscribe");
// emailSubscribeInput.addEventListener("change", function () {
//   console.log("Email Subscribed:", emailSubscribeInput.value);
// });

//----End of event handling------//

//---------------------------------------------------------------

//Destructuring in JavaScript

//Destructuring assignment - allows unpacking values from arrays or properties from objects into distinct variables

//----  Starting with  array destructuring ----//

//Array destructuring

// const rgba = [255, 0, 127];
// const [red, green, blue] = rgba;

// console.log("Red:", red);
// console.log("Green:", green);
// console.log("Blue:", blue);

// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 23 }
// ];
// const [alice, bob, charlie] = students;

// console.log("Alice:", alice.age);
// console.log("Bob:", bob);
// console.log("Charlie:", charlie);
// const [
//   { name: aliceFirstName, age: aliceAge },
//   { name: bobFirstName, age: bobAge },
//   { name: charlieFirstName, age: charlieAge }
// ] = students;

// console.log("Alice Name:", aliceFirstName);
// console.log("Alice Age:", aliceAge);
// console.log("Bob Name:", bobFirstName);
// console.log("Bob Age:", bobAge);
// console.log("Charlie Name:", charlieFirstName);
// console.log("Charlie Age:", charlieAge);
// const brand = "Apple";

//---- Ending with array destructuring ----//

//---- Starting with object destructuring ----//

//Object destructuring
// const laptop = {
//   brand: "Dell",
//   model: "XPS 13",
//   year: 2021,
//   specs: {
//     ram: "16GB",
//     storage: "512GB SSD"
//   }
// };

// const { model, brand: lapBrand, year, specs } = laptop;
// console.log("Laptop Model:", model); // XPS 13
// console.log("Laptop Brand:", brand); //apple
// console.log("Laptop Brand:", lapBrand); // dell
// console.log("Laptop Year:", year); // 2021
// console.log("Laptop Specs:", specs); // { ram: '16GB', storage: '512GB SSD' }

//---- Ending with object destructuring ----//

//---------------------------------------------------------------

//ES-6 Features

//let and const - Completed
//Destructing Assignment - Completed
//arrow functions - completed
//Default parameters
//Spread Operator
//Rest operator
//For of loop
//Enhanced object literals
//Modual import and export - React explanion
//class
//Promises
//async await

//Default Parameters
function getValue(a, b = 2) {
  console.log(a, b);
  return a * b;
}

console.log(getValue(1, 4));

function accessObj(a, b = {}) {
  console.log(a, b);
  console.log(Object.keys(b).length);
  if (Object.keys(b).length) {
    // business logic
  }
}
accessObj({ name: "sai" });

//Spread Operator

const arr = [12, 4, 5, 6, 3];

const arr3 = [122, 134];

const arr2 = [...arr3, ...arr];

console.log(arr2);

//Rest Operator
function getMutiples(...param) {
  console.log(param, "reset operator");
  const [a, b, c, d = 1, e, f] = param;
  console.log(a, b, c, d, e, f);
}

getMutiples(1, 4, 5);

//For of

const names = ["raj", "ragu", "kamal"];
// 0<3, 1<3,2<3,3<3
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let name of names) {
  console.log(name);
}

//Enhanced object literals
const objName = "raj";
const age = 25;
const para = {
  studName: objName,
  age
};
console.log(para);

//Template literals
const firstName = "Raj";
const secondName = "Kumar";
console.log(firstName + " " + secondName + "good morning");
console.log(`${firstName} ${secondName} good morning`);

//Class

// const car = {
//   brand: "Toyato",
//   model: 2019,
//   start: function () {
//     console.log(this.brand + this.model + "is started");
//   }
// };

class Car {
  constructor(brand, model) {
    (this.brand = brand), (this.model = model);
  }
  start() {
    console.log(this.brand + " " + this.model + " " + "is started");
  }
}

const toyataCar = new Car("Toyata", 2019);
const hondaCar = new Car("Honda", 2018);

toyataCar.start();

//Promise
//Syncronous and asyncronous

const student = new Promise((resole, reject) => {
  setTimeout(() => resole("Success!"), 10000);
});
student.then((res) => console.log(res)).catch((error) => console.log(error));

//POST, PUT, PATCH, DELETE, GET

async function userInfo() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => data.find((data) => data.id == 1))
    .then((data) => console.log(data, "this is post"))
    .catch((error) => console.log(error, "this is car error"));
}
userInfo();

// const getCarsInfo = async () => {};
async function getCarsInfo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const firstPost = posts.find((post) => post.id == 1);
    console.log(res, "this si res");
    console.log(posts, "this is posts");
    console.log(firstPost, "firstPost");
  } catch (error) {
    console.log(error);
  }
}
//-----------------------------------------------
/*
ASYNC JAVASCRIPT - LAYMAN + TECHNICAL EXPLANATIONS WITH CODE
Copy-paste this entire file into your browser console or HTML file to learn!
*/

////////////////////////////////////////////////////////////////////////
// 1. CALLBACKS & CALLBACK HELL
////////////////////////////////////////////////////////////////////////

/*
LAYMAN: Like giving friends tasks one after another—each waits for previous one, 
creating messy chain of instructions.

TECHNICAL: Callbacks are functions passed as arguments to execute later. 
Nested callbacks create "callback hell" with deep indentation. [web:1]
*/

// function fetchData(callback) {
//   setTimeout(() => callback("Data fetched!"), 2000);
// }
// fetchData((data) => console.log(data)); // Clean single callback

////////////////////////////////////////////////////////////////////////
// 2. PROMISES
////////////////////////////////////////////////////////////////////////

/*
LAYMAN: A real-life promise that something will succeed or fail—you wait and react.

TECHNICAL: Objects representing async operations with states: 
pending, fulfilled (resolved), rejected. [web:1]
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success!"), 1000);
// });
// myPromise
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

////////////////////////////////////////////////////////////////////////
// 3. PROMISE CHAINING
////////////////////////////////////////////////////////////////////////

/*
LAYMAN: Line up tasks so each starts only after previous promise finishes.

TECHNICAL: Return values/promises from .then() to chain operations. 
One .catch() handles errors chain-wide. [web:1]
*/

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => {
//     if (!res.ok) throw new Error("Network error");
//     return res.json();
//   })
//   .then((data) => console.log("Chained data:", data))
//   .catch((err) => console.error(err));

////////////////////////////////////////////////////////////////////////
// 4. ASYNC / AWAIT
////////////////////////////////////////////////////////////////////////

/*
LAYMAN: Write "wait here" in code so it reads like normal steps.

TECHNICAL: async functions return promises. await pauses until promise resolves. 
Use try/catch for errors. [web:1]
*/

// async function getData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     if (!res.ok) throw new Error("Network error");
//     const data = await res.json();
//     console.log("Async/await data:", data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getData();

////////////////////////////////////////////////////////////////////////
// 5. FETCH API
////////////////////////////////////////////////////////////////////////

/*
LAYMAN: Send letter to website, wait for reply with data.

TECHNICAL: fetch(url) returns Response promise. Check response.ok (200-299) 
before .json(). [web:1]
*/

// async function fetchData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     if (!res.ok) throw new Error("Failed");
//     const data = await res.json();
//     console.log("Fetch API data:", data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// fetchData();

////////////////////////////////////////////////////////////////////////
// 6. ERROR HANDLING
////////////////////////////////////////////////////////////////////////

/*
LAYMAN: Safety nets to catch problems without crashing.

TECHNICAL: .catch() for promises, try/catch for async/await and sync code. [web:2]
*/

// Promise error handling
// Promise.reject("Error!").catch((err) => console.error("Promise caught:", err));

// async function safeAsync() {
//   try {
//     await Promise.reject("Async error!");
//   } catch (err) {
//     console.error("Async caught:", err);
//   }
// }
// safeAsync();

//////////////////////////////////////////////////////////////////////

// -----------------------------------------------------------------------------

const getAllProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const productsJson = await res.json();
    const products = productsJson.slice(0, 5);
    console.log(productsJson, "productsJson");
    console.log(products, "fiveProducts");

    const productsContainer = document.getElementById("products-container");
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.setAttribute("data-id", product.id);

      card.innerHTML = `
        <img src=${product.image} alt="" style="width:100px" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <p>
            <label> Qty</label>
            <input class="qty" type="text" />
        </p>
        <button>Add to Cart</button>
      `;
      productsContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error, "producte error");
  }
};
getAllProducts();


