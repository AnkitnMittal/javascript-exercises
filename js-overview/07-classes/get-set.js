/* ----- Getters & Setters ----- */

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};


/*                ----- Access Descriptors -----
Can we be used for fixing compatibility issues by defining dropped
properties with new object constructor
*/
Object.defineProperty(user, "fullName", {
    get: function () {
        return `${this.name} ${this.surname}`
    },
    set: function (value) {
        [this.name, this.surname] = value.split(" ");
    }
});

user.fullName = "Alice Cooper";
console.log(user.name + " " + user.surname);

/* ----- Smart Getters & Setters ----- */
let person = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
};

person.name = "Pete";
console.log(person.name);

person.name = "";