function solve() {
  let text = document.getElementById("text");
  let namingConvention = document.getElementById("naming-convention");
  let result = document.getElementById("result");

  text = text.value;
  namingConvention = namingConvention.value;

  text = text.split(" ");
  let transformed = [];

  for (let word of text) {
    word = word.toLowerCase();
    transformed.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  text = transformed.join("");
  if (namingConvention == "Camel Case") {
    text = text.charAt(0).toLowerCase() + text.slice(1);

    result.textContent = text;
  } else if (namingConvention == "Pascal Case") {
    result.textContent = text;
  } else {
    result.textContent = "Error!";
  }
}
