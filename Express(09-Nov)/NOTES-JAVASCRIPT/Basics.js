

// What is Javascript ? 
//-> JavaScript is a programming language used for creating dynamic content on websites. It is a lightweight,
// cross-platform and single-threaded programming language. JavaScript is an interpreted language that executes 
// code line by line providing more flexibility. 

// Features of JS when compared to Java. 

//1. Interpreted: -------------------
// JS is interpreted language, meaning that it's executed line-by-line by the browser or Node.js without the need of a prior compilation step.
// This allows for faster development cycles since you don't need to compile your code before running it. 

// Java is a compiled language, which requires the code to be compiled into bytecode and then executed by the Java Virtual Machine (JVM). 
// Compilation adds an extra step but but provides advantages in terms of performance and portability across different platforms.

//2. Dynamic Typing: ------------------
// JS is dynamically typed. You don't have to explicitly define the types of variables. The type is determined at runtime, 
// which makes JS more flexible but can also lead to runtime errors.
    let x = 10; // x is a number
    x = "Hello"; // Now x is a string

// Java is statistically typed, meaning variables must be explicitly declared with a type.
// This leads to fewer runtime errors since type mismatches are caught during compilation.
  // int x = 10; x is an integer
   x = "Hello"; // Error: Type mismatch


//3. THREADING & CONCURRENCY: -------------
// JSript is single-threaded by default, but it can handle asynchronous operations through the event loop and callbacks, 
// with support for Promises and async/await for better handling of asynchronous tasks.

// Java supports multithreading natively and is often used for concurrent tasks. Java's multi-threading model allows multiple threads to run simultaneously,
// which is ideal for CPU-bound tasks like complex calculations.

//4. MEMORY MANAGEMENT: -----------------
// JScript uses automatic garbage collection, which automatically manages memory by freeing up unused objects. No manual memory handling. 
// Reduced risk from issues memory leaks, segmentation faults, or dangling pointers that can occur in languages with manual memory management.

// Java also has automatic garbage collection but provides more control over memory management. Java allows for manual memory handling through 
// the use of memory management techniques like weak references. 

//5. USE CASES: ---------------------------
// JScript is the core language for creating interactive and dynamic webpages. Primarily used for web development (frontend and backend) but has expanded to mobile (React Native),
// desktop (Electron), and even IoT (Internet of Things) applications.
// Node.js enables JS for server-side programming.

// Java is not used for frontend development in browsers. 
// For Backend - Java (using Spring Boot) is preferred for enterprise-grade, large-scale backend systems due to its performance and stability.


//// Name all available data types in JavaScript ? -------------------------------------------
//-> There are 7 Primitive Data Types : 
// String: "Hello World"
// Number: 42, 3.14 
// BigInt: 1234567890123456789012345678901234567890n
// Boolean: true, false
// Undefined: let x; console.log(x); // undefined
// Null: let x = null
// Symbol: let sym = Symbol('description')

// And 4 Non-Primitive (Reference) Data Types:
// Object: const person = { name: 'Alice', age: 25 };
// Array: const numbers = [1, 2, 3, 4];
// Function: function greet() { console.log("Hello!"); }
// Date: const today = new Date(); console.log(today); 


//// VARIABLES ---------------------------------

//-> Variables are used to store data in JavaScript. Variables are used to store reusable values. The values of the
// variables are allocated using the assignment operator(“=”).

// JavaScript is a dynamically typed language so the type of variables is decided at runtime. Therefore there is 
// no need to explicitly define the type of a variable. We can declare variables in JavaScript wtih 3 keywords:
// 1. var
// 2. let
// 3. const

// Difference between var, let and const.

// | Feature                  | var  | let | const|
// |--------------------------|------|-----|------|
// | Stored in Global Scope   | ✅  | ❌  | ❌  |
// | Limited to Block Scope   | ❌  | ✅  | ✅  |
// | Limited to Function Scope| ✅  | ✅  | ✅  |
// | Can Be Reassigned?       | ✅  | ✅  | ❌  |
// | Can Be Redeclared?       | ✅  | ❌  | ❌  |
// | Can Be Hoisted?**        | ✅  | ❌  | ❌  |

// Scope refers to the area where a variable or function is accessible. Global refers to be accessible from anywhere.

// Assigning is giving value to a variable & Declaring is using keyword to define the type of variable.
    let name; // Declaration
    name = "Alice"; // Assignment
    let age = 25; // Declaration + Assignment

