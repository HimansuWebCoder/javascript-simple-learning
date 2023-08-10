// 1- length
// 2- slice()
// 3- replace()
// 4- replaceAll()
// 5- toUpperCase()
// 6- toLowerCase()
// 7- concat()
// 8- trim()
// 9- trimStart()
// 10- trimEnd()
// 11- padStart()
// 12- padEnd()
// 13- charAt()
// 14- charCodeAt()
// 15- split()

//? length
// let txt = "ABCDEGHIJKLMNOPQRSTUVWXYZ";
// let length = txt.length;
// length;

//? Extract string parts
//? slice() - start position and end position (end not included)
// let fruit = "Mango, Orange, Guava, Lichi";
// let favFruit = fruit.slice(0, 5);
// favFruit;

// let fruits = "Apple , Mango, Lichi";
// let favFruit = fruits.slice(8);
// favFruit;

// let fruits = "Apple , Mango, Lichi";
// let favFruit = fruits.slice(-6);
// favFruit; // count from end of string

// let fruits = "Apple, Mango, Lichi";
// let favFruit = fruits.slice(-19, -1);
// favFruit;

//? replacing string content 
// let txt = "I am a programmer";
// let newTxt = txt.replace("programmer", "coder");
// newTxt;

// let txt = " which programming good and what programming ?";
// let newTxt = txt.replaceAll("programming", "coding");
// newTxt;

//? toUpperCase()
// let txt = "I am a programmer";
// let upper = txt.toUpperCase();
// upper;

// let txt = "I am a programmer";
// let lower = txt.toLowerCase();
// lower;

//? concat()
// let fname = "Himansu";
// let lname = "Naik";
// let fullName = fname.concat(" ", lname);
// fullName;

//? string trim()
// let txt = "     Hello Javascript";
// let trim = txt.trim();
// trim;

//? trimStart()
// let txt = "     Hello javascript    ";
// let trim = txt.trimStart();
// trim;

// let txt = "     Hello javascript    ";
// let trim = txt.trimEnd();
// trim;

//? padStart()
// let txt = "4";
// let padded = txt.padStart(4, "0"); //pad a string wit "0" until reach length 4;
// padded;

// let txt = "12";
// let padded = txt.padStart(8, "8");
// padded;

// let txt = "12";
// let padded = txt.padStart(8, "x");
// padded;

//? to pad a number, convert number to a string first.
// let num = 5;
// let txt = num.toString();
// let padded = txt.padStart(5, "x");
// padded;


//? padEnd()
// let txt = "2";
// let padded = txt.padEnd(5, "x");
// padded;

//?charAT(position)

// let txt = "Himansu";
// let char = txt.charAt(0);
// let char = txt.charCodeAt(0);
// char;

//? prop access
// let txt = "Hello Javascript";
// let char = txt[0];
// char;


//? split()
//? converting string to array
// let txt = "a, b, c, d";
// const array = txt.split(":");
// array;
// console.log(array[0]);
// console.log(array[1]);