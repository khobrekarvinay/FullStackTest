
//___________________________________________________________________________________________________________________________

//Q. REST PARAMETER 
// The rest parameter is used in function arguments to collect multiple arguments into a single array. 

function multiply(factor, ...nums) {
    return nums.map(num => num * factor);
  }
  console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
  
  function concatenateStrings(...strings) {
    return strings.join(" ");
  }
  console.log(concatenateStrings("Hello", "World", "!")); // Output: "Hello World !"
  

//Q. SPREAD OPERATOR ------------------------------------
//-> The spread operator is used to spread out the elements of an array or the properties of an object into individual elements or properties.

const numbers4 = [1, 2, 3];
console.log(...numbers4); // Output: 1 2 3

// Combining Arrays
const arr3 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr3, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Cloning an object
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); // Output: { a: 1, b: 2 }
console.log(original === copy); // Output: false (different objects)


// Usecase where both is used: ------------------------

const fetchedUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  };
  // Populate Form Fields
  const [formData, setFormData] = React.useState({ ...fetchedUserData });// copies the object into state
  
  // Display the data in the form
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep other fields the same
      [name]: value, // Update only the changed field
      // Object destructing
    });
  }



//___________________________________________________________________________________________________________________________

//Q. OBJECT DESTRUCTING

//-> Object Destructuring in JavaScript is a syntax that allows you to extract and modify values from objects and assign them to variables in a more concise way.
//  It simplifies accessing object properties without explicitly referencing the object multiple times.

const person1 = {
    name: "Alice",
    age: 25,
    city: "New York",
  };
  const { name, age } = person1;
  console.log(name); // "Alice"
  console.log(age);  // 25
  
// Add variables with destructuring------------
const user = { username: "john_doe" };
const { username, age1 = 30 } = user;
console.log(username); // "john_doe"
console.log(age1);      // 30 (default value)

//Rename variables**-------------
const employee = { id: 101, role: "developer" };
const { id: employeeId, role: jobTitle } = employee;
console.log(employeeId); // 101
console.log(jobTitle);   // "developer"

// Rest Operator with Destructuring......
// You can use the rest operator (...) to collect the remaining proerpties of an object
const person2 = { name: "Alice", age: 25, city: "New York" };
const { name2, ...rest } = person;
console.log(name); // "Alice"
console.log(rest); // { age: 25, city: "New York" }


//___________________________________________________________________________________________________________________________

///Q. What are the different types of Loops in Jscript ? -----------------------------------------------

//-> In JavaScript, loops are used to repeatedly execute a block of code as long as a condition is true.

//1. For loop: ----------------
// Used when you know in advance how many times you need to iterate.
for (initialization; condition; update) {
 // Code to execute
  }
//Eg: 
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
  }
  
//2. While loop: --------------
// Executes a block of code as long as the condition is true.
while (condition) { // Code to execute
  }
//Eg:
    let i = 0;
    while (i < 5) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
     i++;
      }

//3. Do...While Loop: --------------
// Similar to the while loop, but it executes the code at least once before checking the condition.
do { // Code to execute
  } while (condition);
//Eg:  
    let j = 0;
     do {
     console.log(j); // Outputs: 0, 1, 2, 3, 4
       j++;
    } while (i < 5);

//4. For..In Loop: -----------------
// Iterates over the keys (properties) of an object.
const person = { name: "John", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Outputs: name: John, age: 25
}

//5. For...Of Loop: ---------------
// Iterates over the values of iterable objects like arrays, strings, or maps.
const numbers = [10, 20, 30];
for (let num of numbers) {
  console.log(num); // Outputs: 10, 20, 30
}

//6. Break and Continue keywords: -----------
// These are not loops but can control loop behavior:

//break: Stops the loop entirely.
//continue: Skips the current iteration and moves to the next one.

for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i); // Outputs: 0, 1, 2
  }
  
  for (let i = 0; i < 5; i++) {
    if (i === 3) continue; // Skips loop for when i is 3. 
    console.log(i); // Outputs: 0, 1, 2, 4
  }
  
//7. forEach (Array Method): -------------------- 
// Used specifically for arrays to iterate over each element.

