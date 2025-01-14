

// What is Javascript ? 
//-> JavaScript is a programming language used for creating dynamic content on websites. It is a lightweight,
// cross-platform and single-threaded programming language. JavaScript is an interpreted language that executes 
// code line by line providing more flexibility. 

// Features of JS :

//1. Interpreted: ----------------------
// JS is interpreted language, meaning that it's executed line-by-line by the browser or Node.js without the need of a prior compilation step.
// This allows for faster development cycles since you don't need to compile your code before running it. 

// Java is a compiled language, which requires the code to be compiled into bytecode and then executed by the Java Virtual Machine (JVM). 
// Compilation adds an extra step but but provides advantages in terms of performance and portability across different platforms.

//2. DYNAMIC TYPING: --------------------
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

//4. MEMORY MANAGEMENT: -------------------
// JScript uses automatic garbage collection, which automatically manages memory by freeing up unused objects. No manual memory handling. 
// Reduced risk from issues memory leaks, segmentation faults, or dangling pointers that can occur in languages with manual memory management.

// Java also has automatic garbage collection but provides more control over memory management. Java allows for manual memory handling through 
// the use of memory management techniques like weak references. 

//5. OBJECT ORIENTED: -------------------
// Both are object-oriented languages.

//6. USE CASES: ---------------------------
// JScript is the core language for creating interactive and dynamic webpages. Primarily used for web development (frontend and backend) but has expanded to mobile (React Native),
// desktop (Electron), and even IoT (Internet of Things) applications.
// Node.js enables JS for server-side programming.

// Java is not used for frontend development in browsers. 
// For Backend - Java (using Spring Boot) is preferred for enterprise-grade, large-scale backend systems due to its performance and stability.

//6. Other comparisons with Java --------------
//# JavaScript applications are meant to run inside a web browser.
// Java applications are generally made for use in operating systems & virtual machines.

//______________________________________________________________________________________________________

///////Q. COMPILATION PROCESS -------------------------------

// Conversion to bytecode instead of machine code is needed because machine code is platform specific; tied to the architecture of the target CPU, x86, ARM, etc. 
// Bytecode can be run on any machine that has a compatible virtual machine or interpreter.
// C & C++ code is direct machine code compilation. That's why it's way faster. 

// Early Javascript engine directly used to convert to machine code line by line at runtime. That's why it was called Interpreted.
// Modern Javascript engine first compiles to bytecode and then to machine code. 

// So Javascript isn't actually 100% interpreted but people still call it interpreted because we aren't separately compiling the code before running it. 
// Source -> bytecode -> machine code happens behind the scenes. So kinda behaves like interpreted. Also dynamic typing adds to that behaviour.

// Also Most modern JavaScript engines (like V8) now use a technique called Just-In-Time (JIT) compilation. This means that during execution, repeated
// parts of the code are compiled into machine code for better performance.

// So Javascript is both most Interpreted & some Compiled.


//____________________________________________________________________________________________________________________

//// Name all available data types in JavaScript ? 

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

// Statically vs Dynamically Typed --------------------------------
//-> In statically typed languages, the type of a variable is determined at compile-time and cannot change later.
// You must explicitly declare the variable's type when writing the code, or the type is inferred by the compiler.
//E.g C, C++, Java, TypeScript, Kotlin

//-> In dynamically typed languages, the type of a variable is determined at runtime, and it can change during program execution.
// Variables are not explicitly assigned a type when declared.
//E.g. Javascript, Python, Ruby, PHP

//_________________________________________________________________________________________________________________

//Q. VALUE vs REFERENCE.

//-> Primitive are small & straightforward so they are passed or copied by value.
// Let x=5;  The number 5 is stored directly in the variables memory.

// Reference data types are first created in memory but are passed or copied by reference(memory address).
// These data types can contain large and complex structures, for eg. a all product fetch result would be an object having all
// 400-500 products or something. Passing or copying such a big object to something by value means you'd create it again in a separate place in memory.
// This is very inefficient in terms of both memory usage and time. So that's why these types are passed or copied by reference.

