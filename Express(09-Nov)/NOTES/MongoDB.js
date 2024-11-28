


///////Q. What is Mongoose ?
//-> Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js
// JavaScript runtime environment. Syntax:
mongoose
.connect(process.env.MONGODBURL)
 .then(()=>{console.log("DB connected :)")});

// in connect() we pass the url to our MongoDB database to be able to connect to the database & then() is used to run code if
// the connection is successful



//Q. Some MongoDB methods provided by Mongoose
 //-> Most basic are the CRUD operations (Create, Read, Update & Delete)

// These methods are usable on a database collection only. -> Collection.method() Eg: 
db.collection('collectionName').insertOne(document,options) // Syntax when using Native MongoDB driver


// Second way of writing collection.
User.findOne({ email: "example@example.com" }); // Syntax when using Mongoose. 

// In MongoDB, collections are the equivalent of tables in relational databases. They are groupings of documents (data entries)
// that are stored in a database
// Structure goes like: Database -> Collections -> Documents (anyform of data)

// Collections store multiple documents that share a similar structure or purpose. For example, a 'users' collection might store 
// information about all the users in an application. Unlike tables in relational databases, collections don’t require a fixed schema.
// Each document within a collection can have a different structure, which allows for flexibility in the data model

//Here are the CRUD Operations
//1. CREATE: 
//The insertOne() and insertMany() methods add documents to a collection. InsertOne() inserts single document to the collection. Eg:
db.collection('users').insertOne({ name: "Alice", age: 25 });

//  insertMany() inserts multiple at once. Eg:
db.collection('users').insertMany([
 { name: "Bob", age: 30 },
 { name: "Carol", age: 22 }
]);

//2. READ:
//The findOne() and find() methods retrieve documents from a collection.
// FindOne() finds the first document that matches the given query. Eg:
db.collection('users').findOne({ name: "Alice" });

// The find() method finds all documents that match the query & returns a cursor to iterate over instead of directly returning the full array of documents.
// The cursor is an object that allows you to iterate over the actual results of the query. This is useful when dealing with a huge number of document.
// You can use forEach(), limit(), skip() to return only the documents needed hence saving memory. Eg:

const cursor = db.collection('users').find({ age: { $gt: 20 } }); // greater than
const results = await cursor.toArray(); // Converts the cursor object into an array of documents

//3. UPDATE: 
// The updateOne(), updateMany(), and replaceOne() methods modify documents in a collection.
// UpdateOne() update the first document that matches the query. Eg:

const result = await db.collection('users').updateOne(
 { name: "Alice" },
 { $set: { age: 26 } }
);
console.log(result.modifiedCount); // returns no. of documents updated

// updateMany() updates all documents that match the query. 
const result1 = await db.collection('users').updateMany(
 { age: { $lt: 30 } }, // lesser than
 { $set: { status: "young" } }
);
console.log(result.modifiedCount); // returns number of documents updated

// replaceOne() replaces a single document that matches the query with a new document. Eg:
const result2 = await db.collection('users').replaceOne(
 { name: "Alice" },
 { name: "Alice", age: 28, status: "active" }
);
console.log(result2.modifiedCount); // 1 if a document was replaced

//4. DELETE: 
// The deleteOne() and deleteMany() methods remove documents from a collection.
// DeleteOne() deletes the first document that matches the query. Eg:

const result3 = await db.collection('users').deleteOne({ name: "Alice" });
console.log(result3.deletedCount); // 1 if a document was deleted

// DeleteMany() deletes all documents that match the query.
const result4 = await db.collection('users').deleteMany({ age: { $lt: 25 } }); // lesser than
console.log(result4.deletedCount); // Number of documents deleted



////////Q. Defining a Model with Mongoose 

// Models represent MongoDB collections & provide an interface to interact with the database. They're created like this:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 name: String,
 email: { type: String, unique: true },
 password: String,
});

const User = mongoose.model('User', userSchema);
// Rhs User is the name of collection that get's saved in database. Lhs User is the one that we can use the methods on
//After defining a model, methods like findOne() or other database methods become accessible on that model:

const user = await User.findOne({ email: "example@example.com" });
// Using a model like User provides added structure, validation, and methods over MongoDB’s native methods, making it 
// more efficient to work with data in Node.js applications
