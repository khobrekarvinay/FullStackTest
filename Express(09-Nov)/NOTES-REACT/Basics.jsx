
//////// What is React ? And Why is it used ?///////////////////

//-> React is a JavaScript library used for building user interfaces (UIs), particularly for single-page applications.
//  It is created and maintained by Facebook, and it has gained massive popularity due to its simplicity, efficiency, 
// and ability to create dynamic, interactive web apps

// How React simplfies things over plain Javascript ?----------------

// In Javascript as application grows code becomes messy and hard to manage. 

//1. Reusable Components
// React uses a component-based architecture where components are like blocks & re-usable. 
// For e.g a Button component can be reused throughout the app by just calling <Button />.
// In JS - No built-in support. You can reuse code via functions or classes, but there's no UI-focused component system. 

//2. UI Updates
// Automatic in React. It automatically re-renders the necessary components when the state changes. In Javascript,
// it's Manual. You need to write code to manually update and re-render parts of the UI when the data changes.

//3. State Management.
// Yes. React uses useState (or useReducer) for local state and libraries like Redux/Context for global state. In Javascript,
// No built in system.  You need to manage state manually (e.g., with variables or custom patterns).

//4. Routing.
// React uses libraries like React Router for declarative routing. 
// In Javasciprt we require manual implementation or external libraries like page.js.

//5. JSX. 
// Yes. React allows use of JSX, a syntax that combines Javascript and HTML for better readability. 
// In JS, nope. HTML and JavaScript are kept separate, which can be harder to manage for dynamic UIs.

//6. Event Handling
// React allows event handlers to be used as attributes. In JS you have to attach event listeners manually using 
// addEventListener & manage their lifecycle. 

//7. Cross-Platform Dev
// React Native allows you to build mobile apps using the same architecture and knowledge.
// In JS, No native solution for cross-platform development. Separate tools are required for mobile apps.

//8. 



////////// What is Virtual DOM and difference in Real DOM ///////////////

//-> The DOM is an interface provided by the browser like a blueprint of the web page, structured as a tree of objects.
// Each element in the HTML document (e.g., <div>, <p>, <img>) is represented as a node in this tree.
// This makes the web page dynamic, meaning you can change its content, structure, and style through programming.

// Why is DOM needed ? -----------------------
// The DOM lets JavaScript "talk" to the page and make changes dynamically. 
// Without the DOM, web pages would be static, like a printed sheet of paper.
// The DOM allows developers to: 
// 1. Change text (<p> content)
// 2. Add new elements (like new <div>s or <button>s).
// 3. Respond to user interactions (e.g., clicks, form submissions).


// Difference -------------------
// Plain JS, Directly interacts with the DOM means changes are direct. For complex apps,
// this can lead to performance bottlenecks because the entire DOM or unnecessary parts may be updated.
// Unoptimized logic also causes DOM tree to recreate. 

// React builds a Virtual DOM tree in memory and uses it to render the initial UI. 
//  React calculates differences between the Virtual DOM and the real DOM & updates only the necessary parts of the real DOM.
//  Prevents DOM re-render and Increasing performance.


// 

















