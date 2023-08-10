//? forEach() - operate on every array item
// const numbers = [2, 3, 5, 6, 2];
// numbers.forEach((value, index, array) => {
	// 	console.log(value);
	// 	console.log(index);
	// 	console.log(array);
	// })
	
// const numbers = [2, 3, 5, 6, 2];
// numbers.forEach((e) => {
// 	console.log(e * 2);
// })

//? map() -  creates a new array by performing a function on each array element.
//? does not execute the function for array elements without values.
//? does not change the original array

// const numbers1 = [23, 2, 35, 6, 67];
// const numbers2 = numbers1.map(mapping);

// function mapping(value) {
	// return value * 2;
// 	console.log(value * 2);
// }

//? flatMap() - first maps all elements of an array and then
//? creates a new array by flattening the array.
// const arr = [1, 3, 5, 7, 9];
// const newArr = arr.flatMap((x) => x * 2);
// newArr;

//?filter() - creates a new array with array elements that pass a test.
// const numbers = [23, 2, 53, 4, 2];
// const over18 = numbers.filter(over);

// function over(a) {
// 	return a > 18;
// }

// over18;

//? reduce() - runs a function on each array element to produce (reduce it to) a single value.
//? method works from left-to-right in the array.
//? method does not reduce the original array.
// const numbers = [1, 3, 4, 5, 6];
// let sum = numbers.reduce((total, value, index, array) => {
// 	return total + value;
// })

// sum;

//? reduce() method can accept an initial value: 
// const numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((a, b) => {
// 	return a + b;
// }, 100);
// sum;

//? reduceRight() - method runs a function on each array element to produce (reduce it to) a single value.
//? works from right-to-left in the array
//?  method does not reduce the original array.
// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = numbers.reduceRight((a, b) => {
	// 	return a + b;
	// })
	// sum;
	

//? every() - method checks if all array values pass a test.
// const numbers = [23, 21, 12, 15, 45, 32];
// const numbers = [23, 21, 30, 20, 45, 32];
// let allOver18 = numbers.every(myFunction);

// function myFunction(a) {
// 	return a > 18;
// }
// allOver18;
	
//? some() - method checks if some array values pass a test.
//  checks if some array values are larger than 18:
// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// someOver18;

//? indexOf() - searches an array for an element value and returns its position.
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
// let position = fruits.indexOf("Apple");
// position;
//? syntax
// Array.indexOf(item, start);

//? find() - returns the value of the first array element that passes a test function.
//? finds (returns the value of) the first element that is larger than 18:
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// first;

//? findIndex() - returns the index of the first array element that passes a test function.
//? inds the index of the first element that is larger than 18:
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// first

//? array.from() - returns an Array object from any object with a length property or any iterable object.
// Array.from("ABCDEFG");
// console.log(Array.from("ABCDEFG"));

//? keys() -  returns an Array Iterator object with the keys of an array.'
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let fruit of keys) {
//   console.log(fruit);
// }

//? entries() 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
// 	console.log(x);
// }

//? includes() array.includes(search-item)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const include = fruits.includes("Mango"); 
// include; // true

//? spread(...) - ... operator expands an iterable (like an array) into more elements:
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// year;