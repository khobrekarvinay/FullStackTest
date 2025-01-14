
////Q. What is Express & Why do we need it ?--------------------------------------------------------

//-> Express.js is a minimal and flexible web application framework for Node.js that provides tools & features to build web applications and APIs quickly.
// It simplifies the process of handling HTTP requests, managing middleware, and creating routes in a Node.js server.

// Why we need it 
//-> Node.js alone can handle HTTP requests, but building a robust web application with just Node.js can become repetitive and complex. Express provides
// a framework that makes these tasks easier and more efficient

//1. Simplifies Server-side Programming
// Without Express: Writing server-side code requires manual handling of routes, parsing requests, and managing responses.
// With Express: Express provides methods like app.get() and app.post() to handle requests directly, reducing boilerplate code.

//2. Routing Made Easy
//Express allows you to define multiple routes for different HTTP methods (GET, POST, etc.) and URLs, making it easy to organize your application.

//3. Middleware functions in Express allow you to process requests and responses before they reach their final destination. Like logging, authentication, 
// & parsing request bodies (e.g; express.json()) for JSON data, CORS for handling req, res on different URLs.



////Q. HTTP Requests in Express -------------------------------------------------

//-> HTTP requests are the messages sent by a client like web browser or mobile app, to a server to request data, send data or perform actions. 
// The server processes the request and responds with data, status code, and more. 
// In simple words they allow the exchange of data between client and server. 

// Express is a Node.js framework that helps handle HTTP requests efficiently. Common HTTP methods. 
// GET: Retrieve data from the server.
// POST: Send data to the server (e.g., form submissions).
// PUT: Update an existing resource on the server.
// DELETE: Delete a resource on the server.


/////Q. How to make HTTP Requests in Express. -----------------------------------------

//-> First understand the 'req' and 'res' objects as they are passed as paramters in every HTTP request. 

// REQ object
// The 'req' object represents HTTP request sent from client to server. 
// Most important one is req.body. Other keys in the req object aren't used that much. 
 req.body //Contains data sent in the body of the request, mainly used in POST or PUT requests. To access req.body, you need express.json() middleware to parse JSON data.
 req.params //Contains route parameters, which are parts of the route that are dynamic. For example, in /api/products/:id, req.params.id gives you the value of id. 
 req.method //Specifies the HTTP method used (e.g., GET, POST).

// RES object 
// The 'res' object represents HTTP response sent from server to client. 
// Key methods of res:
 res.send() // Sends plain text or HTML response to the client
 res.json() // Sends a JSON response to the client, typically used for API's. Most used method in 'res'.
 res.status() // Sets the HTTP status code of the response (eg. 200 for success, 404 for not found)
 res.sendStatus() // Sets the HTTP status and sends its associated message (e.g., res.sendStatus(404) sends "Not Found").
 res.redirect() // Redirects the client to a different URL. 




// A Full server.js file with GET & POST requests----------------------------------

const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// GET request example with query and route parameters
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;       // Access route parameter
  const category = req.query.category;   // Access query parameter

  // sending response 
  res.json({
    message: 'Product fetched successfully',
    productId: productId,
    category: category
  });
});

// POST request example to create a new product
app.post('/api/products', (req, res) => {
  const { name, price, category } = req.body; // Whatever data we send to server from Thunderclient or from axios.post in frontend, 
  // it gets saved in req.body. We destructure it into variables to be able to use it for field checking and sending response of 
  // what data was posted
  
  // Field checking
  if (!name || !price || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // Send back a success response
  res.status(201).json({
    message: 'Product created successfully',
    product: { name, price, category }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


////Q. What are Middlewares ---------------------------------------------------------------

//-> Middlewares is a function that sits between the request (req) sent by the client & the response (res) sent by the server.
// Middleware functions can perform operations on the request and response objects, handle errors, or end the request-response cycle. 
// There are 3 types of middlewares.

//1. Built-in Middlewares: These are middlewares provided by Express itself. 

app.use(express.json()); // Parses JSON data in the request body.
app.use(express.static('public')); // Serves static files.

//2. Third-party Middlewares: Provided by external libraries. Eg: cors, body-parser, morgan

const cors = require('cors');
app.use(cors()); 

//3. Custom Middlewares: Making custom middlewares for specific tasks. They take (req, res, next) as arguments.
// next() is a function to pass control to the next middleware in the stack. req and res objects are passed so that they can be modified.

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware.
});

// How Middlewares Work -----------------------------------------------------

// Middleware functions of any type are executed sequentially in the order they are defined. 
// Each middleware function can :
// Modify the req, res object.
// Stop the request-response cycle.
// Call next() to pass control to the next middleware.

//Example of Sequential Middleware Execution Order in Server.js

const express = require('express');
const app1 = express();

// Built-in middleware
app.use(express.json()); // Middleware 1

// Custom middleware
app.use((req, res, next) => {
  console.log('Middleware 2 - Custom');
  next();
});

// Another built-in middleware
app.use(express.static('public')); // Middleware 3

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Middlware execution order for the 'get' request above is :
// first express.json(), 
// then Custom middleware 2
// then express.static('public')

// Why the order is important ? 
// Middleware earlier in the stack can modify the request (e.g., parsing JSON) before it reaches later middleware or route handlers.
// Middlewares like authentication need to be before the request goes to main operation controllers. 
// Some like Error-handling middleware should typically be defined last to catch errors from all preceding middleware and route handlers.



////Q. What is CORS ?----------------------------------------------------------------------

// CORS (Cross-Origin Resource Sharing) is a security feature implemented in web browsers to control how resources on a server are requested by another domain.
// In other words, it helps manage requests from a different origin than the server’s own. An origin includes the domain, protocol, and port number. 
// If any of these differ between the requesting client and the server, the request is considered cross-origin. 

// The "same-origin" policy prevents web applications running at one origin from interacting with resources at another. Without CORS, a frontend application 
// hosted on http://localhost:3000 cannot make requests to a backend at http://localhost:8000, as they are considered different origins.

app.use(cors()); // Syntax to enable cors in server.js


////Q. Auto Parsing with express.json() ----------------------------------------------------

app.use(express.json()) // Add this line in main server file

//express.json() is a built-in middleware in Express, it auto parses incoming requests with JSON payloads and makes the data available
// in req.body as a JavaScript object.
// express.json() also manages parsing errors for malformed JSON, so if a client sends invalid JSON, the middleware will respond with a 400 Bad Request error.

































