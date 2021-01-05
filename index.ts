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

// Default Arguments in functions
function areaOfEclipse(r1:number, r2:number=r1){
    return Math.PI * r1 * r2;
}

console.log(`area of Eclipse ${areaOfEclipse(2)}`)

// Function with optional arguments
function areaOfSquare(side:number, isInteger?:boolean) :number {
    if (isInteger){
        return Math.floor(side * side)
    }

    return side * side;
}

console.log(`Area of Square is: ${areaOfSquare(2.125)}`);

// Function overloading

function getResult(num:number);
function getResult(num:number, num1:number);
function getResult(num:number, num1:number, num2:number, num3:number);
function getResult(num:number, num1?:number, num2?:number, num3?:number){
    if (num1 == undefined && num2 == undefined && num3 == undefined){
        return num;
    }
    else if (num2 == undefined && num3 == undefined){
        return num + num;
    }

    return -1;
}

console.log(`Function overloading ${getResult(1)}`);
console.log(`Function overloading ${getResult(1, 2)}`);
// will give error since we haven't defined function overloading ith three arguments
// console.log(`Function overloading ${getResult(1,2,3)}`);
console.log(`Function overloading ${getResult(1,2,3, 4)}`);


// interface in ts

interface operateInterface {
    shape:string,
    size:number
}

function operate(x:operateInterface) {

    return x.size * x.size
}

var calc = operate({shape : "square", size: 5})

console.log(`operate is ${calc}`)

interface Player {
    run(): void,
    addLives(n:number): void,
    score():number
}

function createPlayer():Player {
    return {
        run: function () {},
        addLives: function (n) {},
        score: function (): number {
            return  -1
        }

    }
}

var player1 = createPlayer();
player1.addLives(1);
player1.run();

console.log(`Player1 ${player1.score()}`)
// alert('hello world');