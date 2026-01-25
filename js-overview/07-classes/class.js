class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short!");
            return;
        }
        this._name = value;
    }

    sayHi() {
        console.log(this.name);
    }
}

let user = new User("John");
user.sayHi();

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(Object.getOwnPropertyNames(User.prototype));

/* ----- Class Expression ----- */
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

let Person = makeClass("Hello");
new Person().sayHi();