//-> When you compare primitive types (e.g., numbers, strings), the comparison is based on the actual value.
var x1 = 10;
var y = 10;
console.log(x1 == y); // true (values are the same)

//-> When you compare objects (including arrays), the comparison checks whether they reference the same memory location.
// Even if two arrays have the same elements, they are separate objects in memory. 
var a = [1, 2, 3];
var b = [1, 2, 3];
console.log(a == b); // false (different memory references)

// How Arrays Are Stored..
//-> When you create an array like a = [1, 2, 3], it is stored in memory, & the variable a holds a reference (a memory address) to that array.
// Similarly, when you create b = [1, 2, 3], a new array is created in a different memory location, and b holds a reference to it.

// To compare Arrays by their content you'll have to compare element by element using loops.

//_________________________________________________________________________________________________________________

// Statement vs Expression.
// A statement is an instruction that performs an action. It does not produce a value that can be used immediately.
// They control the flow of execution in a program (like loops, conditionals, declarations).

// An expression is any valid unit of code that produces a value.
  2 + 3;        // Expression (evaluates to 5)
let y = x + 5; // The `x + 5` part is an expression; the whole line is a statement
console.log(x > 0); // The `x > 0` part is an expression (evaluates to `true` or `false`)

 

//_________________________________________________________________________________________________________________

//Q. CALL BY VALUE -------
//-> When a function is called, a copy of the value is passed to the function.
// Changes made to the parameter inside the function do not affect the original value outside the function.
// Applies to: Primitive data types

let x1 = 10;

function modifyValue(value) { value = 20; }    // Changes only the local copy
modifyValue(x1);
console.log(x1); // Output: 10 (original unchanged)

//Q. CALL BY REFERENCE ------
//-> A reference (memory address) of the variable is passed to the function.
// Changes made to the parameter inside the function affect the original object/array outside the function.
// Applies to: Objects (including arrays and functions)

let obj1 = { a: 1 };
function modifyObject(reference) { reference.a = 99; } // Modifies the original object
modifyObject(obj);
console.log(obj.a); // Output: 99 (original is modified)




//_________________________________________________________________________________________________________________


//Q. Shallow Copy vs Deep Copy in Arrays & Objects ---------------------

// Shallow copy does create a new memory location for the first level of properties (i.e un-nested ones), but for nested objects or arrays, 
// it only copies the reference, not the actual data. This means:

// The first-level properties (like strings, numbers, or primitives) are copied to new memory locations. Changes to these in the copy will not affect the original.
// For nested objects or arrays, both the original and the copy share the same memory location. Changes to the nested structure in one will reflect in the other.

const original = {
  name: "John", address: { city: "New York" },};
const shallowCopy = { ...original }; // Shallow copy using the spread operator

shallowCopy.name = "Jane"; // Changing first-level property
shallowCopy.address.city = "Los Angeles"; // Changing nested object property

console.log(original.name); // Output: "John" (First-level property no change)
console.log(original.address.city); // Output: "Los Angeles" (Nested property changed in original as it's shared) 
// 
// Shallow copy is better than deep copy when only working on flat arrays and objects as it saves memory and is faster.

// This happens because primitive types are copied by value, i.e the keys and values. But Reference types are copied by reference.

// DEEP COPY: -----------------------------------
// Duplicates the object entirely, creating separate memory location for each level of nested objects & arrays too.
// The copied object is completely separate from the original, meaning changes in one do not affect the other.

const original1 = {
  name: "John",
  address: { city: "New York", zip: "10001" },
};
const deepCopy = JSON.parse(JSON.stringify(original)); // Deep copy using JSON
deepCopy.name = "Jane"; // Change the first-level property
deepCopy.address.city = "Los Angeles"; // Change the nested object property
console.log(original1.name); // Output: "John" (independent change)
console.log(original1.address.city); // Output: "New York" (independent change)

// JSON.parse() & JSON.stringify() are used to create deep copy.
// JSON.parse() is used to convert json format string to object.

// So the difference between both copies is how they handle nested properties.

//_________________________________________________________________________________________________________________

///Q. TypeOf Operator.

