
-- CRUD Operations in SQL 

--1. CREATE -------
-- Creating a users table

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT, -- Auto generates an ID for each row
    name VARCHAR(50), 
    age INT,
    city VARCHAR(50)
);
-- Varchar(50) - Text field that can store upto 50 characters.

-- Inserting Data into users Table with INSERT INTO table.
INSERT INTO users (name, age, city) 
VALUES ('Alice', 30, 'New York');

-- Inserting Multiple Rows 
INSERT INTO users (name, age, city) 
VALUES 
    ('Bob', 22, 'Chicago'),
    ('Carol', 27, 'Boston'),
    ('David', 24, 'Houston');

---Result---
id	name	age	city
1	Alice	30	New York
2	Bob	    22	Chicago
3	Carol	27	Boston
4	David	24	Houston

----2. READ (Retrive Data) _______________________________
-- We use SELECT keyword to read data from a table.
SELECT * FROM users;

-- Read specific columns
SELECT name, age FROM users;

-- Read with Filtering
SELECT * FROM users WHERE age > 25;

-- Read Sorted Data
SELECT * FROM users ORDER BY age DESC;


---3. UPDATE (Modify existing data) ______________________________
-- Update Age for Bob 
UPDATE users   -- What table to update
SET age = 25   -- What value to change
WHERE name = 'Bob'; -- And in what row to change the value

--Output--
id	name	age	city
1	Alice	30	New York
2	Bob	    23	Chicago
3	Carol	27	Boston
4	David	24	Houston

-- Always use WHERE while updating otherwise all records will be updated
-- Example with multiple columns 

UPDATE users 
SET age = 35, city = 'Los Angeles' 
WHERE name = 'Alice';

---4. DELETE (Remove Data)-------

DELETE FROM users 
WHERE name = 'Bob';
--Deletes whole row, that is only Bob's record







--______________________________________________________________________________________________

-- Filtering & Sorting ----------
-- Filtering is done using WHERE and sorting is done using ORDER BY.

--Sample Table (users)
id	name	age	city
1	Alice	30	New York
2	Bob	    22	Chicago
3	Carol	27	Boston
4	David	24	Houston

-- WHERE is used for filtering data based on a condition
SELECT * FROM users
WHERE age > 25;

--Output----
id	name	age	city
1	Alice	30	New York
3	Carol	27	Boston

-- Filtering with Multiple Conditions (AND, OR, IN, LIKE)

-- 1. AND - All conditions must be true _____________________
-- Example get users above 25 years old AND from New York

SELECT * FROM users
WHERE age > 25 AND city = 'New York';
--Output----
id	name	age	city
1	Alice	30	New York

-- 2. OR - At least one condition must be true________________
-- Get users who are below 25 OR from Boston

SELECT * FROM users
WHERE age < 25 OR city = 'Boston';

--Q. Combining AND & OR together_________________________
-- Use parentheses () to contrl the order of operations.
SELECT * FROM users
WHERE age < 25 OR (city = 'New York' AND age > 28);


-- 3. IN - Match multiple values___________________________
-- Instead of using multiple OR conditions use IN
 SELECT * FROM users
WHERE city IN ('New York', 'Boston');
--Output--
id	name	age	city
1	Alice	30	New York
3	Carol	27	Boston

-- 4. LIKE - Used to search for a pattern in text values________________
-- Used with either % or _ symbol. 
Symbol	Meaning
%	    Any number of characters
_	    Exactly one character

-- Get users whose name starts with 'A'
SELECT * FROM users
WHERE name LIKE 'A%';
--Output--
id	name	age	city
1	Alice	30	New York

-- Get users whose name ends with 'd'
SELECT * FROM users
WHERE name LIKE '%d';
--Output--
id	name	age	city
4	David	24	Houston 


--____________________________________________________________________________________________

--2. ORDER BY is used for sorting results in ascending or descending using ASC or DESC keywords.

SELECT * FROM users
ORDER BY age;

-- By default if ASC or DESC isn't mentioned then sorting is done in ascending order.
id	name	age	city
2	Bob	    22	Chicago
4	David	24	Houston
3	Carol	27	Boston
1	Alice	30	New York

--To sort in descending use DESC________________
SELECT * FROM users
ORDER BY age DESC;

id	name	age	city
1	Alice	30	New York
3	Carol	27	Boston
4	David	24	Houston
2	Bob	    22	Chicago

--Q. Sorting with Multiple Columns_______________
SELECT * FROM users
ORDER BY age ASC, name DESC;
--sort by age first, if age is same then sort by name

id	name	age	city
2	Bob 	22	Chicago
4	David	24	Houston
5   Dwayne  24  Ohio
3	Carol	27	Boston
1	Alice	30	New York

--Q. Filtering & Sorting Together_________________
SELECT * FROM users
WHERE age > 24
ORDER BY age DESC;

--Q. Limiting results with the LIMIT keyword to return only specific number of rows.

SELECT * FROM users
ORDER BY age DESC
LIMIT 2;
--Example get the oldest 2 users
--Output--
id	name	age	city
1	Alice	30	New York
3	Carol	27	Boston

--Q. Skipping rows with OFFSET keyword before returning results.

SELECT * FROM users
ORDER BY age DESC
LIMIT 2 OFFSET 1;
-- Get the 2nd and 3rd oldest users
--Output--
id	name	age	city
3	Carol	27	Boston  --Alice 30 skipped
4	David	24	Houston 










