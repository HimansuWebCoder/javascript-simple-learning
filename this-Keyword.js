// const person = {
//   fname: "Himasu",
//   lname: "Naik",
//   fullName() {
    // return this.fname + " " + this.lname;
//     return `${this.fname} ${this.lname}`;
//   },
// };

// console.log(person.fullName());

//? What is this? 
//? object - refers object 
//? alone - refers gloval object
//? function - refers global object 
//? function strict mode - refers undefined 
//? event - refers elem that received event.
//? call(), apply() , bind() - refers object


//? in method 
// above example 
// fullName() {
    // return this.fname + " " + this.lname;
//     return `${this.fname} ${this.lname}`;
//   },

//? alone 
// let x = this;
// x; //{} object 

//? use strict 
// "use strict";
// let x = this;
// x; // same {}

//? in function (default)
// function myFunc() {
// 	return this;
// }

// myFunc() // [object window]

//? in function (strict)
// "use strict";
// function myFunc() {
// 	return this;
// }
// console.log(myFunc()); // undefined