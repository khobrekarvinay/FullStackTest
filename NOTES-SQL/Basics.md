Okay, here is the "basics.md" content converted into proper Markdown format, making it easy to read and structured.

---

## SQL Basics

The SQL syntax differs in MySQL (vs. SQL Server, PostgreSQL, etc.) mainly because:

*   SQL is a standard, but not fully enforced.
*   The SQL standard (ANSI SQL) defines core features.
*   But each database (MySQL, SQL Server, Oracle, PostgreSQL) adds its own features, syntax, and procedures beyond the standard.

---

### CRUD Operations in SQL

CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that can be performed on data in a database.

#### 1. CREATE

This operation is used to create new database objects (like tables) or to add new data rows into existing tables.

**Creating a `users` table:**

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT, -- Auto generates an ID for each row (MySQL specific)
    name VARCHAR(50),                  -- Text field that can store up to 50 characters
    age INT,
    city VARCHAR(50)
);
```

**Inserting Data into the `users` Table:**

```sql
INSERT INTO users (name, age, city)
VALUES ('Alice', 30, 'New York');
```

**Inserting Multiple Rows:**

```sql
INSERT INTO users (name, age, city)
VALUES
    ('Bob', 22, 'Chicago'),
    ('Carol', 27, 'Boston'),
    ('David', 24, 'Houston');
