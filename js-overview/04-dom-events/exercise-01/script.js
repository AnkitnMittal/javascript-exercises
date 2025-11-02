const container = document.querySelector(".container");

let firstp = document.createElement("p");
firstp.setAttribute["style", "color:red"];
firstp.textContent = "Hey I'm red";

let h3 = document.createElement("h3");
h3.setAttribute["style", "color:blue"];
h3.textContent = "I'm a blue h3!";

container.appendChild(firstp);
container.appendChild(h3);

let div = document.createElement("div");
div.setAttribute["style", "background-color: pink; border: 1px solid black"];

let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

let secondp = document.createElement("p");
secondp.textContent = "ME TOO!";
div.appendChild(secondp);

container.appendChild(div);



