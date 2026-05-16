Understood! Here's the revised explanation in Markdown format, with the initial explanation and list of types as-is, followed by separate descriptions for each function including an example query and its corresponding output.

---

## SQL Aggregate Functions

An aggregate function is a function that performs a calculation on a set of values, and returns a single value.

Aggregate functions are often used with the `GROUP BY` clause of the `SELECT` statement. The `GROUP BY` clause splits the result-set into groups of values and the aggregate function can be used to return a single value for each group.

The most commonly used SQL aggregate functions are:

*   `MIN()` - returns the smallest value within the selected column
*   `MAX()` - returns the largest value within the selected column
*   `COUNT()` - returns the number of rows in a set
*   `SUM()` - returns the total sum of a numerical column
*   `AVG()` - returns the average value of a numerical column

Aggregate functions ignore null values (except for COUNT(*)). Also count is the only agg function that acts on rows.

---

### `MIN()` - Returns the smallest value

The `MIN()` function returns the smallest value within the selected column.

**Example Table: `Products`**

| ProductID | ProductName | Price |
| :-------- | :---------- | :---- |
| 1         | Laptop      | 1200  |
| 2         | Mouse       | 25    |
| 3         | Keyboard    | 75    |
| 4         | Monitor     | 300   |

**SQL Query:**

```sql
SELECT MIN(Price) AS MinPrice
FROM Products;
```

**Output:**

| MinPrice |
| :------- |
| 25       |

---

### `MAX()` - Returns the largest value

The `MAX()` function returns the largest value within the selected column.

**Example Table: `Products`** (same as above)

| ProductID | ProductName | Price |
| :-------- | :---------- | :---- |
| 1         | Laptop      | 1200  |
| 2         | Mouse       | 25    |
| 3         | Keyboard    | 75    |
| 4         | Monitor     | 300   |

**SQL Query:**

```sql
SELECT MAX(Price) AS MaxPrice
FROM Products;
```

**Output:**

| MaxPrice |
| :------- |
| 1200     |

---

### `COUNT()` - Returns the number of rows

The `COUNT()` function returns the number of rows that match a specified criterion. `COUNT(*)` counts all rows, including duplicates and `NULL` values. `COUNT(column_name)` counts non-`NULL` values in the specified column.

**Example Table: `Products`** (same as above, imagine one product has a NULL price for `COUNT(Price)` example)

| ProductID | ProductName | Price |
| :-------- | :---------- | :---- |
| 1         | Laptop      | 1200  |
| 2         | Mouse       | 25    |
| 3         | Keyboard    | 75    |
| 4         | Monitor     | 300   |
| 5         | Speakers    | NULL  |

**SQL Query (counting all rows):**

```sql
SELECT COUNT(*) AS TotalProducts
FROM Products;
```

**Output:**

| TotalProducts |
| :------------ |
| 5             |

**SQL Query (counting non-NULL prices):**

```sql
SELECT COUNT(Price) AS ProductsWithPrice
FROM Products;
```

**Output:**

| ProductsWithPrice |
| :---------------- |
| 4                 |

---

### `SUM()` - Returns the total sum

The `SUM()` function returns the total sum of a numerical column.

**Example Table: `OrderDetails`**

| OrderDetailID | ProductID | Quantity | PricePerUnit |
| :------------ | :-------- | :------- | :----------- |
| 1             | 1         | 2        | 1200         |
| 2             | 2         | 5        | 25           |
| 3             | 3         | 1        | 75           |
| 4             | 4         | 2        | 300          |

**SQL Query:**

```sql
SELECT SUM(Quantity) AS TotalQuantityOrdered
FROM OrderDetails;
```

**Output:**

| TotalQuantityOrdered |
| :------------------- |
| 10                   |

---

### `AVG()` - Returns the average value

The `AVG()` function returns the average value of a numerical column.

**Example Table: `Products`** (same as before)

| ProductID | ProductName | Price |
| :-------- | :---------- | :---- |
| 1         | Laptop      | 1200  |
| 2         | Mouse       | 25    |
| 3         | Keyboard    | 75    |
| 4         | Monitor     | 300   |

**SQL Query:**

```sql
SELECT AVG(Price) AS AveragePrice
FROM Products;
```

**Output:**

| AveragePrice |
| :----------- |
| 400.00       |

---