//-> The typeof operator in JavaScript returns a string indicating the type of the operand.
//Eg..
console.log(typeof typeof 123); // "string"
// Explanation:
// typeof 123 returns "number".
// typeof "number" returns "string".

console.log(typeof []); // "object"
// Arrays are objects in JavaScript.
// Use `Array.isArray([])` for array checking.

console.log(typeof NaN); // "number"
// NaN is considered a special "invalid number".

console.log(typeof undeclaredVariable); // "undefined"
// Unlike accessing an undeclared variable (which throws ReferenceError),
// `typeof` gracefully handles it and returns "undefined".

function myFunc() {}
console.log(typeof myFunc); // "function"
// Functions are objects but have their own `typeof` output.

const sym = Symbol("mySymbol");
console.log(typeof sym); // "symbol"
// ES6 introduced Symbols for unique keys.

const bigIntValue = 123n;
console.log(typeof bigIntValue); // "bigint"
// New type for large integers.



//_________________________________________________________________________________________________________________

///Q. What is Implicit Type Coercion in Javascript ? ---------------------------------------------------------------------------------------
//-> Implicit Type Coercion in JavaScript refers to the automatic conversion of values from one data type to another by the JavaScript engine during operations.
// This behavior happens when JavaScript encounters operations that involve mismatched types and attempts to make the types compatible.

// False Valuues: 
console.log(false); // false: 
console.log(0);     // false: The number 0
console.log("");    // false: An empty string
console.log(null);  // false: null represents "no value" 
console.log(undefined); // false: undefined means "not assigned" 
console.log(NaN);   // false: NaN ("Not-a-Number")

// Everything else is True.

//1. String Coercion: 
// When a number or other value is concatenated with a string, JavaScript converts it to a string.
console.log(5 + "5"); // "55"
console.log(true + " is true"); // "true is true"

//2. Number Coercion: 
// When using arithmetic operators (except +), JavaScript converts strings and booleans to numbers. Strings and Booleans are converted to numbers.
console.log("5" - 2); // 3
console.log("10" * "2"); // 20
console.log("20" / 4); // 5
console.log(true + 1); // 2 (true becomes 1)
console.log(false + 10); // 10 (false becomes 0)

//3. Boolean Coercion:
// Non-boolean values are converted to true or false in logical operations. 
console.log(!!0); // false
console.log(!!""); // false
console.log(!!"Hello"); // true
console.log(!!1); // true

// In logical contexts (e.g., if statements), non-boolean values are converted to their truthy or falsy equivalents.
// Falsy values: 0, NaN, "", null, undefined, false.
// Truthy values: Everything else.
if ("") {
  console.log("This won't run"); // False
}
if ("Hello") {
  console.log("This will run"); // True
}

//4. Equality Comparison:
// == performs type coercion to compare values of different types.
console.log(5 == "5"); // true (string "5" is coerced to number 5)
console.log(false == 0); // true (false is coerced to 0)
console.log(null == undefined); // true
console.log([] == ""); // true (array is converted to an empty string)
console.log([] == ![]); // Output: true;

// === doesn't perform coercion
console.log(5 == "5"); // true (coerced to same type)
console.log(5 === "5"); // false (strict equality)


//5. Object Coercion:
// Object Keys can only be Strings or Symbols

// The concept here is keys of plain object ({}) are always strings or symbols. 
// When something other than a string is passed as a key like in this case: "{key : "b"}" JScript automatically converts the key to a string. 

// When an object is converted to string its default string representation is [object Object].

// This is because objects in Javascript inherit the toString method from Object.prototype which by default returns the string "[object Object}".
// So in the end since both b and c in a[b] & a[c] stringify to same value ("[object Object]"), a[c] overwrites the value to 456. 

// So in the end output is 456. 

let a = {};
let b = { key: "b" }; // Object
let c = { key: "c" }; // Object
a[b] = 123; 
a[c] = 456; 

console.log(a[b]); // Outputs: 456

// To avoid this issue, you map instead of plain object. Map allows objects to be used as keys without converting them to strings. 
let map = new Map();
let b1 = { key: "b" };
let c1 = { key: "c" };
map.set(b1, 123);
map.set(c1, 456);
console.log(map.get(b1)); // 123
console.log(map.get(c1)); // 456

