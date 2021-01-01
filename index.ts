// Data Types

// Boolean
var flag:boolean = true;

// Number
var num:number  = 12;

// String
var str:string = "abc";

// array of number
var arr:number[] = [1,2,3];

// array if any thing e.g 1, 3, "a"
var arr1:any[] = [1,2,3, "aa"];

// Enums
// can only be numbers

enum myConstants {
    pi = 3.14,
    e = 2,
    log = 0.3,
    log1 = 0.7,
}

var radius:number = 10;

console.log(`Finding area of Circumference ${2 * myConstants.pi * radius}`)


// Functions

function addNumbers(n1, n2) : number {

    return n1 + n2;
}

console.log(`Sum of Two numbers is ${addNumbers(1,2)}`)

// alert('hello world');