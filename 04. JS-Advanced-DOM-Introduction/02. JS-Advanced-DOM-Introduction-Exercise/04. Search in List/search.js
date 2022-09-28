function search() {
  let towns = document.querySelectorAll("#towns li");
  let searchText = document.getElementById("searchText");
  let result = document.getElementById("result");
  let matchCount = 0;
  for (let currTown of towns) {
    if (currTown.textContent.includes(searchText.value)) {
      currTown.style.textDecoration = "underline";
      currTown.style.fontWeight = "bold";
      matchCount++;
    }
  }

  result.innerText = `${matchCount} matches found`;
}
