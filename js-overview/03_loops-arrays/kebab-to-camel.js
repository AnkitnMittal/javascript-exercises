function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) =>
                index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

let array = ["background-color", "list-style-image", "-webkit-transition"];
let camelized = array.map(camelize);
console.log(camelized);