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
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2] = "e";
    myConstants[myConstants["log"] = 0.3] = "log";
    myConstants[myConstants["log1"] = 0.7] = "log1";
})(myConstants || (myConstants = {}));
var radius = 10;
console.log("Finding area of Circumference " + 2 * myConstants.pi * radius);
// alert('hello world');
