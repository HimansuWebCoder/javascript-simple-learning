//? Class Inheritance 
//? extends

class Fruit {
	constructor(name) {
		this.fruitname = name;
	}
	present() {
		return `I have a  ${this.fruitname}`;
	}
}

class Color extends Fruit {
	constructor(name, col) {
		super(name);
		this.color = col;
	}
	show() {
		return `${this.present()}, this color is ${this.color}`;
	}
}

let myFruit = new Color ("Mango", "Yellow");
console.log(myFruit.show());

//? super() method refers to the parent class.
//? super() method in the constructor method, 
//? we call the parent's constructor method and gets access to the parent's properties and methods.

//? Hoisting

//You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Car {
	constructor(brand) {
	  this.carname = brand;
	}
  }
  
  //Now you can use the class:
  const myCar = new Car("Ford")