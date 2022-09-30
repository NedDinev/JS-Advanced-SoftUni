function deleteByEmail() {
  let input = document.querySelector("label input").value;
  let cells = document.querySelectorAll("#customers tbody tr");
  let result = document.getElementById("result");

  for (let cell of cells) {
    if (cell.textContent.includes(input)) {
      cell.remove();
      result.innerText = "Deleted.";
    } else {
      result.innerText = "Not found.";
    }
  }
}
