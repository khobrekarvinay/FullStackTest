


///// What is JWT ? ---------------------------------------------------------------------

//-> JSON Web Token is a compact, URL-safe and cryptographically signed token used for authentication & secure information exchange.
// It uses a secretkey i.e a private string to sign the token. The server uses this to verify the token later

//Features: 
// Contains all the necessary information; server doesn't store session state.
// Signed using HMAC or RSA cryptographic method, making it secure, tamper-proof.
// Short-lived: Typically includes an expiration time for security. 

// Generating a JWT (server-side):

const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey'; 

// Creating a token
// Syntax: jwt.sign(payload, secretKey, options)
const token = jwt.sign({ userId: 1, name: 'John Doe' }, secretKey, { expiresIn: '1h' });
console.log(token);

// Verifying a token
try {
  const decoded = jwt.verify(token, secretKey);
  console.log(decoded); // { userId: 1, name: 'John Doe', iat: ..., exp: ... }
} catch (err) {
  console.log('Invalid token');
}

// Where to use ? 
// Session Management: Ensures the user is logged in and authorized. 
// Stateless API: Suitable for REST APIs, where no session state is stored on the server.

// Where should JWT be stored ideally ?
// 1. HTTPOnly Cookies: Unaccessible by Javascript, so safe from XSS attacks (cross-site script)

//2. Session Storage: Safer than Local Storage for single page apps as it's cleared when the tab is closed.
// But still vulnerable to XSS attacks.



///// BRCRYPT LIBRARY -------------------------------------------------------

// Bbcrypt is a cryptographic library widely used for hashing passwords securely. It ensures that even if someone gains access to the stored passwords
// (e.g., via a database breach), the hashed passwords cannot be easily reversed or cracked. 

//1. It converts plaintext passwords into a hash that cannot be decrypted back to the original password.
//2. A random data (a "salt") is combined with password before hashing, ensuring that even identical passwords will have different hashes.
//3. The combined data is hashed multiple times (based on the saltRounds). Higher the saltRound, slower the hashing, harder to attack brute-force



// How To Use Bcrypt ? 

//1. Install command: npm install brcrypt 

//2. Basic bcrypt Workflow: 
// Hash the password before saving it to the database.
// Compare the stored hash with the user-entered password during login.

// Real Coded Example 

//1. Hashing a password 

const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const saltRounds = 10; // Defines the cost factor
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log('Hashed Password:', hashedPassword);
  return hashedPassword;
};

hashPassword('mySecretPassword');

//2. Compare stored hash with the entered password.

const comparePassword = async (enteredPassword, storedHash) => {
    const isMatch = await bcrypt.compare(enteredPassword, storedHash);
    if (isMatch) {
      console.log('Password is correct!');
    } else {
      console.log('Password is incorrect.');
    }
  };
  
  // Example usage
  const hashedPassword = '$2b$10$1f8hG8p.Qd.UJnH1Op3oEuJq/W9X1PH0uF7ofuoX4Z/aFmULZidKu'; // Example hash
  comparePassword('mySecretPassword', hashedPassword);

// Bcrypt hashes are always 60 characters. It doesn't matter if the input password is 4 chars or 100 chars long, the output hash is always the same length.
// A saltRounds value of 10-12 is recommended for most applications. 
// A very high cost factor can cause significant delays for real users during registration or login.



