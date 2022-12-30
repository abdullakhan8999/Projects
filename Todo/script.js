// variable
const search = getElementID("listSearch");
// const addTask = getElementID("addTask");
const addform = getElementID("addform");
// EventListener

addform.addEventListener("submit", addTodo);

// function
function getElementID(id) {
  return document.getElementById(id);
}
function getElementClass(Class) {
  return document.getElementsByClassName(Class);
}

function addTodo() {
  alert("Clicked add");
}
