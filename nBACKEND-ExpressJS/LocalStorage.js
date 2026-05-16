
/////// What is Local Storage ? --------------------------------------------------------

//-> A storage mechanism in the browser that allows storing data in key-value pairs. The data remains even after the browser is close and reopened. 
// Data stored in Local Storage is not secure and can be accessed by any script running on the same origin. Here's the syntax:

// Set an item 
localStorage.setItem('key', 'value');
// Get an item
const value = localStorage.getItem('key');
// Remove an item
localStorage.removeItem('key');
// Clear all items
localStorage.clear();

// Where to use ?
// Storing non-sensitive data like user preferences, UI settings, or non-critical information
// Not suitable for secure information like authentication tokens.


/////// What is Session Storage ? -------------------------------------------------------

//-> Same thing as Local Storage. Only differences being Session Storage is cleared when the browser tab is closed whereas
// Local Storage data remains even after closing. And second difference is that it's 'tab-specific'. Data is not shared between tabs,
// even for the same origin. Whereas local is shared across all tabs and windows for the same origin. Here's the syntax: 

// Set an item 
sessionStorage.setItem('key', 'value');
// Get an item
const value1 = sessionStorage.getItem('key');
// Remove an item
sessionStorage.removeItem('key');
// Clear all items:
sessionStorage.clear();



///// What are Cookies ? -----------------------------------------------------------------

//-> Cookies are small pieces of data stored on the client-side and sent with every HTTP request to the server. 

// Features: 
// Can be persistent or have an expiraion time (maxAge or expires) or last only for the session. 
// Sent automatically with HTTP requests, making them ideal for server-side session management.
// Can be marked as 'Secure' & 'HTTpOnly' to prevent client-side access and ensure transport over HTTPS only.

//1. Secure Cookies: -----------
// Can only be transmitted over HTTPS. Eg:
res.cookie('token', jwt, { secure: true });
//2. HTTpOnly Cookies: -----------
// Not accessible via Javascript (e.g.document.cookie)
// Prevents risk of Cross-site scripting attacks
res.cookie('token', jwt, { httpOnly: true });
//3. Use Both for maximum security 
res.cookie('token', jwt, { secure: true, httpOnly: true });


////////// 1. Using cookies (client-side) /////////////

// Setting a cookie
document.cookie = "key=value; max-age=3600; path=/; Secure";

// Reading cookies
console.log(document.cookie); // "key=value"

// Deleting cookies (Set max-age to 0)
document.cookie = "key=; max-age=0; path=/;";


////////// 2. Using cookies (server-side) ////////////

const express = require('express');
const app = express();

// Setting a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('key', 'value', { maxAge: 3600000, httpOnly: true });
  res.send('Cookie is set');
});

// Reading cookies
app.get('/get-cookie', (req, res) => {
  const cookies = req.cookies; // Use cookie-parser middleware
  res.json(cookies);
});

// Deleting a cookie
app.get('/delete-cookie', (req, res) => {
  res.clearCookie('key');
  res.send('Cookie deleted');
});

//Where to use ? 
// Session Managemenet: Tracking logged-in users by storing session IDs.
// Cross-Domain Tracking: Sharing cookies across subdomains.
// Cookies are better for secure, small-sized, server-dependent data.







//// Encrpyted Local Storage -------------------------------------------------

// 


import CryptoJS from "crypto-js";

const encrypted = CryptoJS.AES.encrypt("myData", "secretKey").toString();
localStorage.setItem("data", encrypted);

const decrypted = CryptoJS.AES.decrypt(localStorage.getItem("data"), "secretKey").toString(CryptoJS.enc.Utf8);

console.log("Encrypted Data:", encrypted);
console.log("Decrypted Data:", decrypted);







