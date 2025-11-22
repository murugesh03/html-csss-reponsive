//Variables, data types, and Control statements in JavaScript
//Data types - Primitive and Non-Primitive

//Primitive data types - string, number, boolean, null, undefined,
//non-primitive data types - object, array, function

//String
let str = "Hello, World!";
console.log(typeof str); // string
//Number
let num = 42;
console.log(typeof num);
// boolean
let bool = true; //true or false
console.log(typeof bool);
//null
let emptyValue = null;
emptyValue = 2;
console.log(emptyValue); // object
//undefined
let notAssigned;
console.log(notAssigned); // undefined

//non-primitive data types
//object
let person = {
  name: "Alice",
  age: 30
};
console.log(typeof person); // object
//array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object

//variables - var, let, const

/*
var - function scoped, can be re-declared and updated
hoisting - variables declared with var are hoisted and initialized with undefined
*/

name = "John"; // declaration and initialization
var name = null; // declarations
console.log(name); // John

var x = 1;
function varTest() {
  console.log(x); // 1
}
varTest();
console.log(x); // ReferenceError: x is not defined

//let - block scoped, cannot be re-declared in the same scope, can be updated
//ES 6 feature - 2015 version of JavaScript

let a = 25; // declaration and initialization
a = "name"; // updating
console.log(a); // 26

//Const - block scoped, cannot be re-declared or updated
//ES 6 feature - 2015 version of JavaScript

const lastName = "Doe";
lastName = "Smith"; // TypeError: Assignment to constant variable.
console.log(lastName); // Doe
