// 1- toString()
// 2- toExponential() 
// 3- toFixed()
// 4- toPrecision() 
// 5- ValueOf()

//? toString()
// let x = 2334;
// let y = x.toString();
// y;
// (212).toString();
// (100 + 23).toString();


//? toExponential() - returns a string, with a number rounded and written using exponential notation.
// let x = 9;
// let exp = x.toExponential(2);
// exp;

//? toFixed()
//? toFixed(2) is perfect for working with money.
// let x = 2.2233;
// let fix2 = x.toFixed(0)
// let fix3 = x.toFixed(2)
// fix2;
// fix3;

// ? toPrecision() -  returns a string, with a number written with a specified length:
// let x = 2.3434;
// let prec = x.toPrecision();
// let prec2 = x.toPrecision(2);
// prec;
// prec2;


//? valueOf() - returns a number as a number.
// let x = 123;
// let value = x.valueOf();
// value;
// console.log((123).valueOf());
// console.log((100 + 23).valueOf());

//? convert variable to numbers
// Number()
// parseFloat()
// parseInt()

//? Number()
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number(" 10"));
// console.log(Number("10  "));
// console.log(Number(" 10  "));
// console.log(Number("10.22  "));
// console.log(Number("10,22  "));
// console.log(Number("HImansu  "));


//? parseInt() - parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// console.log(parseInt("-10"));
// console.log(parseInt("-10.22"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("10 years"));;
// console.log(parseInt("years 10"));

//? parseFloat() - parses a string and returns a number. Spaces are allowed. Only the first number is returned:
// console.log("10");
// console.log("10.33");
// console.log("10 20 30");
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));