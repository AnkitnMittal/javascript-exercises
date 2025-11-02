/*--------- Section I ---------*/
const container = document.querySelector(".container");

const firstChild = container.firstElementChild;
console.log(firstChild);
const secondChild = container.lastElementChild;
console.log(secondChild);


/*--------- Section I ---------*/
const div = document.createElement("div");

/*
adds the indicated style rule to the element
    div.style.color = "blue";

add several style rules to the element
    div.style.cssText = "color: blue; background: white;";
*/
div.setAttribute("style", "color: blue; background: white;");

// kebab-cased CSS property
div.style.backgroundColor;
div.style["background-color"];
div.style["backgroundColor"];

// Editing Attributes
div.setAttribute("id", "third-child");
div.getAttribute("id");
div.removeAttribute("id");

// Working with Classes
div.classList.add("third-child");
div.classList.remove("third-child");

/*
if the class exists, remove it, otherwise add it
It is often standard (and cleaner) to toggle a CSS style
rather than adding and removing inline CSS.
*/
div.classList.toggle("third-child");
div.classList.contains("third-child");

/*
textContent is preferred over innerHTML to avoid security
risks such as JS injection.
Web Dev Simplified : https://www.youtube.com/watch?v=ns1LX6mEvyM
*/
div.textContent = "This was created using Javascript";

container.appendChild(div);