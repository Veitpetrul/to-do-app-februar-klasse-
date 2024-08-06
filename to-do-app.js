let state = {
  todos: [],
  filter: "all",
};

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const newTodo = todoInput.value.trim();

  if (newTodo) {
    state.todos.push({ text: newTodo, done: false });
    todoInput.value = "";
    renderTodos();
  }
}

function toggleTodo(index) {
  state.todos[index].done = !state.todos[index].done;
  renderTodos();
}

function setFilter(filter) {
  state.filter = filter;
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "done") return todo.done;
    if (state.filter === "open") return !todo.done;
    return true;
  });

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.onclick = () => toggleTodo(index);

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(todo.text));
    todoList.appendChild(li);
  });
}

// Initial render
renderTodos();
