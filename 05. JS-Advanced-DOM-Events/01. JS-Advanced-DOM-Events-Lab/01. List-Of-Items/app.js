function addItem() {
  let input = document.getElementById("newItemText").value;
  let items = document.getElementById("items");
  let newItem = document.createElement("li");

  newItem.innerText = input;
  items.appendChild(newItem);
}
