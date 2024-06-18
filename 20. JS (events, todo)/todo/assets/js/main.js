const todoInp = document.querySelector("#todo-input");
const addBtn = document.querySelector(".add-btn");
const errorMsg = document.querySelector(".error-message");
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const clearBtn = document.querySelector(".clear-btn");
const todoCount = document.querySelector("#count");
const searchInp = document.querySelector("#search");
const sortByDateSelect = document.querySelector("#sort-by-date");
const sortByNameSelect = document.querySelector("#sort-by-name");

//events
todoInp.addEventListener("keyup", function (e) {
  const check = checkValidation(e.target.value);
  if (e.keyCode === 13) {
    errorMsg.classList.replace("d-block", "d-none");
    addBtn.style.backgroundColor = "#8E48E6";
    addBtn.removeAttribute("disabled");
  }
});
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo(todoInp.value);
});
clearBtn.addEventListener("click", () => {
  clearAll();
});
searchInp.addEventListener("keyup", function () {
  search(this.value);
});
sortByDateSelect.addEventListener("change", function () {
  sortByDate(this.value);
});
sortByNameSelect.addEventListener('change',function(){
  sortByDate(this.value);
})

//class
class TodoItem {
  isCompleted;
  static id = 1;
  //   static todos = [];
  constructor(title) {
    this.id = TodoItem.id++;
    this.title = title;
    this.isCompleted = false;
    this.createdAt = new Date();
  }
  //   set todos(newArr){
  //     renderToDoList(newArr);
  //   }
}
//array
let todos = [];

//functions
function checkValidation(value) {
  if (value.trim().length === 0) {
    errorMsg.classList.replace("d-none", "d-block");
    addBtn.style.backgroundColor = "indianred";
    addBtn.setAttribute("disabled", true);
    return false;
  } else {
    errorMsg.classList.replace("d-block", "d-none");
    addBtn.style.backgroundColor = "#8E48E6";
    addBtn.removeAttribute("disabled");
    return true;
  }
}
function addToDo(title) {
  if (checkValidation(todoInp.value)) {
    const newToDoItem = new TodoItem(title);
    todos.push(newToDoItem);
    resetForm();
    renderToDoList(todos);
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "ToDo Item Added Successfully",
      showConfirmButton: false,
      timer: 700,
    });
  } else {
    Swal.fire({
      position: "bottom-end",
      icon: "error",
      title: "Validation Failed",
      showConfirmButton: false,
      timer: 700,
    });
  }
}
function deleteTodo(id) {
  const idx = todos.findIndex((x) => x.id == id);
  todos.splice(idx, 1);
  renderToDoList(todos);
}
function resetForm() {
  todoInp.value = "";
}
function clearAll() {
  Swal.fire({
    title: "Are you sure to delete all?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      todos = [];
      renderToDoList(todos);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}
function markAsDone(id) {
  const found = todos.find((x) => x.id == id);
  found.isCompleted = !found.isCompleted;
  renderToDoList(todos);
}
function renderToDoList(arr) {
  todoList.innerHTML = "";
  arr.forEach((todoItem) => {
    todoList.innerHTML += `
        <li class="list-item d-flex justify-content-between mb-2">
        <span style='text-decoration: ${
          todoItem.isCompleted ? "line-through" : "none"
        }' class="todo-title">${todoItem.title} | <i>${moment(
      todoItem.createdAt
    ).format("MMM Do YY, h:mm a")}</i></span>
        <div class="buttons">
            <button data-id="${
              todoItem.id
            }" class="btn btn-outline-primary mark-btn"><i class="fa-solid fa-check"></i></button>
            <button data-id="${
              todoItem.id
            }" class="btn btn-outline-danger delete-btn"><i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
    </li>
        `;
  });
  //render size
  calcToDo();
  //delete buttons
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const id = this.getAttribute("data-id");
          deleteTodo(id);
          //this.closest('li').remove();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });

  //mark buttons
  const markBtns = document.querySelectorAll(".mark-btn");
  markBtns.forEach((markBtn) => {
    markBtn.addEventListener("click", function () {
      markAsDone(this.getAttribute("data-id"));
    });
  });
}
function calcToDo() {
  const size = todos.filter((x) => !x.isCompleted);
  todoCount.textContent = size.length;
  if (size.length === 0) {
    todoCount.textContent = "no";
  }
}
function search(value) {
  const searchedTodos = todos.filter((x) =>
    x.title.trim().toLowerCase().includes(value.trim().toLowerCase())
  );
  renderToDoList(searchedTodos);
}
function sortByDate(value) {
  if (value == "a-z") {
    let temp = [...todos];
    temp = temp.sort((x, y) => x.title.localeCompare(y.title));
    renderToDoList(temp);
  } else if (value == "z-a") {
    let temp = [...todos];
    temp = temp.sort((x, y) => y.title.localeCompare(x.title));
    renderToDoList(temp);
  }
}