//___________________________________________________________________________________________

//// What is the difference between == and === ? 
//-> Double equal checks only values, Triple equal checks value and the data type. 

////Q. What is the NaN property in Javascript ?
//NaN property in JavaScript is the “Not-a-Number” value that is not a legal number. 


//___________________________________________________________________________________________

//// VARIABLES :

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

// SCOPE refers to the area where a variable or function is accessible. Global refers to be accessible from anywhere.
// Lexical scope means that variable accessibility is determined by the position of the code in the source, not at runtime.

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

///Q. What is the difference between Undefined, Undeclared & Null in JavaScript?
// Undefined means a variable has been declared but a value has not yet been assigned to that variable.
// Undeclared means Variables that are not declared or that do not exist in a program or application.
// Null is an assignment value that we can assign to any variable that is meant to contain no value

// Q. How does JScript handle scopes (global, function, block) ? ---------------------------------------------
// Global Scope: 
// Variables or functions declared outside any function or block are in the global scope. They can be accessed anywhere in the program.

// Function Scope: 
// Variables declared inside a function are only accessible within that function. This is called local scope.
// These variables exist only for the duration of the function execution.

// Block Scope: 
// Variables declared using let or const inside a block ({ ... }) are only accessible within that block.
// Block-scoped variables exist only for the duration of the block execution.
// Variables declared with var do not follow block scope; they are function-scoped instead.


//_____________________________________________________________________________________________________________

/////Q. What is Hoisting ? 
//-> Hoisting is a JavaScript mechanism where variables, functions, and classes are moved to the top of their containing scope (global or function) 
// during the compile phase no matter where they are declared. This means you can use variables and functions in your code before they are declared or defined.

// Hoisting with var
// When you declare a variable with var, the declaration is hoisted, but its initialization waits till you get to that line.

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

// Tricky Question 1: -----------------------------
function outer(){
       var b = 2
    function inner(){
        b++;          // Incrementing undefined variable
        console.log(b) // Nan
        var b = 3; 
    }
    inner(); // Also Nan
}
outer(); // Also Nan

//-> Again Hoisting moves declarations to the top but does not initialize the value. It's initialized only when it comes to that line.

// Inner var b will replace the outer declaration of var b. And is hoisted. So at b++, var b is declared but not initialized. 
// Because it will be initialized only when it comes to var b = 3; 
// b++ when b is undefined gives Nan : Not a number. This is assigned to b now.
// So now console.log(b) shall print Nan.

// Replacing outer declaration of any var is called Shawdowing.

// Tricky Question 2: -----------------------------
function abc() {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x); //1
    }
    console.log(x);  //undefined
    console.log(y);  //2
  };
//-> Both Var x & y inside catch is hoisted to the function scope but is initialized only within the catch block. 
// Catch (x) : x is passed to catch block which makes it a block scope variable. not accessible outside the block. 
// First console.log(x); will print normally. Second console.log(x) outside catch block will print undefined as it's not initialized anymore. 
// x was block scoped remember ? And last the console.log(y) will print 2 normally as it is global scope and initialized also.

// Tricky Question 3: --------------------------
function sayHelloWorld() {
  return sayGoodbyWorld;
  var sayGoodbyWorld = function() {
    return "Hello, World!";
  }; // For same name, function declaration is prioritized over variable declaration.
  function sayGoodbyWorld() { //Hoisted
    return "Goodbye, World!";
  }
}
console.log(sayHelloWorld()); // Goodbye, World

// Tricky Question 4: ------------------------

//_______________________________________________________________________________________________________________________

///Q. Characteristics Of Javascript Strict Mode: -----
// Strict mode does not allow duplicate arguments and global variables.
// One cannot use JavaScript keywords as a parameter or function name in strict mode.
// All browsers support strict mode. 
// Strict mode can be defined at the start of the script with the help of the keyword ‘use strict’.


//_____________________________________________________________________________________________________________________

////Q. What are First-class objects in JavaScript ? 
//-> Leaving the basic data types like strings, numbers, booleans, null, undefined everything else is an object. 
// Tt's one of the unique features of JavaScript almost everything a object. First-class objects are those that can be treated like any other value. 
// JavaScript allows almost everything to be treated as first-class objects.

