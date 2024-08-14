
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

// Submit action

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = createLi();

    if (input.value === "") {
        alert("Enter the name please")
    }
    else{
        ul.appendChild(li);
    }
});

// Checkbox

ul.addEventListener("change", (event) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const li = checkbox.parentNode.parentNode;
    if (checked) {
        li.className = "responded"
    } else {
        li.className = "";
    }
});

// Button action

ul.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.textContent === "remove") {
            ul.removeChild(li);
        } else if (button.textContent === "edit") {
            const span = li.firstElementChild;
            const input = document.createElement("input");
            input.type = "text";
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = "save";
        } else if (button.textContent === "save") {
            const input = li.firstElementChild;
            const span = document.createElement("span");
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = "edit";
        }
    }
});