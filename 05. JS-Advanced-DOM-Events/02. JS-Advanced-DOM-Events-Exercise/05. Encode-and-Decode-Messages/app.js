function encodeAndDecodeMessages() {
  let encodeBtn = document.querySelectorAll("button")[0];
  let decodeBtn = document.querySelectorAll("button")[1];
  let msg = document.getElementsByTagName("textarea")[0];
  let receivedMsg = document.getElementsByTagName("textarea")[1];

  encodeBtn.addEventListener("click", function () {
    if (msg.value != "") {
      let encodedMsg = "";
      for (let letter of msg.value) {
        let letterToAscii = letter.charCodeAt(0) + 1;

        encodedMsg += String.fromCharCode(letterToAscii);
      }
      receivedMsg.value = encodedMsg;
      isBool = true;
      msg.value = "";
    }
  });

  decodeBtn.addEventListener("click", function () {
    let decodedMsg = "";
    for (let letter of receivedMsg.value) {
      let letterToAscii = letter.charCodeAt(0) - 1;

      decodedMsg += String.fromCharCode(letterToAscii);
    }
    receivedMsg.value = decodedMsg;
  });
}
