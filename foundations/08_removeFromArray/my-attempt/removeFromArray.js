const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach(item => {
        if (!args.includes(item))
            newArray.push(item);
    })

    return newArray;

    // return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
