function validate() {
  let pattern = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  let emailInput = document.getElementById("email");

  emailInput.addEventListener("change", (event) => {
    if (!pattern.test(event.currentTarget.value)) {
      event.currentTarget.classList.add("error");
    } else {
      event.currentTarget.classList.remove("error");
    }
  });
}
