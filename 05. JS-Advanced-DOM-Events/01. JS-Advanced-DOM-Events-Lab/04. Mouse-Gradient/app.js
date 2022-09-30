function attachGradientEvents() {
  let gradientBox = document.getElementById("gradient-box");
  let result = document.getElementById("result");
  gradientBox.addEventListener("mousemove", (event) => {
    let power = event.offsetX / (event.target.clientWidth - 1);
    power = Math.trunc(power * 100);
    result.textContent = power + "%";
  });
}
