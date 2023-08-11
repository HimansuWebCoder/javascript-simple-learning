//?Instead of writing:
// const fruits = ["Mango", "Orange", "Banana", "Lichi", "Apple"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

//? We can write

// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i]);
// }

//? 1- for
//? 2- for..in
//? 3- for..of
//? 4- while
//? 5- do..while

//? for
// for (expr1; expr2; expr3) {
// code block execute
// }

// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// const fruits = ["Mango", "Orange", "Banana", "Lichi", "Apple"];

// let i, fruit, txt;
// for (i = 0, fruit = fruits.length, txt = ""; i < fruit; i++) {
//   for (i = 0, fruit = fruits.length, txt = ""; i < fruit; i++) {
//     txt += fruits[i] + "\n";
//   }
// }
// txt;

// const fruits = ["Mango", "Orange", "Banana", "Lichi", "Apple"];
// let i = 2;
// let len = fruits.length;
// let txt = " ";
// for (; i < len; i++) {
	// 	txt += fruits[i] + "\n";
	// }
	
	// txt;
	
	
// const fruits = ["Mango", "Orange", "Banana", "Lichi", "Apple"];
// let i = 0;
// let len = fruits.length;
// let txt = "";
// for (; i < len; i++) {
// 	txt += fruits[i] + "\n";
// 	i++;
// }

// txt;

//? Loop scope
// var i = 3;
// for (var i = 0; i < 10; i++) {
	// code
// }

// i;

//? using let 
// let i = 3;
// for (let i = 0; i < 10; i++) {
	// code
// }

// i;

//? for...in - properties of an Object:

// for (key in object) {
	// code
// }

// const person = {
// 	name: "Himansu",
// 	age: 22,
// 	place: "Bhubaneswar"
// }

// let txt = "";
// for (let x in person) {
// 	txt += person[x] + "\n";
// }

// txt;

//? Variable in array
// for (variable in array) {
// 	code 
// }

// const numbers = [2, 3, 4, 5, 6];
// let txt = "";
// for (let x in numbers) {
// 	txt += numbers[x] + "\n";
// }

// txt;

//? forEach()
// const numbers = [2, 3, 4, 5, 6];

// let num = "";
// numbers.forEach((x) => {
	// return x * 2;
// 	return num += x * 2 + "\n";
// });

// num;


//? for...of 
// for (variable of iterable) {
// 	code
// }

// const fruits = ["Mango", "Apple", "Lichi", "Banana"];

// let txt = "";
// for (let x of fruits) {
// 	txt += x + "\n";
// }
// txt;

//? looping over a string
// let language = "JAVASCRIPT";

// let txt = "";
// for (let x of language) {
// 	txt += x + "\n";
// }

// txt;

//? while 
// while (condition) {
// 	code
// }

// let i = "";
// let txt = "";
// while ( i < 10) {
// 	txt += i + "\n";
// 	i++;
// }
// txt;


//? do...while 
// do {
// 	code 
// } while (condition);

// let i = "";
// let txt = "";
// do {
// 	txt += i + "\n";
// 	i++;
// } while (i < 10);
// txt;

//? compare for & while 
// const fruits = ["Mango", "Apple", "Lichi"];
// let i = 0;
// let txt = "";

// for (; fruits[i];) {
	// 	txt += fruits[i] + "\n";
	// 	i++;
	// }
	// txt;

//? while
// const fruits = ["Mango", "Apple", "Lichi"];
// let i = 0;
// let txt = "";

// while (fruits[i]) {
// 	txt += fruits[i] + "\n";
// 	i++;
// }
// txt;

//? break - jumps out of a loop
//? continue - jumps over 1 iteration in loop

//? break
// for (let i = 0; i < 10; i++) {
// 	if (i === 3) {
// 		break;
// 	}
// 	console.log(i);
// }

//? continue
// for (let i = 0; i < 10; i++) {
// 	if (i === 3) { 
// 		continue;
// 	}
// 	console.log(i); // missed 3
// }


//? lables 
// label:
// statements

// break labelname:

//continue labelname;

// const fruits = ["Mango", "Orange", "Lichi", "Banana", "Apple"];
// let txt = "";
// list: {
// 	txt += fruits[0] + "\n";
// 	txt += fruits[1] + "\n";
// 	break list;
// 	txt += fruits[2] + "\n";
// 	txt += fruits[3] + "\n";
// }
// txt;