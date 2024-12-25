

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
// JS is single-threaded by default, but it can handle asynchronous operations through the event loop and callbacks, 
// with support for Promises and async/await for better handling of asynchronous tasks.

// Java supports multithreading natively and is often used for concurrent tasks. Java's multi-threading model allows multiple threads to run simultaneously,
// which is ideal for CPU-bound tasks like complex calculations.

//4. MEMORY MANAGEMENT: -----------------
// JS uses automatic garbage collection, which automatically manages memory by freeing up unused objects. No manual memory handling. 
// Reduced risk from issues memory leaks, segmentation faults, or dangling pointers that can occur in languages with manual memory management.

// Java also has automatic garbage collection but provides more control over memory management. Java allows for manual memory handling through 
// the use of memory management techniques like weak references. 

//5. USE CASES: ---------------------------
// JS is the core language for creating interactive and dynamic webpages. Primarily used for web development (frontend and backend) but has expanded to mobile (React Native),
// desktop (Electron), and even IoT (Internet of Things) applications.
// Node.js enables JS for server-side programming.

// Java is not used for frontend development in browsers. 
// For Backend - Java (using Spring Boot) is preferred for enterprise-grade, large-scale backend systems due to its performance and stability.





//// VARIABLES ---------------------------------

//-> Variables are used to store data in JavaScript. Variables are used to store reusable values. The values of the
// variables are allocated using the assignment operator(“=”).

// JavaScript is a dynamically typed language so the type of variables is decided at runtime. Therefore there is 
// no need to explicitly define the type of a variable. We can declare variables in JavaScript in three ways:
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

//




  











  
  

