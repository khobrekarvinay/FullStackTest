
// What is the difference between synchronous and asynchronous code ? -----------------------------------------------------------------
//-> Sync code is executed sequentially, one line at a time, in the order it appears. Each task must complete before the next one starts.
// If a task takes time, the entire program waits (block).

// Asyn code allows tasks to start and proceed independently, without waiting for previous tasks to complete. 
// Non blocking: Long-running tasks (e.g. fetching data) don't stop the rest of the program from executing
// While Jscript is only synchronous it can be made to behave Asynchronously using Promises and Async/Await. 


///Q. What are Promises and Async/Await ? ----------------------------------------------------------------
//-> JavaScript uses Promises and Async/Await to handle asynchronous code efficiently, making the code easier to read and manage. 

// Promises : ----------------------
// A Promise is an object that represents the eventual completion (or failure) of 
// an asynchronous operation and its resulting value.

// Promise States: 
// Pending: The task hasn't finished yet. 
// Fulfilled: The task was successful.
// Rejected: the task failed.

// Q. Why so many parts (resolve, reject, then, catch)? 
// Think of it as two separate parts: The "Creator" and the "Receiver".

// 1. The Creator (new Promise((resolve, reject) => { ... }))
// - This is where the work happens (e.g., fetching data).
// - 'resolve' and 'reject' are switches provided by JS.
// - Calling resolve(data) -> Turns state to "Fulfilled" -> Triggers .then()
// - Calling reject(error) -> Turns state to "Rejected" -> Triggers .catch()

// 2. The Receiver (.then, .catch)
// - This waits for the result.
// - .then() -> Only runs if resolve() was called.
// - .catch() -> Only runs if reject() was called.


// Example: Creating and Consuming a Promise
const myPromise = new Promise((resolve, reject) => {
  let isSuccess = true;

  if (isSuccess) {
    resolve("Task completed successfully!"); // Triggers .then()
  } else {
    reject("Task failed!"); // Triggers .catch()
  }
});

myPromise
  .then(result => console.log(result)) // Runs if resolved
  .catch(error => console.error(error)) // Runs if rejected
  .finally(() => console.log("Promise is finished!")); // Runs always


//___________________________________________________________________________________________



// Async / Await : --------------------
// Async/Await is a simpler way to handle Promises.

// async: Marks a function as asynchronous (it returns a Promise obj).
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
  
// Q. Wait, if async/await is simpler, why did we still write "new Promise", "resolve", and "reject" above?
// -> Good catch! The example above *manually creates* a promise to simulate a delay or task. 
// In 99% of real-world coding, you consume functions that ALREADY return a Promise (like fetch, axios, database calls).
// You rarely write `new Promise` yourself.

// Real World Example (Simpler Syntax):
async function getUser() {
  try {
    // fetch() returns a Promise automatically. We just await it. No resolve/reject needed here.
    const response = await fetch('https://api.example.com/user'); 
    const data = await response.json(); 
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

//_____________________________________________________________________________________________

////Q. What is the Event loop in Javascript ? 
//  
