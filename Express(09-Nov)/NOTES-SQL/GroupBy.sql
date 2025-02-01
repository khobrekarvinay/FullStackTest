
--The GROUP BY statement is used to group rows with the same values in a column &
--  perform aggregate functions like COUNT(), SUM(), AVG(), MIN(), and MAX().

Table: sales
id	customer	product	amount
1	Alice	    Laptop	 1000
2	Bob	        Phone    600
3	Alice	    Mouse	 50
4	Carol	    Laptop	 1200
5	Bob	        Tablet   400

--Q. Find total sales amount per customer
SELECT customer, SUM(amount) AS total_spent 
FROM sales 
GROUP BY customer;
--groups rows based on the customer column.
--SUM(amount) to calculate total_spent for each customer.
--Output--
customer	total_spent
Alice	     1050
Bob	         1000
Carol	     1200

--Q. Count how many purchases each customer made
SELECT customer, COUNT(*) AS purchase_count
FROM sales
GROUP BY customer;
--Output--
customer	purchase_count
Alice	     2
Bob	         2
Carol	     1


--Q. Filtering Grouped Data with HAVING keyword
-- Since WHERE cannot be used with aggregrate functions

--Q. Find customers who spent more than $1000
SELECT customer, SUM(amount) AS total_spent
FROM sales
GROUP BY customer
HAVING total_spent > 1000;
--Output--
customer	total_spent
Alice	    1050
Carol	    1200




-- Indexing in SQL
-- Indexes improve query performance by making searches faster.

-- Indexes are used on columns that are frequently searched
CREATE INDEX idx_customer ON sales(customer);




