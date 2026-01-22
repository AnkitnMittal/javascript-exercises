/* ----- Objects Basics ----- */
let user = {
    name: "John",
    age: 30,
    "Likes Birds": true,
    sayName: function () {
        console.log("Hello World");
    }
};

console.log(user.name + " is " + user.age + " years old.");

user["Likes Birds"] = false;
user.isAdmin = true;

let key = "age";
delete user[key];

/* ----- Objects as a Design Pattern ----- */
function printName(player) {
    console.log(player.name);
}

const playerOne = {
    name: "Ankit",
    marker: "X"
}

const playerTwo = {
    name: "Harsh",
    marker: "O"
}

/* ----- Object Constructors ----- */
function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name);
    };
}

const player = new Player('steve', 'X');
player.sayName();

/* ----- Object Prototype ----- */
const check = Object.getPrototypeOf(player) === Player.prototype;
console.log(check);

Player.prototype.sayHello = function () {
    console.log("Hello, I'm a player");
};

player.sayHello();

/* ----- Object Prototypal Inheritance ----- */
Object.getPrototypeOf(Player.prototype) === Object.prototype;

console.log(player.valueOf());

console.log(player.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('valueOf'));

/* 
An object inherits from its [[Prototype]] object which in 
turn inherits from its own [[Prototype]] object forming a chain
*/
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));

/* This returns null indicating end of the chain */
console.log(Object.getPrototypeOf(Object.prototype));