// const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
    console.log(fruit); // Outputs: apple, banana, cherry
  });

//___________________________________________________________________________________________________________________________

////Q. What is the difference between map(), filter() and reduce() ? ------------------------------------------------

//-> All are array methods used for processing arrays.

// Map(): Used to apply a function to every element in the array & create a new array with the transformed elements. 
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(num => num * 2); 
console.log(doubled); // Output: [2, 4, 6, 8]

// Filter(): Returns a new array with only the elements that satisfy the condition.

const numbers2 = [1, 2, 3, 4];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Reduce(): Reduce the array to a single value, array or object. Has accumulator to store the value.

const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10


//_______________________________________________________________________________________________________

///Q. Difference between slice and splice.

//-> Slice() is used to extract a portion of an array without modifying the original array. 
//Syntax: array.slice(start,end)

let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);

console.log(slicedArr); // [2, 3, 4]
console.log(arr);       // [1, 2, 3, 4, 5] (original array is unchanged)


// Splice() is used to add or remove elements from an array and it modifies the original array.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)

// item1, item2 are items to be added to the array from the start position. there is no end position.

let arr1 = [1, 2, 3, 4, 5];
let removedElements = arr1.splice(1, 2); // removes 2 elements from index 1

console.log(removedElements); // [2, 3] (removed elements)
console.log(arr1);             // [1, 4, 5] (modified array)


//Q. Which method is used to retrieve a character from a certain index? ----------------------

//-> We can retrieve a character from a certain index with the help of charAt() function method. 





// --------------------------------------------------------------------------------- // 

// // Use while loop and print following pattern:
//n = 19
//1 2 3 4 5 * * * * * 11 12 13 14 15 * * * *
 function abc(){
let i=0;
let output=""
while (i <= 19) {
  if ((i >= 6 && i <= 10) || (i >= 16 && i <= 19)) {
    output += "*";
  } else {
    output += i + " ";
  }
  i++;
}
console.log(output);
 }

// 1. Reverse a string
//-> Push elements in array in reverse order

function Reverse(str){
    result = [];
    for ( let i = str.length - 1; i >= 0 ; i-- ){
      result.push(str[i]);

    }
 return result;
}

console.log(Reverse("abcdfrg"));

//1a. Reverse string using Recursion  

function reverse(str) {
    if (str.length<=1){
        return str;
}
return str[str.length -1] + reverse(str.slice(0,-1));
// -1 means we set the range from right side. -1 is one position from right excluding it.
// In every recursion we return last element and pop off last element from the str.
// So reverse(str.slice(0,-1)) returns 2nd last, then 3rd last, then 4th last till it reach 1st.
}

//1b. Check if string is reverse of another

function isReverse(str1,str2){
    str2 = str2.split('').reverse().join('');
    // split converts string to arr. reverse() works on arr only. and then
    // join() converts the arr back to string
    return str1 === str2;
}


// 2. Check Palindrome 
//-> check first and last elements, then 2nd and 2nd last. If not same then not
// palindrome

function Palindrome(str){
    str= str.toString();
    for (let i=0; i< Math.floor(str.length/2) ; i++ ){
            if (str[i] !== str[str.length -1 -i]){
                 return ("Not palindrome");
            }
        }
            return ("Paindrome");
    
}

console.log(Palindrome(123456));
console.log(Palindrome(12321));

//3. Find maximum in an array

function maximum(arr){
    let max=0;
    for(let i of arr){
        if ( i > max){
         max = i ;
        }
}
return(`Maximum element is ${max}`);
}
console.log(maximum([1,2,3,4,5,6,9]));

//3a. Find the second largest element in an Array 
// -> Sort the array in decending and return 2nd element

function second(str){
    let g= str.sort((a,b)=> b-a);
    return (`Second largest element is ${g[1]}`);
}

console.log(second([1,2,3,4,5,6]));


//Find all pairs with a given sum in an array. 

function Pairswithsum(arr, targetsum){
    let seenNumbers= new Set();
    let pairs= [];

    for (let num of arr) {
        let target= targetsum- num;
        if (seenNumbers.has(target)){
            pairs.push([target, num]);
        }
        seenNumbers.add(num);
    }
    return pairs;
}

