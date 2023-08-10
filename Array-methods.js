// 1-length
// 2- toString()
// 3- pop()
// 4- push()
// 5- shift()
// 6- unshift()
// 7- join()
// 8- delete()
// 9- concat()
// 10- flat()
// 11- splice()
// 12- slice()

//? length
// const fruits = ["mango", "apple", "orange"];
// console.log(fruits.length);

//? toString()
// const fruits = ["mango", "apple", "orange"];
// console.log(fruits.toString());

//? pop() - move last item from array 
// const fruits = ["mango", "apple", "orange"];
// fruits.pop();
// fruits;

//? push() - add item end of array
// const fruits = ["mango", "apple", "orange"];
// fruits.push("Banana");
// fruits;

//? shift() - remove 1st elem from array
// const fruits = ["mango", "apple", "orange"];
// fruits.shift();
// fruits;


//? unshift() - add item 1st of array
// const fruits = ["mango", "apple", "orange"];
// fruits.unshift("Lemon");
// fruits;

//? change elem
// const fruits = ["mango", "apple", "orange"];
// fruits[0] = "Lichi";
// fruits;

//? delete
// const fruits = ["mango", "apple", "orange"];
// delete fruits[0];
// fruits;

//? merging or concatenate 
// const fruits = ["mango", "orange", "lichi"];
// const veg = ["potato", "tomato", "chilli"];
// const vegFruits = fruits.concat(fruits);
// vegFruits;

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// myChildren

//? merging array with values 
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 
// myChildren;

//? flat() - reates a new array with sub-array elements concatenated to a specified depth.
// const myArr = [[1,3], [3,4], [2,3]];
// const newArr = myArr.flat();
// newArr;

//? splice & slice arrays 
//? splice() - adds new items to an array
//? slice() - slices out a piece of array

//? splice()
// const fruits = ["banan", "apple", "orange"];
// fruits.splice(2, 0, "lemon", "Lichi");
// fruits;

// fruits.splice(2, 2, "lemon", "Lichi");
// fruits;

// remove elem 
// fruits.splice(0, 1);
// fruits;

//? slice() - creates a new array.
//? does not remove any elements from the source array.
// const fruits = ["banan", "apple", "orange"];
// const fruit = fruits.slice(1);
// fruit;

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// citrus;

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// citrus;

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// citrus;