// Explaining global, block & local scope.
    let globalVar = "I am global";
    function myFunction() {
        let functionVar = "I am in function scope";
        if (true) {
            let blockVar = "I am in block scope";
            console.log(globalVar); // ✅
            console.log(functionVar); // ✅
            console.log(blockVar); // ✅
        }
        console.log(globalVar); // ✅
        console.log(functionVar); // ✅
        console.log(blockVar); // ❌
    }
    myFunction();
    console.log(globalVar); // ✅
    console.log(functionVar); // ❌
    console.log(blockVar); // ❌
    
//1. Const keyword is used when we assign a value permanently to a variable. So when we try to change the value of 
// a variable declared with the const keyword it will throw an error. The variables declared with var and let are 
// mutable that is their value can be changed but variables declared using const are immutable.

//2. Keywords let and const are block scoped whereas var is function scoped. So when we try to access let and const
// outside their block they will throw an error.


// How does JScript handle scopes (global, function, block) ? ---------------------------------------------
// Global Scope: 
// Variables or functions declared outside any function or block are in the global scope. They can be accessed anywhere in the program.

// Function Scope: 
// Variables declared inside a function are only accessible within that function. This is called local scope.
// These variables exist only for the duration of the function execution.

// Block Scope: 
// Variables declared using let or const inside a block ({ ... }) are only accessible within that block.
// Block-scoped variables exist only for the duration of the block execution.
// Variables declared with var do not follow block scope; they are function-scoped instead.



///// What is Hoisting ? -----------------------------------------
//-> Hoisting is a JavaScript mechanism where variables, functions, and classes are moved to the top of their containing scope (global or function) 
// during the compile phase no matter where they are declared. This means you can use variables and functions in your code before they are declared or defined.

// Hoisting with var
// When you declare a variable with var, the declaration is hoisted, but its initialization stays in place.

console.log(a); // undefined
var a = 5;
console.log(a); // 5
//During compile phase, Javascript move var a declaraton to the top. Only the declaration is hoisted. Initialisation (a=5) isn't. 

// Hositing with Functions
// Function Declarations are fully hoisted. You can call them before their declaration.

greet(); // Hello, world!
function greet() {
  console.log("Hello, world!");
}


//// What are First-class objects in JavaScript ? ---------------------------
//-> Leaving the basic data types like strings, numbers, booleans, null, undefined everything else is an object. 
// Tt's one of the unique features of JavaScript almost everything a object. First-class objects are those that can be treated like any other value. 
// JavaScript allows almost everything to be treated as first-class objects.

// This means you can:
// 1. Assign them to variables.
// 2. Pass them as arguments to functions.
// 3. Return them from functions.
// 4. Store them in data structures like arrays or objects.

// Functions, Objects, Arrays, Classes, Constructors, Regular Expressions, Promises are all first-class objects.


//////Q. What are arrow functions, and how are they different from regular functions ? ------------------------------
//-> Arrow functions are a simpler way to write functions in JavaScript. 
// Regular: 
function add(a, b) {
  return a + b;
}
// Arrow Function: 
const add = (a, b) => a + b;

// 1. Arrow functions do not have their own arguments object, which is available in regular functions. 
// If you need to access function arguments inside an arrow function, you’ll have to use a different method like rest parameters (...args).

const myFunc = () => {
    console.log(arguments);  // This will throw an error because `arguments` is not available in arrow functions.
  };
  
  myFunc(1, 2, 3);
  
// 2. Arrow functions cannot be used as constructors like regular function with new keyword.
 const Person = (name) => {
  this.name = name;
};
const john = new Person('John');  // Throws an error: "Person is not a constructor"

// 3. Arrow functions don't have their own this. Because a separate object isn't created. Instead, they inherit this from the surrounding context where they are defined.



//////Q. What are Closures in JScript & how do they work ? ----------------------------------------------
//-> A closure is when a function has access & remembers the variables outside its scope. 

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
counter.increment(); // Logs: 1
counter.increment(); // Logs: 2
counter.decrement(); // Logs: 1

// Where are closures useful ? 
// -> To create private variables that can't be accessed directly but can be modified indirectly. Also used to store results. 
// Normally, when a function finishes execution, its local variables are cleared from memory.
// But closures keep those variables alive because the inner function needs them. This makes them useful in cases like: 

// 1. Encapsulation (Security): ----------------
// Encapsulation is the concept of restricting direct access to some of an object's components while exposing others. 
// Closures allow you to hide variables and functions from the outside world and expose only what you want to be accessible.
// In above example, count is private to createCounter and can't be accessed directly, but it can be manipulated via the returned functions.

// JavaScript doesn't have built-in access modifiers like private, protected, or public as in some other languages (e.g., Java, C++). 
// Closures provide a way to copy these concepts.

// 2. Memoization (Storing Results): ---------------
// Closures help store previously calculated results for efficiency.

