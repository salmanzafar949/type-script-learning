// Data Types
// Boolean
var flag = true;
// Number
var num = 12;
// String
var str = "abc";
// array of number
var arr = [1, 2, 3];
// array if any thing e.g 1, 3, "a"
var arr1 = [1, 2, 3, "aa"];
// Enums
// can only be numbers
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2] = "e";
    myConstants[myConstants["log"] = 0.3] = "log";
    myConstants[myConstants["log1"] = 0.7] = "log1";
})(myConstants || (myConstants = {}));
var radius = 10;
console.log("Finding area of Circumference " + 2 * myConstants.pi * radius);
// Functions
function addNumbers(n1, n2) {
    return n1 + n2;
}
console.log("Sum of Two numbers is " + addNumbers(1, 2));
// Default Arguments in functions
function areaOfEclipse(r1, r2) {
    if (r2 === void 0) { r2 = r1; }
    return Math.PI * r1 * r2;
}
console.log("area of Eclipse " + areaOfEclipse(2));
// Function with optional arguments
function areaOfSquare(side, isInteger) {
    if (isInteger) {
        return Math.floor(side * side);
    }
    return side * side;
}
console.log("Area of Square is: " + areaOfSquare(2.125));
// alert('hello world');
