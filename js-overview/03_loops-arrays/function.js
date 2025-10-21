function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            const tripleEvenNumber = array[i] * 3;
            sum += tripleEvenNumber;
        }
    }

    return sum;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using Array Methods - map to implement addOne arrow function
const mappedArr = array.map((num) => num + 1);
console.log(mappedArr);

// Using Array Methods - filter to implement isOdd arrow function
const filterArr = array.filter((num) => num % 2 !== 0);
console.log(filterArr);

// Using Array Methods - reduce to implement sum arrow function
const reduceArr = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,)
console.log(reduceArr);

// Using Array Methods - reduce to implement sumOfTripledEvens arrow function
const sumOfTripledEvensArr = array.filter((num) => num % 2 === 0).map((num) => num * 3).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfTripledEvensArr);