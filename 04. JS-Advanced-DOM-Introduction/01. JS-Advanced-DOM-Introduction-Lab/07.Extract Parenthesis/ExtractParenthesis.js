function extract(content) {
  let target = document.getElementById(content);
  target = target.textContent;
  let regex = /\(([^()]*)\)/gm;
  let found = target.match(regex);
  let allMatches = [];

  for (let el of found) {
    allMatches.push(el.slice(1, el.length - 1));
  }

  allMatches = allMatches.join(";");

  return allMatches;
}
