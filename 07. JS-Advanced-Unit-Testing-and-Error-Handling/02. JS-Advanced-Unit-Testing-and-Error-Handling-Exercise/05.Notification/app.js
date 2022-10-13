function notify(message) {
  let notification = document.getElementById("notification");

  if (notification.style.display == "block") {
    notification.innerText = "";
    notification.style.display = "none";
  } else {
    notification.innerText = message;
    notification.style.display = "block";
  }

  notification.addEventListener("click", function (event) {
    event.target.style.display = "none";
  });
}
