function favouriteAnimal(animal) {
    return animal + " is my favourite animal";
}

function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

console.log(favouriteAnimal("cat"));
console.log(add7(10));
console.log(multiply(2, 3));
console.log(capitalize("hello"));
console.log(lastLetter("hello"));