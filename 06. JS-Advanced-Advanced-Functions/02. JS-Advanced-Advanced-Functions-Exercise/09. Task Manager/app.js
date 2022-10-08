function solve() {
  let task = document.getElementById("task");
  let description = document.getElementById("description");
  let date = document.getElementById("date");
  let addBtn = document.getElementById("add");
  let form = document.querySelector("form");
  form.setAttribute("onsubmit", "return false;");

  let openSection = document.querySelectorAll("section :nth-child(2)")[2];
  let inProgressSection = document.getElementById("in-progress");
  let complete = document.querySelectorAll(".wrapper :nth-child(4)")[1];
  complete = complete.querySelectorAll("div")[1];

  addBtn.addEventListener("click", add);
  let startBtn;

  function add() {
    if (task.value != "" && description.value != "" && date.value != "") {
      let newArticle = document.createElement("article");
      newArticle.innerHTML = `<h3>${task.value}</h3>
    <p>Description: ${description.value}</p>
    <p>Due Date: ${date.value}</p>
    <div class="flex">
    <button class="green">Start</button>
    <button class="red">Delete</button>
    </div>`;
      openSection.appendChild(newArticle);
      task.value = "";
      description.value = "";
      date.value = "";
      startBtn = document.querySelectorAll("button[class='green']");
      newArticle
        .getElementsByClassName("red")[0]
        .addEventListener("click", del);
      for (let currBtn of startBtn) {
        currBtn.addEventListener("click", start);
      }
    }
    function start(event) {
      let currArticle = event.target.parentElement.parentElement;
      inProgressSection.appendChild(currArticle);
      currArticle.getElementsByTagName("button")[1].remove();

      currArticle.getElementsByTagName("button")[0].remove();
      let flex = currArticle.getElementsByClassName("flex")[0];

      flex.innerHTML += `<button class ="red">Delete</button>
        <button class ="orange">Finish</button>`;
      currArticle
        .getElementsByClassName("red")[0]
        .addEventListener("click", del);
      currArticle
        .getElementsByClassName("orange")[0]
        .addEventListener("click", finish);
    }
  }

  function del(event) {
    event.target.parentElement.parentElement.remove();
  }
  function finish(event) {
    complete.appendChild(event.target.parentElement.parentElement);

    complete.getElementsByClassName("flex")[0].remove();
  }
}
