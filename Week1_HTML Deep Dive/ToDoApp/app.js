let nItem = document.getElementById("new-item");
let appendItem = document.getElementById("todo-container");

function addItem() {
    if (nItem.value ==="") {
        return;
    }
    let liItem = document.createElement("li");
    liItem.innerHTML = nItem.value;
    appendItem.appendChild(liItem);
    nItem.value = "";
}