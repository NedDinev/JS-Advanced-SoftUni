function getArticleGenerator(input) {
  return function () {
    if (input.length != 0) {
      let content = document.getElementById("content");
      let newArticle = document.createElement("article");
      newArticle.innerText = input.shift();

      content.appendChild(newArticle);
    }
  };
}
