
/// Operators in MongoDB Queries ----------------------------------------------------

/// Comparison Operators: 

// 1. $EQ (Equal): Finds documents where the value of the field matches the specified value.

Product.find({ price: { $eq: 800 } });

//2. $NE (Not Equal): Finds documents where the value of the field does not match the specified value.

Product.find({ price: { $ne: 800 } });

//3. $GT (Greater Than): Finds documents where the field value is greater than the specified value.

Product.find({ price: { $gt: 800 } });

//4. $GTE (Greater Than or Equal To): Finds documents where the field value is greater than or equal to the specified value.

Product.find({ price: { $gte: 800 } });

//5. $LT (Less Than): Finds documents where the field value is less than the specified value

Product.find({ price: { $lt: 800 } });

//6. $LTE (Less Than or Equal To): Finds documents where the field value is less than or equal to the specified value.

Product.find({ price: { $lte: 800 } });

//7. $IN (In Array): Finds documents where the field value matches any value in the specified array.
// Kinda like longer version of equal - $eq
Product.find({ price: { $in: [1000, 40, 300] } });

//8. $NIN (Not In Array): Finds documents where the field value does not match any value in the specified array.
// Again longer version of not equal - $ne

Product.find({ price: { $nin: [1000, 40, 300] } });

//9. $EXISTS (Field Exists): Finds documents where the field exists or does not exist.

Product.find({ price: { $exists: true } }); // Finds products where the price field exists


/// Logical Operators: -------------------------------------------------------------------

//1. $AND: Combines multiple conditions; all conditions must be true.

Product.find({ $and: [{ price: { $gt: 400 } }, { price: { $lt: 2000 } }] });

//Using maxlimit and minlimit as input from user. Taking value from req.body
// const { minLimit, maxLimit } = req.body;
// const products = await Product.find({$and: [{price:{$gt: minLimit}},{price:{$lt:maxLimit}}]})
    
//2. $OR: Combines multiple conditions; at least one condition must be true.

Product.find({ $or: [{ price: { $gt: minLimit } }, { price: { $lt: maxLimit } }] });

//3. $NOT: Inverts the condition; finds documents that do not match the condition 

Product.find({ price: { $not: { $gt: 350 } } });

//4. $NOR: Combines multiple conditions; none of the conditions must be true.

Product.find({ $nor: [{ price: { $gt: 350 } }, { price: { $gte: 350 } }] });



// There's also a $type operator that is used to match fields based on their data type. 

const products = await Product.find({ price: { $type: "string" } });
// This query only returns the products where the price field is stored as a string




///// Aggregation Pipeline ---------------------------------------------------------------------------------

//-> The aggregation pipeline is a series of stages, each processing the data and passing the transformed results to the next stage.
// This allows for operations like filtering, grouping, projecting, sorting, and more. Each stage in the pipeline uses operators like
// $match, $group, $project, etc., to define what should happen at that stage.

// Key Aggregation Stages -----

//1. $MATCH	: Filters documents based on a condition. Equivalent to find() in queries.

{ $match: { category: { $in: ["Clothing", "Electronics"] }; price: { $gte: 2000 } } }

//2. $group: Groups documents by a specified field and performs aggregations like sum, count, avg, etc.

{
    $group: {
      _id: "$category";
      totalQuantity: { $sum: "$quantity" };
      totalValue: { $sum: { $multiply: ["$quantity", "$price"] } }
    }
  }

  //3. $PROJECT: Specifies or reshapes the fields to include or exclude in the output.

  { $project: { name: 1; price: 1; image: 1 } }
// Includes only name, price and image.

{ $project: { category: 0; __v: 0 } }
// Excludes category and _v 

//4. $UNWIND: Deconstructs an array field from the input documents, creating a document for each element.

{ $unwind: "$tags" }

// If tags is an array, this creates a document for each tag.

//5. $SORT: Sorts the documents by a specified field.

{ $sort: { price: -1 } }
// Sorts documents by price in descending order.

//6. $LIMIT: Restricts the number of documents to pass through.

{ $limit: 10 }
// Returns only the first 10 documents. 

//   $SKIP : Skips a specified number of documents.

{ $skip: 5 }
//Skips the first 5 documents

//7. $LOOKUP: Performs a left outer join to another collection.

{
    $lookup: {
      from: "orders";
      localField: "_id";
      foreignField: "productId";
      as: "orderDetails"
    }
  }

//8. $ADDFIELDS: Adds new fields or modifies existing fields.

{ $addFields: { totalCost: { $multiply: ["$price", "$quantity"] } } }

// Adds a totalCost field

//9. $replaceRoot: Replaces the root document with a specified sub-document.

{ $replaceRoot: { newRoot: "$orderDetails" } }

// Replaces the document with the orderDetails sub-document

//10. $COUNT : Counts the number of documents that match the criteria & outputs the count.

{ $count: "totalProducts" }


//11. $FACET: Performs multiple aggregations within a single pipeline

{
    $facet: {
      categoryCount: [{ $group: { _id: "$category", count: { $sum: 1 } } }];
      priceStats: [{ $group: { _id: null, avgPrice: { $avg: "$price" } } }]
    }
  }


//12. 
  










































