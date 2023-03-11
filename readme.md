***
# Questions

## 1. Name the three ways to declare a variable?
## 2. Which of the three variable declarations should you avoid and why?
## 3. What rules should you follow when naming variables?
## 4. What should you look out for when using the + operator with numbers and
## strings?
## 5. How does the % operator work?
## 6. Explain the difference between == and ===.
## 7. When would you receive a NaN result?
## 8. How do you increment and decrement a number?
## 9. Explain the difference between prefixing and post-fixing increment/decrement
## operators.
## 10. What is operator precedence and how is it handled in JS?
## 11. How do you log information to the console?
## 12. What does unary plus operator do to string representations of integers?
## 13. What are the eight data types in JavaScript?
## 14. Which data type is NOT primitive?
## 15. What is the relationship between null and undefined?
## 16. What is the difference between single, double, and backtick quotes for strings?
## 17. What is the term for embedding variables/expressions in a string?
## 18. Which type of quote lets you embed variables/expressions in a string?
## 19. How do you embed variables/expressions in a string?
## 20. How do you escape characters in a string?
## 21. What is the difference between the slice/substring/substr string methods?
## 22. What are the three logical operators and what do they stand for?
## 23. What are the comparison operators?
## 24. What are truthy and falsy values?
## 25. What are the falsy values in JavaScript?
## 26. What are conditionals?
## 27. What is the syntax for an if/else conditional?
## 28. What is the syntax for a switch statement?
## 29. What is the syntax for a ternary operator?
## 30. What is nesting?
## 31. What are functions useful for?
## 32. How do you invoke a function?
## 33. What are anonymous functions?
## 34. What is function scope?
## 35. What are return values?
## 36. What are arrow functions?

***
# Answers

## 1. var, let, const
## 2. var, because it has a global scope and can lead to unexpected behavior.
## 3. Variable names should be descriptive, start with a letter, and use camelCase.
## 4. The + operator can concatenate strings and add numbers, but if one operand is a string, the result will be a string.
## 5. The % operator returns the remainder of a division operation.
## 6. == compares values, while === compares values and types.
## 7. NaN is returned when a mathematical operation doesn't make sense, such as dividing by zero or multiplying non-numeric values.
## 8. ++x increments x before the current expression is evaluated, while x++ increments x after the current expression is evaluated.
## 9. Prefix increment/decrement operators update the value before the expression is evaluated, while postfix increment/decrement operators update the value after the expression is evaluated.
## 10. Operator precedence determines the order in which operators are evaluated in an expression, and it follows the PEMDAS rule.
## 11. console.log()
## 12. The unary plus operator converts a string representation of an integer to an actual number.
## 13. number, string, boolean, undefined, null, symbol, object, BigInt
## 14. object
## 15. null is an intentional absence of any object value, while undefined means a variable has been declared but has no assigned value.
## 16. Single and double quotes can be used interchangeably for strings, but backticks are used for template literals which allows for string interpolation.
## 17. String interpolation.
## 18. Backtick quotes.
## 19. Use ${} within backticks and place the variable or expression inside.
## 20. By using a backslash () before the character.
## 21. slice() extracts a portion of a string and returns a new string, substring() is similar but cannot take negative indexes, and substr() is similar to slice but takes a start index and a length.
## 22. && (and), || (or), ! (not)
## 23. <, >, <=, >=, ==, !=
## 24. Truthy values are values that evaluate to true in a boolean context, while falsy values are values that evaluate to false.
## 25. Falsy values in JavaScript are false, 0, null, undefined, NaN, and the empty string ("").
## 26. Conditionals are used to execute different code based on whether a condition is true or false.
## 27. if (condition) { code } else { code }
## 28. switch (expression) { case value: code; break; default: code; }
## 29. condition ? expressionIfTrue : expressionIfFalse;
## 30. Nesting is when you have one block of code inside another block of code.
## 31. Functions are useful for encapsulating code that can be reused multiple times.
## 32. By calling the function name followed by parentheses and any arguments.
## 33. Anonymous functions are functions without a name that are assigned to a variable or passed as an argument to another function.
## 34. Function scope is the concept that variables declared within a function are only accessible within that function.
## 35. Return values are values that a function can optionally return to the calling code.
## 36. Arrow functions are a shorthand way of writing function expressions, using the => syntax.