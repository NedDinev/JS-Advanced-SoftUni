function solve() {
  let addText = document.getElementsByTagName("textarea")[0];
  let generateBtn = document.getElementsByTagName("button")[0];

  let output = document.getElementsByTagName("textarea")[1];
  let buyBtn = document.getElementsByTagName("button")[1];

  let catalog = document.getElementsByTagName("tbody")[0];

  let inputData = {};

  generateBtn.addEventListener("click", function () {
    inputData = JSON.parse(addText.value);
    for (let newFurniture of inputData) {
      let tr = document.createElement("tr");
      catalog.appendChild(tr);
      let tdImg = document.createElement("td");
      tr.appendChild(tdImg);
      let img = document.createElement("img");
      img.src = newFurniture.img;
      tdImg.appendChild(img);
      let tdName = document.createElement("td");
      tr.appendChild(tdName);
      let name = document.createElement("p");
      name.textContent = newFurniture.name;
      name.classList.add("name");
      tdName.appendChild(name);
      let tdPrice = document.createElement("td");
      tr.appendChild(tdPrice);
      let price = document.createElement("p");
      price.textContent = newFurniture.price;
      price.classList.add("price");
      tdPrice.appendChild(price);
      let tdDecoration = document.createElement("td");
      tr.appendChild(tdDecoration);
      let decoration = document.createElement("p");
      decoration.textContent = newFurniture.decFactor;
      tdDecoration.appendChild(decoration);
      decoration.classList.add("decoration");
      let tdMark = document.createElement("td");
      tr.appendChild(tdMark);
      let mark = document.createElement("input");
      mark.type = "checkbox";
      tdMark.appendChild(mark);
    }
    console.log(inputData);
  });

  buyBtn.addEventListener("click", function () {
    let checkedFurniture = document.querySelectorAll("td input");
    for (let furniture of checkedFurniture) {
      if (furniture.checked) {
        let bought = [];
        let total = 0;
        let avgDecor = 0;
        let allNames = document.querySelectorAll(".name");
        let allPrices = document.querySelectorAll(".price");
        let allDecor = document.querySelectorAll(".decoration");
        for (let currName of allNames) {
          bought.push(currName.textContent);
        }
        for (let currPrice of allPrices) {
          total += Number(currPrice.textContent);
        }
        let count = 0;
        for (let currDecor of allDecor) {
          count++;
          avgDecor += Number(currDecor.textContent);
        }
        avgDecor = avgDecor / count;
        output.value = `Bought furniture: ${bought.join(
          ", "
        )}\nTotal price: ${total.toFixed(
          2
        )}\nAverage decoration factor: ${avgDecor}`;
      }
    }
  });
}
