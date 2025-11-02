/*
An arrow inline function can also be used but it is a
good idea to refactor if the same function is used
multiple places
*/
function alertFunction() {
    alert("You clicked the button!");
}

const btn1 = document.querySelector("#btn1");
/* btn1.onclick = alertFunction; */
btn.addEventListener("click", alertFunction);

/*---------- Callback Functions ----------*/
/*
The callback function return the Event object itself
e has many parameters that may be accessed
    e.target: return the element that triggered the event
    e.target.style.backgroundColor = "red";
*/
btn.addEventListener("click", function (e) {
    console.log(e);
})

// Adding multiple event listeners to groups of nodes
const buttons = document.querySelectorAll(".buttonList");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
})