// This means you can:
// 1. Assign them to variables.
// 2. Pass them as arguments to functions.
// 3. Return them from functions.
// 4. Store them in data structures like arrays or objects.

// Functions, Objects, Arrays, Classes, Constructors, Regular Expressions, Promises are all first-class objects.

//______________________________________________________________________________________

//Q. What are arrow functions, and how are they different from regular functions ? 
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

//________________________________________________________________________________________________________________

////Q. Function Declaration vs Function Expression.

// A function declaration defines a named function using the function keyword. It must have a name.
// It is hoisted, meaning the function is available before its definition in the code.
function functionName(parameters) {
  // Function body
}

// A function expression defines a function as part of a larger expression, such as assigning it to a variable.
// It can be named or anonymous. It is not hoisted, meaning you cannot call it before it is defined in the code.
const functionName = function(parameters) {
  // Function body
};

//________________________________________________________________________________________________________________

/// Tricky Question 1: --------------
var x1 = 1;
if (function test() {}) { // Declaration used as expression
  x1 += typeof test; // Expression isn't hoisted
}
console.log(x); // Output: 1undefined;

// This question checks your understanding of function expressions & the typeof operator.
// Although the function inside if() is a declaration, because it's inside the if() condition which expects a value true or false, 
// so the whole declaration is treated as a Function Expression through Implicit Type Coercion.

// The if statement runs as 'true' because again mentioned in Implicit Type Coercion part. Anything else than the false values is considered as true.

// However, test function is not defined in the outer scope because it is a function expression & not a function declaration. 
// Therefore, typeof f will be 'undefined', and the output will be 1 + undefined which again through ITCoercion will be 1undefined.


///Q. Immediately Invoked Functions (IIFE): -----------------------------------------------------------
//-> Function expressions can be invoked immediately, providing a way to execute code without polluting the global scope.
(function () {
  console.log("IIFE executed immediately!");
})();


//_______________________________________________________________________________________________


///Q. What is a Higher Order Function ? -----------------------------------------------------------------
// Any function that takes another function as an argument (callback). Or returns another function as result.

// Useful to write cleaner, reusable code.
// Eg: map, filter, reduce. For


////Q. What is a Callback function ? -------------------------------------------------------------------
//-> A function passed to another function to be executed later. This is allowed because functions are objects.
// Functions can take other functions as arguments and can be returned by other functions.

// Eg: map(), filter(), and reduce() are methods that take a callback and apply it to each item in the array.
// Instead of writing the logic inside the map(), filter(), or reduce() method itself, 
// you can create a separate function (callback) and pass it in.

// It's called 'Callback' because it's being called again for each element. 


//_______________________________________________________________________________________________

//////Q. What are Closures in JScript & how do they work ? 
//-> A Closure are created whenever a variable that is defined outside the current scope is accessed within the current scope. 

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
const counter = createCounter(); // Functional Expression. 
counter.increment(); // Logs: 1
counter.increment(); // Logs: 2
counter.decrement(); // Logs: 1

// Where are closures useful ? 
// -> To create private variables that can't be accessed directly but can be modified indirectly. Also used to store results. 
// Normally, when a function finishes execution, its local variables are cleared from memory.
// But closures keep those variables alive because the inner function needs them. This makes them useful in cases like: 

// 1. Encapsulation (Security): ----------------
// Encapsulation means hiding data or logic inside a function so it’s not directly accessible from the outside.
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


//__________________________________________________________________________________________

//Q. PROTOTYPES & INHERITANCE in JavaScript -------------
//-> Prototype 


// Tricky Question 1: ------------

function Parent() {}
function Child() {}
Child.prototype = new Parent(); // Parent Instance
var obj = new Child();
console.log(obj instanceof Parent); // Output: true;

//The code creates a Parent and a Child constructor function. The Child prototype is set to an instance of Parent, creating a prototype chain.
// When obj is created using the Child constructor, it inherits from Parent. So, the output will be true.

