--________________________________________________________________________________________________--

 -- JOIN KEYWORD --------------

-- JOIN query has two main parts:
--1. SELECT section to define what colummns to show in output 

SELECT users.name, orders.product
-- name column from user table and product column from orders table

--2. FROM & JOIN section which tells which tables to join and how to join them

FROM users -- Start with users table 
INNER JOIN orders -- Combine with orders table
ON users.id = orders.user_id; -- On what keys to join the tables. 


-- Now on types of JOINS

--1. INNER JOIN -------------
-- It returns only matching rows nothing extra.
--Users Table
id	name	age
1	Alice	25
2	Bob	    30
3	Eve 	28
--Orders Table
id	user_id	product
1	1	    Laptop
2	1	    Mouse
3	2	    Keyboard
-- Result Table--
name	product
Alice	Laptop
Alice	Mouse
Bob  	Keyboard
--Eve wasn't included.

--2. LEFT JOIN ------------------
-- It returns all values from the left table. Left table is the one you write after FROM and before JOIN 
-- In this case let's take user table as the left and orders as the right.
SELECT users.name, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

--Output
name	product
Alice	Laptop
Alice	Mouse
Bob	    Keyboard
Eve  	NULL
--Eve included even when she has no orders.

--3. RIGHT JOIN ------------------
-- Same thing but this time all values from order table will be returned. And if the id isn't there in users returns NULL in the left row.

--4. FULL JOIN -------------------
-- Does both LEFT & RIGHT JOINS. So NULL values are created on both sides where the id didn't match

SELECT users.name, orders.product
FROM users
FULL JOIN orders ON users.id = orders.user_id;

--Q. Finding users with No Orders (Using LEFT JOIN)____________________________

SELECT users.name
FROM users
LEFT JOIN orders ON users.id = orders.user_id 
-- Returns the full table with Eve as NULL
WHERE orders.id IS NULL; -- Filtering with WHERE 

--Result - Eve
