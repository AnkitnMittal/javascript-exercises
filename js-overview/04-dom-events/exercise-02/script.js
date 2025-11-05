const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "we hope you enjoyed the ride.";
para.classList.add("highlight");
sect.appendChild(para);

const text = document.createTextNode(" - the premier source for we development knowledge.",);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

/* Moves the node to the end of the parent node - NO COPY IS CREATED */
sect.appendChild(linkPara);

const sample = document.createElement("p");
sample.textContent = "This div will be deleted";

/* 
sect.removeChild(sample);
In case, the parent node is not known, we can use the
following code:
*/
sample.parentNode.removeChild(sample);

