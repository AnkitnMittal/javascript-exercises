function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < a || array[i] > b) {
            array.splice(i, 1);
            i--;
        }
    }
}

let array = [5, 2, 7, 9, 10, 1];
let a = 5, b = 10;

// Filter for range
let filtered = array.filter((num) => num >= a && num <= b);
console.log(filtered);

// Filter in-place for range
filterRangeInPlace(array, a, b);
console.log(array);