function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchField = document.getElementById("searchField");
    let searchButton = document.getElementById("searchBtn");

    let tableRow = document.querySelectorAll("tbody tr");

    for (let data of tableRow) {
      if (data.textContent.includes(searchField.value)) {
        data.classList.add("select");
      }
    }
  }
}
