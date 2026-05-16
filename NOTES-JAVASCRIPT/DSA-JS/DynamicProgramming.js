  
  
  
  // DYNAMIC PROGRAMMING : 

  // -> Dynamic Programming (DP) is an optimization technique used to solve complex problems
  // by breaking them down into smaller, simpler subproblems. 
  // Eg:- For example, in the Fibonacci sequence, fib(5) requires solving fib(4) and fib(3), 
  // and these in turn require solving fib(3), fib(2), and so on. The same subproblems are solved multiple times.

// 1. Fibonacci Sequence
// Find the nth number in the Fibonacci sequence:
// Fib(0) = 0
// Fib(1) = 1
// Fib(n) = Fib(n-1) + Fib(n-2) for n >= 2

// First is the recursive approach, calling function again for n-1 and n-2 

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//The recursive Fibonacci function calls itself multiple times for the same inputs, resulting in an inefficient solution
// due to repeated calculations. 
// Here fibo(5) calls fibo(4) & fibo(3) then fibo (3) calls 2 & 1, fibo(2) calls 1 & 0. Then same separate recursion
// for the fibo(4). Here in fibo(4) instead of calculating fibos 3 & 2 again we could have used the value from calculations
// we did previously. Here's how to do that.....

function fibonacci(n, fibo = {}) {
    if (n <= 1) return n;
    if (fibo[n]) return fibo[n];

    fibo[n] = fibonacci(n - 1, fibo) + fibonacci(n - 2, fibo);
    return memo[n];
}

// We create fibo object to store values of lower fibo calculations so to not recalculate the fibo value if the value
// already exists inside the object. Same recursion happens here too. Fibonacci(5) calls Fibonacci(4) & Fibonacci(3).
// The second part is calculated later. Then Fibonacci(4) calls Fibonacci 3 & 2. And then Fibonacci(3) calls 2 and 1.
// Fibonacci(2) calls 1 & 0. After this fibo[2] will get value as 1. This will be used for rest of the calculations
// if fibo[2] is needed without needing any recalculations. The if statement handles that. If fibo[n] for that value of
// n aleady exists then return it, skip the recursive calculation and move on to the next calculation.

// This may seem like a small change, like here we only skipped around 4-5 additional calculations but take this for a 
// bigger n. Say the factorial of 10k. The difference is exponential. 

// Let's compare in Time complexities. In Normal recursion method we are using recursion twice & each recursion goes under 
// further recursion n times. Time complexity comes out to be 2^n which for n=10k becomes 2^10k which is a crazy number. 
// This will take the computer billions of years of calculate. It's no joke. 
// For Dynamic recursion one we are calculating the fibo for a specific n only once and storing it in object to be used 
// again in further calculations. So for a n we only calculate fibo[n] once. Time complexity here is n which is 10,000.
// Computer will be done calculating this one within one second. 
