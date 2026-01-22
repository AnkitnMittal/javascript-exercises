/*
p1
 ↓ [[Prototype]]
Person.prototype
 ↓ [[Prototype]]
Object.prototype
 ↓ [[Prototype]]
null
*/

/* 
Person & Player     - constructors OR functions
.prototype          - objects
Instances           - created from constructor but linked to prototype

.prototype stores shared methods & automatically linked to 
objects created by `new` keyword
    Store Methods on constructor's prototype
*/

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}`);
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Person.prototype.getMarker = function () {
    console.log(`My marker is ${this.marker}`);
}

Object.getPrototypeOf(Player.prototype);

/* `Player` object inherits from `Person` */
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player('steve', 'X');
player1.sayName();
player1.getMarker();

/*
Player.prototype = Person.prototype;

Warning: This doesn't work, instead Player.prototype & Person.prototype
become the same object in the memory which will cause changes in one
to appear in both of the objects
*/