function memoizedAdd() {
    const cache = {};  // cache isn't cleared from memory because reference in innerFunction exists.
    return function (num) {
        if (num in cache) {
            console.log("Fetching from cache...");
            return cache[num];
        }
        console.log("Calculating result...");
        const result = num + 10;
        cache[num] = result;
        return result;
    };
}

const add = memoizedAdd();
console.log(add(5)); // Calculating result... 15
console.log(add(5)); // Fetching from cache... 15 - Didn't Recalculate



//// What is the 'this' keyword work in JavaScript ? ------------------------------------------------------
//-> In JavaScript, everything is essentially an object, whether it's a simple object you define or more complex things like functions, arrays.
// The this keyword refers to the object that is executing the current function.
// The value of this depends entirely on how the function is called, not where it is written.

// You can control this manually using these methods:

//call: Directly calls the function with a specific this.
//apply: Like call, but arguments are passed as an array.
//bind: Returns a new function with this locked


// How does it work ?? 

// 1. Global context: -----------------------
// In the global scope (outside any function), this refers to the global object. In browsers, that's the window.

console.log(this); // window (in browsers)

// In a regular function, this refers to the global object 
function show() {
    console.log(this);
}
show(); // window (or undefined in strict mode)

//2. Inside a Function: ---------------------------
// When a function is called in the global context (not as a method of an object), this also refers to the global object (or undefined in strict mode).
function sayHello() {
    console.log(this); // Global object (window in browsers) or undefined in strict mode
}
sayHello();


//3. Inside an Object Method: -----------------
//When a function is part of an object (a method), this refers to the object.
const person1 = {
    name: "Alice",
    greet: function() {
        console.log(this.name); // Refers to 'person' object
    }
};
person1.greet(); // "Alice"

//4. Inside an Arrow Function: -------------------
// Arrow functions do not have their own this. Instead, they inherit this from the surrounding (lexical) scope.
const person2 = {
    name: "Alice",
    greet: function() {
        const sayHi = () => {
            console.log(this.name); // Inherits 'this' from the 'greet' function
        };
        sayHi();
    }
};
person2.greet(); // "Alice"

//5. In a Constructor Function Function
// When using a constructor function or the class syntax, this refers to the specific object being created.
function Person1(name) {
    this.name = name; // Refers to the newly created object
}
const person3 = new Person1("Alice");
console.log(person3.name); // "Alice"


//// What is the difference between == and === ? 
//-> First checks only values, === checks value and the data type. 

// What is the difference between synchronous and asynchronous code ? -----------------------------------------------------------------
//-> In synchronous code is executed sequentially, one line at a time, in the order it appears. Each task must complete before the next one starts.
// If a task takes time, the entire program waits (block).

// Asynchronous code allows tasks to start and procedd independently, without waiting for previous tasks to complete. 
// Non blocking: Long-running tasks (e.g. fetching data) don't stop the rest of the program from executing
// While Jscript is only synchronous it can be made to behave Asynchronously using Promises and Async/Await. 


///Q. What are Promises and Async/Await ? ----------------------------------------------------------------
//-> JavaScript uses Promises and Async/Await to handle asynchronous code efficiently, making the code easier to read and manage. 

// Promises : ----------------------
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise States: 
// Pending: The task hasn't finished yet. 
// Fulfilled: The task was successful.
// Rejected: the task failed.

// How to Create a Promise
 const myPromise = new Promise((resolve, reject) => {
  let isSuccess = true;

  if (isSuccess) {
    resolve("Task completed successfully!");
  } else {
    reject("Task failed!");
  }
});

// Using .then() .catch() & .finally()
// .then() : runs when the Promise is successful.
// .catch() : runs if the Promise fails.
// .finally() : runs no matter what happens (success or fail).
myPromise
  .then((result) => {
    console.log(result); // "Task completed successfully!"
  })
  .catch((error) => {
    console.error(error); // "Task failed!"
  })
  .finally(() => {
    console.log("Promise is finished!");
  });


// Async / Await : --------------------
// Async/Await is a simpler way to handle Promises.

// async: Marks a function as asynchronous (it returns a Promise).
// await: Waits for the Promise to finish before running the next line.

// Instead of .then() .catch() here we use Try and Catch blocks. 

async function fetchData() {
    try {
      const result = await new Promise((resolve, reject) => {
        let isSuccess = false;
  
        if (isSuccess) {
          resolve("Data fetched!");
        } else {
          reject("Error fetching data!");
        }
      });
  
      console.log(result);
    } catch (error) {
      console.error(error); // Output: "Error fetching data!"
    }
  }
  
  fetchData();
  

////Q. What is the Event loop in Javascript ? -------------------------------------------------------------
//  










  
  

