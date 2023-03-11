// First exercise
// Declaring variables and giving the value of 9 to the side
let side = 9;
let diagonal = side * Math.sqrt(2);

// Finding the diagonal value
console.log(`diagonal is equal to ${diagonal}`);

// Second exercise
let a = 5, b = 6, c = 7;
// S stands for semicirconference
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// Printing the area of the triangle with sides a, b, and c
console.log(`The area of the triangle with sides ${a}, ${b}, and ${c} is ${area}`);

// Third exercise
let radius = 4;
const pi = Math.PI;
let circumference = 2 * pi * radius;
let c_area = pi * Math.pow(radius, 2);

// Printing the circumference and area of the circle
console.log(`circumference is ${circumference}`);
console.log(`area equals to ${c_area}`);