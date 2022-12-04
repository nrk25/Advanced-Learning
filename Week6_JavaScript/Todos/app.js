const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const htm = `<li class="list-group-item text-light d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa-regular fa-trash-can delete"></i>
    </li>`;
  list.innerHTML += htm;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const todo = addForm.add.value.trim();
  console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const searchTerm = (term) => {
  //console.log(Array.from(list.children).map((todo) => todo.textContent));
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  searchTerm(term);
});
