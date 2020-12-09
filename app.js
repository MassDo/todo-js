//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//FUNCTIONS
function addTodo(e) {
    e.preventDefault();
    // Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create todo item
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    // Create CheckMark Button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add("completed-btn");
    todoDiv.appendChild(completeBtn);
    // Create delete button
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    // APPEND TO LIST
    todoList.prepend(todoDiv);
}

function deleteCheck(e) {
    item = e.target;
    const todo = item.parentElement;
    if (item.classList.contains("trash-btn")) {
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
        // todo.remove();
    } else if (item.classList.contains("completed-btn")) {
        todo.classList.toggle("completed-todo");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        todo.style.display = "flex";
    });

    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed-todo")) {
                    todo.style.diplay = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed-todo")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
