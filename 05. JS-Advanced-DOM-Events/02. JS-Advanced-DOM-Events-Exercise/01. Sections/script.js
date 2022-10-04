function create(words) {
  let content = document.getElementById("content");

  for (let word of words) {
    let newDiv = document.createElement("div");
    content.appendChild(newDiv);
    let newP = document.createElement("p");
    newDiv.appendChild(newP);
    newP.textContent = word;
    newP.style.display = "none";
    console.log(newP);
    newDiv.addEventListener("click", function (event) {
      newP.style.display = "block";
    });
  }
}
