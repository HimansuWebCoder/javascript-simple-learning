console.log(2 === 2);
console.log(2 == "2")
console.log(2 === "2")
console.log(2 != 2)
console.log(2 !== 2)
console.log(2 !== "2")
console.log(2 != "3")
console.log(2 > 2)
console.log(2 > 3)
console.log(2 > 1)
console.log(2 < 1)
console.log(2 < 3)
console.log(2 <= 3)
console.log(2 >= 3)

//? Logical
//? &&
// let x = 6;
// let y = 3;
// let z = x < 10 && y > 1;
// let z = x < 3 && y > 1;
// z;

//? || or
// let x = 6;
// let y = 3;
// let z = x < 10 || y > 1;
// let z = x < 3 || y > 1;
// z;

//? ! not
// let x = 6;
// let y = 3;
// console.log(!(x === y));
// console.log(!(x > y));

//? Ternary (conditional)
//? variablename = (condition) ? value1:value2
// let age = 19
// let age = 18;
// let voteable = (age > 18) ? "Too young":"old enough" ;
// voteable

//? Nullish coalescing (??) - returns the first argument if it is not nullish (null or undefined).
// let name = null;
// let txt = "missing";
// let result = name ?? txt;
// result;

//? Optional chaining (?) - returns undefined if an object is undefined or null (instead of throwing an error).
// const car = {
// 	type:"TATA",
// 	model:"400",
// 	color:"white"
// }
// Ask for car name 
// console.log(car?.name);
// console.log(car?.model);
