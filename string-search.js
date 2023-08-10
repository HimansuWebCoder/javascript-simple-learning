//? String search methods
// 1- indexOf()
// 2- lastIndexOf()
// 3- search()
// 4- match()
// 5- matchAll()
// 6- includes()
// 7- startsWith()
// 8- endsWith()

//? indexOf()
// let txt = "Himansu";
// let index = txt.indexOf("i");
// index;

//? lastIndexOf()
// let txt = "I am a programmer";
// let index = txt.lastIndexOf("a")
// index;

// let txt = "Please locate where 'locate' occurs!";
// let index = txt.indexOf("locate", 15);
// index;

//? search()
// let txt = "I am learning javascript now!";
// let search = txt.search("learning");
// search;

// let txt = "I am learning javascript now!";
// let search = txt.search(/learning/);
// search;

//? The search() method cannot take a second start position argument.
//? The indexOf() method cannot take powerful search values (regular expressions).

//? match()
// let txt = "I am a coder";
// let match = txt.match("am");
// match;

// let txt = "I am a coder";
// let match = txt.match(/am/);
// match;

//? matchAll()
// const animals = "Cat, Dog, Tiger, Elephant, Cat is a domestic animals";
// const allMatch = animals.matchAll("Cat");
// allMatch;

//? includes()
// let txt = "I am a coder";
// let includes = txt.includes("coder");
// let includes = txt.includes("programming");
// includes;

//? startsWith()
// let txt = "Hello Javascript";
// let start = txt.startsWith("H");
// let start = txt.startsWith("e");
// start;

//? endsWith()
// let txt = "Hello Javascript";
// let start = txt.endsWith("t");
// let start = txt.endsWith("p");
// start;