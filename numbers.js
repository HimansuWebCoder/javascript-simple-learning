// let x = 2.12; // number with decimal
// let y = 2; // number without decimal

//?adding numbers & strings
// let x = 10;
// let y  = 20;
// let z  = x + y;
// z;

// let x  = "10";
// let y = "20";
// let z = x + y;
// z;

// let x = 10;
// let y = "20";
// let z = x + y;
// z;

// let x = "10";
// let y = 20;
// let z = x + y;
// z;

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;
// result;

//? JS interpreter works from left to right.

//? Numeric Strings
// let x = 200; // x is a number
// let y = "200"; // x is a string

//? JS will try to convert strings to numbers in all numeric operations:
// let x = "100";
// let y = "10";
// let z = x / y;
// z;

// let x = "100";
// let y = "10";
// let z = x * y;
// z;

// let x = "100";
// let y = "10";
// let z = x - y;
// z;

// but this will not work 

// let x = "100";
// let y = "10";
// let z = x + y;
// z;

//? js use + operator to concatenate strings

//? NaN = Not a Number

// let x = 100 / "Apple";
// x;

//? if the string is numeric, the result will be a number:
// let x = 100 / "10";
// x;

// let x = 100 / "Apple";
// console.log(isNaN(x));

// let x = NaN;
// let y = 5;
// let z = x + y;
// z;

// let x = NaN;
// let y = "5";
// let z = x + y;
// z; // NaN5

//? NaN is a number: typeof NaN returns number:
// console.log(typeof(NaN))

//?toString()
// let num = 20;
// let string = num.toString();
// string 
// console.log(typeof(string));
// console.log(typeof(num));