// Lecture 88: ES6 Object Destructuring

// const person = {
// 	name: 'Simon',
// 	age: 38,
// 	location: {
// 		city: 'Chicago',
// 		temp: 95
// 	}
// }

// instead of string interpolation (`${person.name} is ${person.age})
// const {name, age} = person;

// ES6 Object destructuring allows for:
// console.log(`${name} is ${age}.`);


// const {name, age, location} = person;
// above and below are equivalent
// const name = person.name;
// const age = person.age;

// const {city, temp} = person.location;
// if (city && temp) {
// 	console.log(`It's ${temp} in ${city}`);
// }

// you can rename variable names
// const {temp: temperature} = person.location;

// you can set Default Values
// const {name = 'Anonymous'} = person;

/////////////////////////////////////////////////

// Lecture 89: ES6 Array Destructuring

const address = ['1222 S. Main St', 'Chicago', 'IL'];

const [street, city, state] = address;
// variable names and data are matched by position
// you can set Defaults
console.log(`You are in ${city}, ${state}`);
