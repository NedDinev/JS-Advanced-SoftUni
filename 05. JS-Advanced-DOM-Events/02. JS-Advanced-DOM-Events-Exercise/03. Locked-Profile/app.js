function lockedProfile() {
  let allButtons = document.querySelectorAll("#main .profile button");

  for (let btn of allButtons) {
    btn.addEventListener("click", function (event) {
      let showMoreBtn = event.target;
      let unlock = event.target.parentElement.querySelector(
        `input[value="unlock"]`
      );
      let hiddenFields =
        event.target.parentElement.getElementsByTagName("div")[0];

      if (unlock.checked) {
        if (showMoreBtn.textContent === "Show more") {
          hiddenFields.style.display = "block";
          showMoreBtn.textContent = "Hide it";
        } else {
          hiddenFields.style.display = "none";
          showMoreBtn.textContent = "Show more";
        }
      }
    });
  }
}