```

**Resulting `users` table:**

| id  | name  | age | city      |
| :-- | :---- | :-- | :-------- |
| 1   | Alice | 30  | New York  |
| 2   | Bob   | 22  | Chicago   |
| 3   | Carol | 27  | Boston    |
| 4   | David | 24  | Houston   |

#### 2. READ (Retrieve Data)

We use the `SELECT` keyword to read data from a table.

**Read all columns:**

```sql
SELECT * FROM users; -- * means ALL columns
```

**Read specific columns:**

```sql
SELECT name, age FROM users;
```

**Read with Filtering:**
(See "Filtering" section below for more details)

```sql
SELECT * FROM users WHERE age > 25;
```

**Read Sorted Data:**
(See "ORDER BY" section below for more details)

```sql
SELECT * FROM users ORDER BY age DESC;
```

#### 3. UPDATE (Modify existing data)

This operation is used to modify existing records in a table. The `SET` keyword is used to specify the new values, and `WHERE` is crucial to specify which rows to update.

**Update Age for 'Bob':**

```sql
UPDATE users          -- Specify the table to update
SET age = 25          -- Specify the new value for the 'age' column
WHERE name = 'Bob';   -- Specify the row(s) to update
```

**Output after update (assuming Bob's age was 22, now 25):**

| id  | name  | age | city      |
| :-- | :---- | :-- | :-------- |
| 1   | Alice | 30  | New York  |
| 2   | Bob   | 25  | Chicago   |
| 3   | Carol | 27  | Boston    |
| 4   | David | 24  | Houston   |

**Important:** Always use `WHERE` with `UPDATE`, otherwise, all records in the table will be updated.

**Example with multiple columns:**

```sql
UPDATE users
SET age = 35, city = 'Los Angeles'
WHERE name = 'Alice';
```

#### 4. DELETE (Remove Data)

This operation is used to remove existing rows from a table.

```sql
DELETE FROM users
WHERE name = 'Bob';
```
This query deletes the entire row where the `name` is 'Bob'.

---

### Filtering Data

Filtering is done using the `WHERE` keyword to select rows based on a specified condition.

**Sample Table: `users`** (after initial inserts)

| id  | name  | age | city      |
| :-- | :---- | :-- | :-------- |
| 1   | Alice | 30  | New York  |
| 2   | Bob   | 22  | Chicago   |
| 3   | Carol | 27  | Boston    |
| 4   | David | 24  | Houston   |

**Example `WHERE` clause:**

```sql
SELECT * FROM users
WHERE age > 25;
```

**Output:**

| id  | name  | age | city     |
| :-- | :---- | :-- | :------- |
| 1   | Alice | 30  | New York |
| 3   | Carol | 27  | Boston   |

**`DISTINCT` keyword:** Returns only unique values from a specified column, removing duplicates.

```sql
SELECT DISTINCT department FROM employees;
```

---

### Filtering with Multiple Conditions (`AND`, `OR`, `IN`, `LIKE`)

#### 1. `AND` - All conditions must be true

```sql
SELECT * FROM users
WHERE age > 25 AND city = 'New York';
```

**Output:**

| id  | name  | age | city     |
| :-- | :---- | :-- | :------- |
| 1   | Alice | 30  | New York |

#### 2. `OR` - At least one condition must be true

```sql
SELECT * FROM users
WHERE age < 25 OR city = 'Boston';
```

**Combining `AND` & `OR`:** Use parentheses `()` to control the order of operations.

```sql
SELECT * FROM users
WHERE age < 25 OR (city = 'New York' AND age > 28);
```

#### 3. `IN` - Match multiple values

Used as a shorthand for multiple `OR` conditions.

```sql
SELECT * FROM users
WHERE city IN ('New York', 'Boston');
```

**Output:**

| id  | name  | age | city     |
| :-- | :---- | :-- | :------- |
| 1   | Alice | 30  | New York |
| 3   | Carol | 27  | Boston   |

#### 4. `LIKE` - Search for a pattern in text values

| Symbol | Meaning              |
| :----- | :------------------- |
| `%`    | Any remaining letters |
| `_`    | Exactly one character |

**Get users whose name starts with 'A':**

```sql
SELECT * FROM users
WHERE name LIKE 'A%';
```

**Output:**

| id  | name  | age | city     |
| :-- | :---- | :-- | :------- |
| 1   | Alice | 30  | New York |

**Get users whose name ends with 'd':**

```sql
SELECT * FROM users
WHERE name LIKE '%d';
```

**Output:**

| id  | name  | age | city    |
| :-- | :---- | :-- | :------ |
| 4   | David | 24  | Houston |

**Names where the second letter is 'a':**

```sql
SELECT * FROM users
WHERE name LIKE '_a%';
```

*   **Explanation:** `_` (any first letter) + `a` (second letter) + `%` (any remaining letters).

**Names that are exactly 4 letters long:**

```sql
SELECT * FROM users
WHERE name LIKE '____';
```

*   **Explanation:** Four underscores mean exactly four characters.

**Name with exactly 5 letters, starting with 'A':**

```sql
SELECT * FROM users
WHERE name LIKE 'A____';
```

*   **Explanation:** `A` (first letter) + `____` (exactly four more characters).

#### 5. `BETWEEN` - Selecting a range
 
The `BETWEEN` operator is used to select values within a given range (inclusive). It can be used with numbers, text, or dates.
 
**Get users with age between 23 and 28:**
 
```sql
SELECT * FROM users
WHERE age BETWEEN 23 AND 28;
```
 
**Output:**
 
| id  | name  | age | city    |
| :-- | :---- | :-- | :------ |
| 3   | Carol | 27  | Boston  |
| 4   | David | 24  | Houston |

---

### `ORDER BY` - Sorting Results 

`ORDER BY` is used for sorting results in ascending (`ASC`) or descending (`DESC`) order. By default, if `ASC` or `DESC` isn't mentioned, sorting is done in ascending order.

```sql
SELECT * FROM users
ORDER BY age; -- Default is ASC (ascending)
```

**Output (Ascending by age):**

| id  | name  | age | city      |
| :-- | :---- | :-- | :-------- |
| 2   | Bob   | 22  | Chicago   |
| 4   | David | 24  | Houston   |
| 3   | Carol | 27  | Boston    |
| 1   | Alice | 30  | New York  |

**To sort in descending order:**

```sql
SELECT * FROM users
ORDER BY age DESC;
```

**Output (Descending by age):**

| id  | name  | age | city      |
| :-- | :---- | :-- | :-------- |
| 1   | Alice | 30  | New York  |
| 3   | Carol | 27  | Boston    |
| 4   | David | 24  | Houston   |
| 2   | Bob   | 22  | Chicago   |

**Sorting with Multiple Columns:**

```sql
SELECT * FROM users
ORDER BY age ASC, name DESC;
```

*   Sorts by `age` first (ascending). If ages are the same, it then sorts by `name` (descending).

**Example Output (assuming a 'Dwayne' entry with age 24):**

| id  | name   | age | city      |
| :-- | :----- | :-- | :-------- |
| 2   | Bob    | 22  | Chicago   |
| 5   | Dwayne | 24  | Ohio      |
| 4   | David  | 24  | Houston   |
| 3   | Carol  | 27  | Boston    |
| 1   | Alice  | 30  | New York  |

**Filtering & Sorting Together:**

```sql
SELECT * FROM users
WHERE age > 24
ORDER BY age DESC;
```

---

### `LIMIT` and `OFFSET` - Limiting Results

**`LIMIT` keyword:** Used to return only a specific number of rows.

```sql
SELECT * FROM users
ORDER BY age DESC
LIMIT 2;
```

*   **Example:** Get the oldest 2 users.

**Output:**

| id  | name  | age | city     |
| :-- | :---- | :-- | :------- |
| 1   | Alice | 30  | New York |
| 3   | Carol | 27  | Boston   |

**`OFFSET` keyword:** Used to skip a specified number of rows before returning results.

```sql
SELECT * FROM users
ORDER BY age DESC
LIMIT 2 OFFSET 1;
```

*   **Example:** Get the 2nd and 3rd oldest users (skips the first oldest).

**Output:**

| id  | name  | age | city    |
| :-- | :---- | :-- | :------ |
| 3   | Carol | 27  | Boston  |
| 4   | David | 24  | Houston |

---

