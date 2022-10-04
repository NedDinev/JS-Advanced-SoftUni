function addItem() {
  let text = document.getElementById("newItemText");
  let value = document.getElementById("newItemValue");
  let addBtn = document.querySelector(`input[value="Add"]`);

  let menu = document.getElementById("menu");
  let newOption = document.createElement("option");
  newOption.textContent = text.value;
  newOption.value = value.value;
  menu.appendChild(newOption);
  text.value = "";
  value.value = "";
}
