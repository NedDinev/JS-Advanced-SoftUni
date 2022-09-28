function extractText() {
  let li = document.getElementsByTagName("li");
  let result = document.getElementById("result");
  let text = "";
  for (let currLi of li) {
    text += currLi.textContent + "\n";
  }
  result.innerHTML = text;
}