//4. Sum of Array Elements 

function Sum(arr){
    return arr.reduce(((total,acc)=> total+ acc), 0 );
}
console.log(Sum([1,4,5,6,7,8,8]));

//5. Check if Prime
//-> Check if remainder is 0 after divinding by numbers upto root n. If true then not prime. 
//-> To type i < root(n) you have to write it this way i*i < num. Same condition. 

function prime(num){
    if (num <=1 ){
       return "not prime";
    }
    for( let i=2; i*i< num; i++){
       if( num % i ===0){
           return ("not prime");
       }
    }
    return ("is prime");
}
console.log(prime(22));



// 6. Given an array having random numbers and zeros, move all zeros to the right.
//-> If number isn't zero then push in result, else increment count of zeros.
// Then add all the zeros in a second for loop.
function movezeros(arr){
    var index = 0; // 3
    result = [];
    for (let i of arr){
        if (arr[i] !== 0){
            result.push(arr[i]);
        }
        else{
            index++;
        }    
    }
    for (let i = 0; i <= index; i++) {
        result.push(0);
      }
    return result;   
}
// console.log(movezeros([2,0,6,0,7,0,0,4,5]));
// console.log(movezeros([2,0,6,0,7,0,0,7,8,9]));


// 7. Check array is sorted or not. 

function checksort(str){
    for ( let i=0; i<str.length -1; i++){
        if ( str[i]> str[i+1]){
            // if the next element is smaller than previous then false
            return false;
        }
    }
    return true; 
}

console.log(checksort([1,2,3,4,5,6,7]));

// 7b. Sort in ascending order

function ascend(arr){
    return arr.sort((a,b)=> a-b);

}
console.log(ascend([5,2,8,1,3]));

//7c. Sorting without using sort(). Bubble Sort

// We push largest number to the end, then exclude that element in next loop.
// i loop contains mutiple j loops which keep pushing largest to the end by swapping.

function bubbleSort(arr){
    const n= arr.length;
    for (let i=0; i<n ; i++){
        for (let j=0; j<n-i-1; j++){

            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                // swapping without temp
            }
        }
    }

return arr;
}


//8. Count vowels in a string 
//-> For loop in string. If vowels are found increase count 

function vowels(str){
    count = 0;
    for (let ele of str.toLowerCase()){
        if (ele== 'a' || ele== 'e' || ele=='i' || ele=='o' || ele== 'u'){
            count ++;
        }
    }
    return (`Vowel count ${count}`);
}
console.log(vowels("agbrbtynytneeeeioioioiouu"));

//9. Find the index of a Target in an array. 

function target(arr, targ){
       for ( let i=0; i < arr.length -1; i++ ){
        if (arr[i] == targ){
            return (`index of ${targ} is ${i}`);
        }
       }
       return -1; 
}
console.log(target([1,2,3,4,5,65,6], 65));

//10. Remove duplicates in an array
//-> Without using Set method. Use includes(). If empty array doesn't include the element 
// then push it. 

function duplicates(arr){
    let uniqueArr= [];
      for ( let i of arr){
       if (!uniqueArr.includes(i)){
        uniqueArr.push(i);
       }
      }
      return uniqueArr;
}

console.log(duplicates([1,2,2,3,4,4,5,65,6,6,6,]));

//10b. Check if two strings are annagrams 
//-> Again use includes. If a single elements is not includes then not annagram.

function areAnnagrams(str1, str2){
    const counter= {};
    for (let char of str1) {
      if (!str2.includes(char)){
         return ("strings are not annagrams");
      }
    }
    return ("strings are annagram")
}
console.log(areAnnagrams("silent", "listen"));


// 11. Find Missing number in array (1 to n)
//-> Calculate sum upto n and then subtract from the sum of the given input.
// n will be array length +1 as there is one missing number.

function missing(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; // Normal sum of n formula
    const arrSum = arr.reduce((a, b) => a + b, 0);
    return (`Missing number is ${expectedSum - arrSum}`);
  }
  
  console.log(missing([1, 2, 3, 4, 5, 7, 8]));

  // When you give the n as input directly 

  function missing(arr, n){

    var result= (n*(n+1))/2; // 
    var res = arr.reduce((total, num)=> total + num, 0);   
    return result - res ;   
}

