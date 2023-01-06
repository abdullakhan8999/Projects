const form = getElement("addForm");
const todoList = getElement("todos");
const filter = getElement("filter");
const todo = getElement("todo");

form.addEventListener("submit", addTodo);

todoList.addEventListener("click", removeTodo);

filter.addEventListener("keyup", filterTodos);

function getElement(id) {
  return document.getElementById(id);
}

function addTodo(e) {
  e.preventDefault();

  if (todo.value == "") {
    alert("put a valid todo");
    return;
  }

  const newTodo = todo.value;

  let li = document.createElement("li");

  li.className = "list-group-item";

  li.innerText = newTodo;

  let deleteButton = document.createElement("button");

  deleteButton.className = "btn btn-danger btn-sm delete";

  deleteButton.innerText = "delete";

  li.append(deleteButton);
  todoList.append(li);

  todo.value = "";
}
function removeTodo(e) {
  if (e.target.classList.contains("delete")) {
    let result = confirm("Are you sure?");
    if (result) {
      let li = e.target.parentElement;
      todoList.removeChild(li);
    }
  }
}
function filterTodos(e) {
  let searchText = e.target.value.toLowerCase();

  let liItems = document.getElementsByTagName("li");

  Array.from(liItems).forEach((item) => {
    let todoName = item.firstChild.textContent;

    console.log(todoName.toLowerCase().indexOf(searchText));
    if (todoName.toLowerCase().indexOf(searchText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
