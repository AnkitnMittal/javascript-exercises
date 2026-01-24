function makeAddingFunction(firstNumber) {
    /* firstNumber is accessible anywhere inside this block */
    return function returnedFunction(secondNumber) {
        /* secondNumber is accessible only in this block */
        return firstNumber + secondNumber;
    }
}

const increment = makeAddingFunction(1);
console.log(increment(2));

/* 
            ----- Fancy Functions ----- 
This function replaces constructor by returning an object
but incurs a performance penalty
*/
function createUser(name) {
    const discordName = "@" + name;
    return { id, discordName };
}

/* 
Object Shorthand 
    If same name as property, direct assignment
*/
const Name = "XYZ";
const age = 23;
const color = "red";

const std = { Name: Name, age: age, color: color };
const newer = { Name, age, color };

console.log(Name, age, color);
console.log({ Name, age, color });

/* Object Destructuring */
const object = { a: 1, b: 2 };
const { a, b } = object;

/* ----- Encapsulation : Private Variables & Functions ----- */
function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => { reputation++; };

    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({ reputation: josh.getReputation() });
console.log(josh);


/* 
Prototypal inheritance with factories 
    Check Object.assign() method
*/
function createPlayer(name, level) {
    const { getReputation, giveReputation } = createUser(name);

    const increaseLevel = () => { level++ };
    return { name, getReputation, giveReputation, increaseLevel };
}

/* 
----- IIFE ( Immediately Invoked Function Expressions ) -----
    In such cases, the function is called immediately &
    evaluated / returns the expression & store it. No name has 
    to be given to such a function.
*/

(() => { console.log('foo') })();

const calculator = (function () {
    const add = ((a, b) => a + b);
    const sub = ((a, b) => a - b);
    const mul = ((a, b) => a * b);
    const div = ((a, b) => a / b);

    return { add, sub, mul, div };
})();

console.log(calculator.add(1, 2));