//12. Find intersection of two arrays
//-> Again use includes. If element of arr1 is in arr2 then return. Use filter
// for more simplified code. Filter helps to loop and perform action
// of the elements at the same time

function Intersect(arr1, arr2){
    return arr1.filter(val => arr2.includes(val));
}

console.log(Intersect([1,2,3],[3,4,5]));

// 13. Find the Longest Substring without repeating chars and it's length.
//-> Push every char one by one into empty substring array. Then put if() condition to check whether the value 
// already exists. If it exists slice off everything from left till the index of repeated element,

function lengthOfLongestSubstring(s) {
    let maxLength = 0;          // To keep track of the longest substring length
    let longestSubstring = "";  // To keep track of the longest substring itself
    let currentSubstring = '';  // To store the current substring without repeats

    // Loop through each character in the string
    for (let char of s) {
        // If the character is already in the current substring, remove everthing before it. 
        // We are removing the char itself and everything before it because we want a continuous substring. Not simply
        // any string not having repeating characters. 
        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
            // If say currentsubstring is bcda and next char is d then all elements upto "d" are sliced
            // leaving "a" in currentsubstring. And after the if() condition completes "d" is added to substring.
        }
        // Add every character to the substring. Doesn't matter if it's repeating or not
        currentSubstring += char;

        // Usual Max length and max string code
        if (currentSubstring.length > maxLength) {
            maxLength = currentSubstring.length;
            longestSubstring = currentSubstring;  // Update the longest substring
        }
    }

    console.log("Longest Substring:", longestSubstring);  // Print the longest substring
    return maxLength;  // Return the length of the longest substring
}


//14. Rotate an aray by k positions
//-> slice syntax (start, end). slice(k) - cuts the array at the k index, returns all elements after k. 
//-> slice (0,k) - cuts from 0 to k index. Then you join the slice(k) and then slice (0,k) with spread op

function Rotate(arr, k){
    return [...arr.slice(k), ...arr.slice(0,k)];
}
console.log(Rotate([12,3,3,4,634,643,2], 3));



// 15. First Non-Repeating Character
//-> Use object key and values to map frequency.

function Character(str){
    result = {};
    for ( i of str){
       if (result[i] == undefined ){
             result[i]= 1;
       }
       else(result[i]++)
    }
    for (let i of str){
    if ( result[i] == 1 ){
       return (`First Non Repeating Character is ${i}`); 
    }
   }
}
console.log(Character([1,2,3,1,2,1,2,1]));

// 15a. Find the freq of element in array.
//-> Use object for mapping

function Freq(arr){
    result={};  
    for ( let i of arr){
        if (result[i] == undefined){
            result[i]= 1;
        }
        else {
            result[i]++;
        }
    }
    return result;
}
console.log(Freq([1,1,3,52,3,324,234,4,3]));

// 15b. Find the first repeat element in an array 
// Can be done with object mapping also but no need when you have includes()
function findFirstRepeatedElement(arr) {
    const seen = []; 

    for (let i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) {
            return arr[i]; 
        }
        seen.push(arr[i]); 
    }

    return null;
}

//15c. Find the Majority Element:
// Question: Write a JavaScript function to find the majority element in
// an array.
// ● Input: [5, 5, 5, 5, 1, 2, 3]
// ○ Output: 5
//-> Same object mapping code. Then write maximum value code.

function Majority(str) {
    result = {};
    for (let i of str) {
        if (result[i]) {
            result[i]++;
        }
        else {
            result[i] = 1;  // 3 = 1
        };
    }
    let maxCount = 0;
    let majorityElement;
    for (let char in result) {
      if (result[char] > maxCount) {
        maxCount= result[char];
      majorityElement=char;
    }
    }
    return majorityElement;} // 


