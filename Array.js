//? It is a special variable, which can hold more than one value:
// const name = ["Himansu", "Rinky", "Sipu"];
// name;

//? Why use Arrays? 
// If you have a list of items (a list of car names, for example), storing 
// the cars in single variables could look like this:
// let car1 = "BMW";
// let car2 = "TATA";
// let car3 = "Hyundai";

// but in array 
// const cars = ["BMW", "TATA", "Hyundai"];

//? Creating Arrays 
//? const array_name = [item1, item2, ...];
// const fruit = ["Mango", "Orange", "Guava", "Lichi"];

//? Spaces & line breaks are not important.
//? A declaration can  span multiple lines: 

// const fruits = [
// 	"Mango",
// 	"Orange",
// 	"Guava",
// 	"Lichi"
// ];
// fruits;

//? or we can also create array and provide elem 
// const fruits = [];
// fruits[0] = "Mango";
// fruits[1] = "Orange";
// fruits[2] = "Guava";
// fruits[3] = "Lichi";
// fruits;

//? access array elem
//?  Array indexes start with 0.
// const fruits = ["mango", "apple", "banana"];
// let fruit =  fruits[0];
// fruit;

//? changing array elem 
// fruits[0] = "Lichi";
// fruits;

//? convert array to string
// const toString = fruits.toString();
// toString;

//? access full array 
// fruits;

//? length
// const fruits = ["mango", "apple", "lichi"];
// let length = fruits.length;
// length;

//? access 1st array elem
// const fruits = ["mango", "apple", "lichi"];
// let fruit = fruits[0];
// fruit;

//? access last array elem
// const fruits = ["mango", "apple", "lichi"];
// let fruit = fruits[fruits.length-1];
// fruit;

//? looping array elem

const fruits = ["Mango", "Orange", "Apple", "Lichi"];
// let fLength = fruits.length;

// for (let i = 0; i < fLength; i++) {
// 	console.log(fruits[i]);
// }

