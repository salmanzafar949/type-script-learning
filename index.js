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
function getResult(num, num1, num2, num3) {
    if (num1 == undefined && num2 == undefined && num3 == undefined) {
        return num;
    }
    else if (num2 == undefined && num3 == undefined) {
        return num + num;
    }
    return -1;
}
console.log("Function overloading " + getResult(1));
console.log("Function overloading " + getResult(1, 2));
// will give error since we haven't defined function overloading ith three arguments
// console.log(`Function overloading ${getResult(1,2,3)}`);
console.log("Function overloading " + getResult(1, 2, 3, 4));
function operate(x) {
    return x.size * x.size;
}
var calc = operate({ shape: "square", size: 5 });
console.log("operate is " + calc);
function createPlayer() {
    return {
        run: function () { },
        addLives: function (n) { },
        score: function () {
            return -1;
        }
    };
}
var player1 = createPlayer();
player1.addLives(1);
player1.run();
console.log("Player1 " + player1.score());
// Classes
var Website = /** @class */ (function () {
    function Website(url, address, mobile_no) {
        this.url = url;
        this.address = address;
        this.mobile_no = mobile_no;
    }
    Website.prototype.getMobile = function () {
        return this.mobile_no;
    };
    return Website;
}());
var myWebsite = new Website("https://salman.com", "https://salman.com", 12345678);
myWebsite.url = "https://salman.com";
myWebsite.address = "https://salman.com";
myWebsite.mobile_no = 12345678;
console.log("mobile " + myWebsite.getMobile());
// getter and Setters
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        /* l:number;
         l1:number;
     
         constructor(l:number, l1:number) {
             this.l = l;
             this.l1 = l1;
         }*/
        get: function () {
            return this._sideOne * this._sideTwo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "perimeter", {
        set: function (length) {
            this._perimeter = length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "oneSide", {
        set: function (side) {
            this._sideOne = side;
            this._sideTwo = (this._perimeter - 2 * this._sideOne) / 2;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var rect = new Rectangle();
rect.perimeter = 2;
rect.oneSide = 2;
console.log("Area is " + rect.area);
// Fat Arrow Functions (Lambda Functions)
var Car = /** @class */ (function () {
    function Car() {
        this.gasAmount = 0;
        this.carObj = document.getElementById('car');
    }
    Car.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            _this.gasAmount++;
            _this.carObj.innerText = String(_this.gasAmount);
        }, 500);
    };
    return Car;
}());
var myCar = new Car();
myCar.run();
// alert('hello world');