//16. Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(nums1, nums2) {
    // Merge the two sorted arrays
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    
    const length = merged.length;
    
    // As merged[] is already sorted, if it has an odd length, the middle element is automatically the median
    if (length % 2 !== 0) {
        return merged[Math.floor(length / 2)]; // 5/2 = 2.5, 3 
    } else {
        // If the merged array has an even length, return the average of the two middle elements
        const mid1 = merged[length / 2 - 1];  // 6 /2 -1 = 2
        const mid2 = merged[length / 2];    //6/2 = 3
        return (mid1 + mid2) / 2;  
    }
}


//17. Find the factorial of a number

function Fact(num){
    if (num===0 || num === 1){
        return 1;
    }
    else {
        return num* Fact(num-1);
        // Recursion used.
    }
    
}
console.log(Fact(5));

//18. Find Fibonacci number at postion n
//-> First 2 numbers must be pushed directly. From 3rd element push sum of previous 2 elements.
// This solution is without recursion 
function Fibonacci(n){
    result = [];
    result.push(0);
    result.push(1);
    for( let i=2; i<n; i++){
        result.push(result[i-1]+ result[i-2]);
    }
    return result;
}
console.log(Fibonacci(10));

//19. Find the longest common prefix in an array of Strings.

function longestCommonPrefix(strs){
    if (strs.length === 0) return ""; 

    let prefix = strs[0]; 
  // We first take the whole first word as prefix, then if next word doesnt includes prefix then 
  // remove last letter from prefix using slice. We have to check whether the prefix exist at the beginning
  // of the next work. For this use indexOf()==0, if true then no slicing needed, if false then repetedly slice
  // till you get indexOf() as true. For this use while() loop. 
  // If there's a single word not having prefix then while loop cuts the prefix to empty.

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { 
            prefix = prefix.slice(0, prefix.length - 1); 
            if (prefix === "") return ""; 
        }
    }
    return prefix; 
}

//20. Find the GCD of two number
//-> 

//21. Implement a Function to Flatten a Nested Array:
// Question: Write a JavaScript function to flatten a deeply nested array.
// Examples:
// ● Input: [1, [2, [3, [4]], 5]]
// ○ Output: [1, 2, 3, 4, 5]
// -> Here recursion is used. If inside the array another array (more than 2 elements) are found. Then
// send the main function again inside till no arrays are found and the loose elements are pushed directly in result

function flattenArray(nestedArray) {
    return nestedArray.reduce((flatArray, currentElement) => {
        if (Array.isArray(currentElement)) {
            return flatArray.concat(flattenArray(currentElement));// [1, [2,3]]
        } else {
            return flatArray.concat([currentElement]);
        }
    }, []);
}

//22. Valid Parentheses
// ● Problem: Given a string containing just the characters (, ), {, }, [ and ], determine if
// the input string is valid. The input string is valid if:
//  Open brackets must be closed by the same type of brackets.
//  Open brackets must be closed in the correct order.

// -> Opening brackets must be pushed in a result array. If closing brackets are found the result array must have
// opening brackets for that closing brackets. We do this by using pop(). Matching opening bracket for a closing bracket is 
// found then directly remove that opening bracket from the result array. Also we need to add the case where we get a closing
// bracket and result has no elements. return false. After the else if cases for all three brackets the result must be empty
// as all closing brackets match with all opening brackets and pop them from result, leaving a clean empty array which is
// needed for validparenthesis to be true. 

function validParenthesis(input) {
    let result = [];
    for (let i of input) {
    if (i === "(" || i === "[" || i === "{") {
        result.push(i);  
        // result=[]

    } else if (i === ")" && ((result.pop() !== "(") || (result.length===0))) {
        return false;
    } else if (i === "]" && ((result.pop() !== "[") || (result.length===0))) {
        return false;
    } else if (i === "}" && ((result.pop() !== "{") || (result.length===0))) {
        return false;
    }
}
return result.length === 0
}


//23. Filtering & Transforming Objects
// You are given an array of objects representing products in a store. Each object has three
// properties: name, category, and price. Write a function called filterAndTransformProducts that
// filters the products by a given category and then returns an array of strings where each string is
// the product's name and price concatenated.

