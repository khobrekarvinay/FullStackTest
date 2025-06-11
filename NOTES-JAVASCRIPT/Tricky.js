



// Question 1 ------------------------------------

// const a;
// console.log(typeof a == typeof b);

// -> SyntaxError because const declarations must be initialized. 
// If declared with let or var it's value will be undefined. 
// And b isnt declared, referencing it will throw a ReferenceError.




// Question 3 ----------------------------------


// Question 4 -----------------------------------



// Question 5 ----------------------------------

// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b])




// Question 6 -----------------------------------

// const nums = [1, 2, 3, 4];
// const squared = nums.map((num) => {
//   if (num % 2 === 0) {
//     return num * num;
//   }
// });
// console.log(squared);

//Output: [undefined, 4, undefined, 16]

// No the if condition will not skip elements where the condition doesnt meet. It will push undefined in the array. 
// Remember map() applies a callback to each element and returns an array of same length with modified values. 


// Question 7 ----------------------------------











