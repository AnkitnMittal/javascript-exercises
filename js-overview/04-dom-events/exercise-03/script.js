const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    const myItem = input.value;
    input.value = "";

    listText.textContent = myItem;
    listItem.appendChild(listText);
    listBtn.textContent = "Delete";
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    })

    input.focus();
});