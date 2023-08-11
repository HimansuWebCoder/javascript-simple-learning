//? Hoisting
//? js declarations are hoisted 
//? a variable can be declared after it has been used.
//? a variable can be used before it has been declared.
// x = 5;
// x;
// var x;
// x;

//  var x;
//  x = 5;
//  x;

//? JS initializations are not Hoisted 
// var x = 5; // Initialize x
// var y = 7; // Initialize y
// var z =  x + y;
// z;

// var x = 5;
// var z = x + y;
// z; // NaN y not initialize before declare
// var y = 7;
// var z = x + y;
// z; //initialize y 

// var x = 7;
// var y;
// var z = x + y;
// z;

// y = 7;

//? Declare your variables at the top!