
const form = document.querySelector("#inviteForm");
const input = document.querySelector("input");
const ul = document.querySelector("#invitedList");

function createLi() {
    const li = document.createElement("li");
    const span = document.createElement("span")
    span.textContent = input.value;

    const label = document.createElement("label");
    label.textContent = " confirmed";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit"
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";

    li.appendChild(span);
    li.appendChild(label);
    label.appendChild(checkbox);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    return li;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = createLi();

    if (input.value === "") {
        alert("Enter the name please")
    }
    else{
        ul.appendChild(li);
    }
})

ul.addEventListener("change", (event) => {
    const checkbox = event.target;
    constchecked = checkbox.checked;
    const li = checkbox.parentNode.parentNode;
    if (checked) {
        li.className = "responded"
    } else {
        className = "";
    }
})