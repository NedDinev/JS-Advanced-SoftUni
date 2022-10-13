function validate() {
  let emailPattern = /[a-z]{1,}\@[a-z]{1,}\.[a-z]{1,}/gm;
  let emailInput = document.getElementById("email");

  emailInput.addEventListener("change", function (event) {
    let input = event.target;
    if (emailPattern.test(input.value)) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  });
}
