// Módulos CommonJS
const greeting = require('./greeting.js');
console.log(greeting.sayHello());
console.log(greeting.sayBye('Node.js'));

console.log('**************************************************');

// Programación asíncrona
function printBeers(beers) {
    console.log(beers);
}

const repository = require('./beer-repository.js');
// No callback
const beers = repository.findAll(); //Step 1
printBeers(beers); //Step 2

console.log('**************************************************');

// Callback
repository.findByName('Russian', printBeers);