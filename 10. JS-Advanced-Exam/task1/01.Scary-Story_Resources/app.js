window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("form-btn");

  let storyArr = [];
  let mainDiv = document.getElementById("main");
  publishBtn.addEventListener("click", publish);

  function publish(event) {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let age = document.getElementById("age");
    let storyTitle = document.getElementById("story-title");
    let genres = document.getElementById("genre");

    let storyText = document.getElementById("story");

    let previewList = document.getElementById("preview-list");

    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      age.value !== "" &&
      storyTitle.value !== "" &&
      storyText.value !== ""
    ) {
      let newLi = document.createElement("li");
      newLi.classList.add("story-info");
      previewList.appendChild(newLi);
      storyArr.push(firstName.value);
      storyArr.push(lastName.value);
      storyArr.push(age.value);
      storyArr.push(storyTitle.value);
      storyArr.push(storyText.value);
      newLi.innerHTML = `<article>
<h4>Name: ${firstName.value} ${lastName.value}</h4>
<p>Age: ${age.value}</p>
<p>Title: ${storyTitle.value}</p>
<p>Genre: ${genres.value}</p>
<p>${storyText.value}</p>
</article>
`;

      firstName.value = "";
      lastName.value = "";
      age.value = "";
      storyTitle.value = "";
      storyText.value = "";
      event.target.disabled = true;

      let saveBtn = document.createElement("button");
      saveBtn.classList.add("save-btn");
      saveBtn.innerText = "Save Story";
      newLi.appendChild(saveBtn);
      let editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.innerText = "Edit Story";
      newLi.appendChild(editBtn);
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.innerText = "Delete Story";
      newLi.appendChild(deleteBtn);

      editBtn.addEventListener("click", editStory);
      deleteBtn.addEventListener("click", deleteStory);
      saveBtn.addEventListener("click", saveStory);
    }
    function editStory(event) {
      firstName.value = storyArr[0];
      lastName.value = storyArr[1];
      age.value = storyArr[2];
      storyTitle.value = storyArr[3];
      storyText.value = storyArr[4];
      publishBtn.disabled = false;
      event.target.parentNode.remove();
    }
    function deleteStory(event) {
      publishBtn.disabled = false;
      event.target.parentNode.remove();
    }
    function saveStory() {
      mainDiv.innerHTML = "";
      let endMsg = document.createElement("h1");
      endMsg.innerText = "Your scary story is saved!";
      mainDiv.appendChild(endMsg);
    }
  }
}