// Tricky Question 2: -----------

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {  
  // greet method of Person function
  return "Hello, my name is " + this.name;
};
var person1 = new Person("Lokesh Prajapati");
var person2 = new Person("Lucky");
console.log(person1.greet === person2.greet); // Output: true;

// Both person1 and person2 are instances of the Person constructor, and they share the same greet method through the prototype chain.
// So, the output will be true because the greet function reference is the same for both instances.
// It's just a function reference, not function execution comparison using greet().


//________________________________________________________________________________________________________________________



//// What is the 'this' keyword work in JavaScript ? 
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

//2. Inside a Function: ---------------------------
// When a function is called in the global context (not as a method of an object), this also refers to the global object (or undefined in strict mode).
function sayHello() { console.log(this); } // Global object (window in browsers) or undefined in strict mode
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

// Tricky Question: 
// const object = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };
// const c = object.b;
// c();                   // = function() = this.a = undefined

// Output of 'this' depends on how the function is called, not where it is defined. When you assign the function to separate variable,
// it loses it's connection to the object, so console.log(this.a) no longer exists. 
// Output will be undefined as this.a is looking for 'a' in global object. 


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


// Tricky Question 1:
function a() {
  console.log(this);
}
var b = {
  foo: a
};
b.foo(); // Output: { foo: a };

// foo: a, so foo: console.log(this)
// Here this will refer to content inside object b
// that is: {foo: a}

//_________________________________________________________________________________________________________________________


// What is the difference between synchronous and asynchronous code ? -----------------------------------------------------------------
//-> In synchronous code is executed sequentially, one line at a time, in the order it appears. Each task must complete before the next one starts.
// If a task takes time, the entire program waits (block).

// Asynchronous code allows tasks to start and proceed independently, without waiting for previous tasks to complete. 
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
  

//_____________________________________________________________________________________________

////Q. What is the Event loop in Javascript ? 
//  



//___________________________________________________________________________________________



///Q. What is a Cookie ? --------------------------------------------------------------------------------
// A cookie is generally a small data that is sent from a website and stored on the user’s machine by a web browser that was used to access the website. 
// Cookies are used to remember information for later use and also to record the browsing activity on a website.

document.cookie = "key1 = value1; key2 = value2; expires = date";
document.cookie = "username=JohnDoe; expires=Fri, 03 Feb 2025 12:00:00 UTC";

document.cookie = "username=JohnDoe; expires=Fri, 03 Feb 2025 12:00:00 UTC; path=/; secure; samesite=Lax";
// secure: Ensures the cookie is sent over HTTPS only.
// samesite: Prevents the cookie from being sent with cross-site requests (options: Strict, Lax).
// The '/' path makes the cookie accessible across the entire site.

// To use the cookie, 
console.log(document.cookie);

// Deleting a cookie: Set its expiration date to a past date:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//Cookies have a size limit of around 4KB.
//Use cookies sparingly for small data like user preferences. For larger data, consider localStorage or sessionStorage.
//Always use the secure and samesite attributes for security reasons.



//___________________________________________________________________________________________
 

//// Difference between Library & Framework ? ---------------------------------------------------
//-> A library is a collection of pre-written code components like functions, classes, and modules that simplifies development tasks by providing reusable functionality.

// JQuery (Javascript Library for Web Development).
// Redux (React Library for State Management)
// MatPlotLib (Graph Plotting Library)




// FRAMEWORKS: -----------------------
// A framework acts as a pre-established structure offering guidelines and conventions for building applications,
// allowing developers to focus on application-specific logic rather than starting from scratch

// Frameworks come with a lot of built-in features for many common tasks like routing and state management without the need to use external libraries.
// A framework ensures a consistent development approach across the entire application, which makes it easier for large teams to work together.

// Angular(Javascript Framework used for buidling web applications).
// Django (Python framework used for web development).
// Spring(Java framework used for developing web apps and microservices).

// Frameworks are less flexible compared to libraries, as developers cannot deviate from the predefined structure.
// Once an application is developed using a particular framework, switching to different framework later is very difficult and time consuming.
// Mastering a new framework requires lot of time and effort, especially for developers unfamiliar with its structure and syntax.












  
  

