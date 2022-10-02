function focused() {
  let inputFields = document.querySelectorAll("div input");

  for (let field of inputFields) {
    field.addEventListener("focus", (event) => {
      let target = event.target;
      let parent = target.parentElement;
      parent.classList.add("focused");
    });
    field.addEventListener("blur", (event) => {
      let target = event.target;
      let parent = target.parentElement;
      parent.classList.remove("focused");
    });
  }
}