//-> Filter() use to loop and do actions on elements at same time. Filter returns array where the 
// product.category value is same as the value we pass as category in functions. If say we pass Electronics
// then filter() will return an array with all the objects having electronics as their category. Note this is
// a array made of objects. Then after filter() use map() to print product.name & product.price. 
// Return products.filter.map is used to skip all additional steps.

const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Phone", category: "Electronics", price: 500 },
    { name: "Shoes", category: "Clothing", price: 80 }
  ];
  
  function filterAndTransformProducts(products, category) {
    return products
      .filter(product => product.category === category)
      .map(product => `${product.name}: $${product.price}`);
  }
  
  console.log(filterAndTransformProducts(products, "Electronics"));


//24. Grouping & Summing Properties
// You are given an array of objects representing orders in a restaurant. Each object has three
// properties: orderId, tableNumber, and amount. Write a function called sumByTable that returns
// an object where each key is a tableNumber and the value is the total amount for that table.

//-> Reduce method is just filter() with a additional result array or object or whatever type we set the
//accumulator as.  
const orders = [
    { orderId: 1, tableNumber: 2, amount: 30 },
    { orderId: 2, tableNumber: 1, amount: 20 },
    { orderId: 3, tableNumber: 2, amount: 50 },
    { orderId: 4, tableNumber: 3, amount: 40 },
    { orderId: 5, tableNumber: 1, amount: 10 }
  ];
  
  function sumByTable(orders) {
    return orders.reduce((acc, order) => {
      acc[order.tableNumber] = (acc[order.tableNumber] || 0) + order.amount;
      // This is a shorter way of object mapping we have done before.
      // Here left side is key & right side is value. On first loop order.tableNumber value is none 
      // so the or condition (||) sets the value as 0. Then order.amount is added. So final left side is
      // set to (0 + object.value) .Then if the same tableNumber is found the previous saved order amount is 
      // added to new one. 
      return acc;
    }, {});
  }
  
  console.log(sumByTable(orders));
  // Output: { 1: 30, 2: 80, 3: 40 }


//25. Nested Objects & Property Counting
// You are given an array of objects representing students. Each object has a name property and a
// subjects property, which is an array of strings representing the subjects the student is enrolled
// in. Write a function called countSubjects that returns an object where each key is a subject and
// the value is the number of students enrolled in that subject.
const students = [
    { name: "Alice", subjects: ["Math", "Science"] },
    { name: "Bob", subjects: ["English", "Math"] },
    { name: "Charlie", subjects: ["Math", "History"] },
    { name: "David", subjects: ["Science", "History"] }
  ];
  
  function countSubjects(students) {
    return students.reduce((acc, student) => {
        // student is the objects inside main array. we use reduce to loop and perform action on elements.
        // plus accumulator. 
      student.subjects.forEach(subject => {
        // We need to perform actions on the subjects which are inside the objects inside the subjects array. 
        // so here we do student.subjects.forEach and give "subject" in parameter to access the subjects inside.
        acc[subject] = (acc[subject] || 0) + 1;
        // Same short method of object mapping. Just byheart it at this point.
      });
      return acc;
    }, {});
  }
  
  console.log(countSubjects(students));
  
// Output should be { Math: 3, Science: 2, English: 1, History: 2 }

//26. Object Transformation and Filtering
// You are given an array of objects representing inventory items. Each object has a name,
// quantity, and price. Write a function called inventoryValue that returns the total value of the
// inventory, but only includes items where the quantity is greater than zero.

const inventory = [
    { name: "Laptop", quantity: 5, price: 1000 },
    { name: "Shirt", quantity: 0, price: 50 },
    { name: "Phone", quantity: 10, price: 500 },
    { name: "Shoes", quantity: 3, price: 80 }
  ];
  
  function inventoryValue(inventory) {
    return inventory
      .filter(item => item.quantity > 0)
      // This returns array where quantity is > 0
      .reduce((total, item) => total + (item.quantity * item.price), 0);
      // To calculate total we use the accumulator of reduce(). Total is first set to zero
      // and is added to item.quantity* item.price to calculate total price for each item. Then 
      // with each loop it gets added to the total.
  }
  
  console.log(inventoryValue(inventory));
  // Output: 12600
  
  //27. 



