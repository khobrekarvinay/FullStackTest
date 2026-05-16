# Python Basics

### 1: How Python handle code blocks & what is role of indentation?

Python does not use braces (`{}`) to indicate blocks of code for class and function definitions or flow control. Instead, blocks of code are denoted by line indentation, which is strictly enforced.

The number of spaces for indentation can vary, but all statements within the same block must have the same indentation.

For example, this is a valid block:
```python
if True:
    print("True")
else:
    print("False")
```

In Python, all continuous lines indented with the same number of spaces form a block. The following is also a valid block with multiple statements:
```python
if True:
    print("Answer")
    print("True")
else:
    print("Answer")
    print("False")
```

However, inconsistent indentation within a block will cause an `IndentationError`. For example, the following code is invalid and will raise an error:
```python
# if True:
#    print("Answer")
#  print("True")  # This line has different indentation
```


### 2: Python Multi-Line Statements

Statements in Python typically end with a new line. Python does, however, allow the use of the line continuation character (`\`) to denote that the line should continue. For example:

```python
total = item_one + \
        item_two + \
        item_three
```

Statements contained within the `[]`, `{}`, or `()` brackets do not need to use the line continuation character. For example, the following statement works well in Python:

```python
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

### 3: Quotations in Python

Python accepts single (`'`), double (`"`), and triple ('''` or `"""`) quotes to denote string literals, as long as the same type of quote starts and ends the string.

The triple quotes are used to span the string across multiple lines. For example, all the following are legal:

```python
word = 'word'
print(word)

sentence = "This is a sentence."
print(sentence)

paragraph = """This is a paragraph. It is
made up of multiple lines and sentences."""
print(paragraph)
```

### 4: Comments in Python

Comments are used to explain code and are ignored by the Python interpreter.

A hash symbol (`#`) that is not inside a string literal begins a single-line comment. All characters after the `#` and up to the end of the physical line are part of the comment.

```python
# This is a single-line comment in Python
print("Hello, World!")
```

Python does not have a specific syntax for multi-line comments. However, you can use triple quotes (`'''` or `"""`) for this purpose. Since these create multi-line strings that are not assigned to a variable, they are ignored by the interpreter and can serve as comments.

```python
"""
This is a multi-line comment.
It can span across multiple lines.
Useful for longer explanations.
"""
print("Hello again!")
```

### 5: Data Types in Python

In Python, variables can store data of different types, and different types can do different things. Python has the following data types built-in by default, in these categories:

*   **Text Type:** `str`
*   **Numeric Types:** `int`, `float`, `complex`
*   **Sequence Types:** `list`, `tuple`, `range`
*   **Mapping Type:** `dict`
*   **Set Types:** `set`, `frozenset`
*   **Boolean Type:** `bool`
*   **Binary Types:** `bytes`, `bytearray`, `memoryview`
*   **None Type:** `NoneType`

You can get the data type of any object by using the `type()` function.

**Example:**
```python
x = 5
print(type(x)) # <class 'int'>

y = "Hello"
print(type(y)) # <class 'str'>
```

### 6: Variables in Python

A variable is a reserved memory location to store values. In Python, you don't need to declare a variable with a specific type; the declaration happens automatically when you assign a value to it.

Here are the rules for creating variables in Python:

*   A variable name must start with a letter or the underscore character (`_`).
*   A variable name cannot start with a number.
*   A variable name can only contain alpha-numeric characters (A-z, 0-9) and underscores.
*   Variable names are case-sensitive (`age`, `Age`, and `AGE` are three different variables).

### 7: Getting the Type of a Variable

You can get the data type of a Python variable using the built-in `type()` function.

**Example: Printing Variable Types**

```python
x = "Zara"
y = 10
z = 10.10

print(type(x))
print(type(y))
print(type(z))
```

This will produce the following result:

```
<class 'str'>
<class 'int'>
<class 'float'>
```

### 8: Variable Scope in Python

The scope of a variable is the region of the program where it can be accessed. Python has the following types of variable scopes:

*   **Local Scope:** A variable declared inside a function is a local variable. It can only be accessed within that function.
*   **Global Scope:** A variable declared outside of any function is a global variable. It can be accessed from any part of the program, both inside and outside of functions.
*   **Nonlocal Scope:** This scope is used in nested functions. The `nonlocal` keyword allows you to modify a variable from an outer (enclosing) function within an inner function.
*   **Built-in Scope:** This refers to Python's built-in functions and modules that are always accessible.

Python searches for variables in this order: Local, Enclosing (Nonlocal), Global, and then Built-in (LEGB rule).

To modify a global variable from within a function, you must use the `global` keyword.

```python
x = "global"

def my_function():
  global x
  x = "modified global"

my_function()
print(x) # Output: modified global
```


### 12: Defining Private Variables in Python

In Python, there is no strict concept of "private" variables like in some other languages (e.g., Java, C++). However, there is a convention to indicate that a variable is intended for internal use.

This is done by prefixing the variable name with a double underscore (`__`). This triggers a mechanism called "name mangling," which makes it harder to access the variable from outside the class.

**Example**

```python
class MyClass:
    def __init__(self):
        self.__private_var = "I am Private"

    def show_private(self):
        return self.__private_var

obj = MyClass()
# print(obj.__private_var)   # ✗ This will cause an AttributeError
print(obj.show_private())    # ✓ Access through a public method
```

A single underscore (`_`) prefix is a convention to indicate that a variable is "protected," meaning it's for internal use but can still be accessed.

#### Comparison with JavaScript

JavaScript, until recently, also didn't have native private variables. The common way to achieve privacy was through closures.

### 9: Undefined and Null Values in Python

Unlike JavaScript, Python does not have `undefined` and `null`. Instead, it has `None`.

*   **`None`**: This is a special constant in Python that represents the absence of a value or a null value. It is an object of its own data type, `NoneType`. You can assign `None` to any variable to signify that it is empty.
*   **Undefined Variables**: In Python, a variable is only created when a value is assigned to it. Trying to access a variable before it has been assigned a value will result in a `NameError`, as it is not "undefined" but simply does not exist yet.

In JavaScript, a variable that has been declared but not assigned a value has the value `undefined`. `null` is an assignment value that represents the intentional absence of any object value.
