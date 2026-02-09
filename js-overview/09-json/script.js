import data from "./basic.json" with { type: "json" };
import array from "./array.json" with { type: "json" };

console.log(data);
console.log(array);

const myJSON = JSON.stringify(data);

/* Storing Data in LocalStorage */
localStorage.setItem("testJSON", myJSON);

/* Retrieving Data from LocalStorage */
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);