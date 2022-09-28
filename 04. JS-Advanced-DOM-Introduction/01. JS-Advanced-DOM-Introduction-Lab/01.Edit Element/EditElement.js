function editElement(ref, match, replace) {
  ref.innerText = ref.innerText.split(match).join(replace);
}

const ref = document.getElementById("e1");
result(ref, "%page%", "site");
