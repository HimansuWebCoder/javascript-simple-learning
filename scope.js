//?scope 
// 1- Block 
// 2- Function 
// 3- Global 

//? Block 
// {
// 	let x = 2;
// }

// x;

// but 

// {
// 	var x = 2;
// }

// x; can be use here 

//? Local Scope 
// name; not use here

// function  myFunc() {
// 	let name = "Himansu"
// }

// name; not used here

//? Function
// function myFunc() {
// 	var name = "Himansu"; // Function Scope
// }

// name; not access 
// function myFunc() {
// 	let name = "Himansu"; // Function Scope
// }

// function myFunc() {
// 	const name = "Himansu"; // Function Scope
// }

//? Global
// let name = "Himansu";

// myName();

// function myName() {
//     name;
// }

// myName();

//? Global Scope 
//? Variables declared Globally (outside any function) have Global Scope.
// var name = "Himansu" // global 
// let name = "Himansu" // global
// const name = "Himansu" // global