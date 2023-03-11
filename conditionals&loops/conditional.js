// First exercise
// Ask the user to enter the value and then stores them in the variable
let num1 = parseInt(prompt("Enter first integer: "));
let num2 = parseInt(prompt("Enter second integer: "));

// If statement to compare the two numbers
if (num1 > num2) {
  console.log(num1 + " is larger.");
} else if (num2 > num1) {
  console.log(num2 + " is larger.");
} else {
  // If both numbers are equal, display a message saying so
  console.log("Both numbers are equal.");
}

// Second exercise
// Ask the user to enter the value and then stores it in the variable
let num = parseInt(prompt("Enter an integer: "));

// Check if the number it's even or odd
if (num % 2 === 0) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd.");
}
