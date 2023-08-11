//? named exports 
export const name = "Himansu";
export const age = 22;

//? All at once at the bottom:
// const name = "Himansu";
// const age = 22;
// export {name, age};

//? default Exports 
const msg = () => {
	const name = "Himansu";
	const age = 22;
	return `${name} is ${age} years old`;
};

export default msg;