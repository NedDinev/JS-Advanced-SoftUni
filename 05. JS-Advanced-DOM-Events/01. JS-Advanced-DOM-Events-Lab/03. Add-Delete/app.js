function addItem() {
  let items = document.getElementById("items");
  let newItemText = document.getElementById("newItemText").value;
  let newItem = document.createElement("li");

  let deleteLink = document.createElement("a");

  newItem.innerText = newItemText;
  items.appendChild(newItem);
  deleteLink.setAttribute("href", "#");
  deleteLink.innerText = "[Delete]";
  newItem.appendChild(deleteLink);

  deleteLink.addEventListener("click", function () {
    newItem.remove();
  });
}
