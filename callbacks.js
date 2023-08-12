//? Function sequence 
// function show(x) {
// 	 x;
// }

// function fruit1() {
// 	show("Mango");
// }

// function fruit2() {
// 	show("Orange");
// }

// console.log(fruit1())
// console.log(fruit2())

// or 

// console.log(fruit2());
// console.log(fruit1());


// function display(x) {
// 	console.log(x);
// }

// function myCalc(a, b) {
// 	let sum = a + b;
// 	return sum;
// }

// let result = myCalc(2,3);
// console.log(display(result));

//? callbacks - It is a function passed as an argument to another function
// Using a callback, you could call the calculator, 
// function (myCalculator) with a callback (myCallback), 
// and let the calculator function run the callback after the calculation is finished:

// function myDisplayer(x) {
// 	x;
// }

// function myCalculator(num1, num2, myCallback) {
// 	let sum = num1 + num2;
// 	myCallback(sum);
// }

// console.log(myCalculator(2,3, myDisplayer));

//?In the example above, myDisplayer is a called a callback function.

//? It is passed to myCalculator() as an argument.

// Create array
// const myNum = [2, 3, 5, -2, -1, 6, 7];

// Call removeNeg with a callback
// const posNum = removeNeg(myNum, (x) => x >=0);

// display result 
// console.log(posNum);

// Keep only pos num
// function removeNeg(num, callback) {
// 	const myArr = [];
// 	for (const x of num) {
// 		if (callback(x)) {
// 			myArr.push(x);
// 		}
// 	}
// 	return myArr;
// }
