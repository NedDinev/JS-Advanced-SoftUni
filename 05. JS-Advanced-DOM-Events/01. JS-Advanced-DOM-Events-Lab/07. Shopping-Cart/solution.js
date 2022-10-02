function solve() {
  let shoppingCart = document.getElementsByClassName("shopping-cart")[0];
  let output = document.getElementsByTagName("textarea")[0];

  let productsInCart = {};
  shoppingCart.addEventListener("click", function (event) {
    if (event.target.className === "add-product") {
      let productTitle =
        event.target.parentElement.parentElement.getElementsByClassName(
          "product-title"
        )[0].textContent;
      let productPrice =
        event.target.parentElement.parentElement.getElementsByClassName(
          "product-line-price"
        )[0].textContent;

      output.textContent += `Added ${productTitle} for ${productPrice} to the cart.\n`;
      if (productsInCart.hasOwnProperty(productTitle)) {
        productsInCart[productTitle] += Number(productPrice);
      } else {
        productsInCart[productTitle] = Number(productPrice);
      }
    }
    let list = [];
    let sum = 0;
    for (let [key, value] of Object.entries(productsInCart)) {
      list.push(key);
      sum += Number(value);
    }
    if (event.target.className === "checkout") {
      let allBtns = event.target.parentElement.getElementsByTagName("button");

      for (let btn of allBtns) {
        btn.setAttribute("disabled", "");
      }
      output.textContent += `You bought ${list.join(", ")} for ${sum.toFixed(
        2
      )}.`;
    }
  });
}
