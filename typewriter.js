"use strict";
window.addEventListener("DOMContentLoaded", init);

const dest = document.querySelector("#typewriter");
let text = document.querySelector("#typewriter").textContent;
let counter;

function init() {
  console.log("init");
  counter = 0;
  dest.textContent = "";
  loop();
}
function loop() {
  console.log("loop");
  if (text.length > counter) {
    //find text from 0 to counter with substring
    counter++;
    let textLength = text.substring(0, counter);
    dest.textContent = textLength;

    var lastChar = textLength[textLength.length - 1];
    console.log(lastChar);

    if (lastChar == " ") {
      document.querySelector("#typespace").play();
    } else {
      document.querySelector("#typekey1").play();
    }
    console.log(counter);
    console.log(textLength);
    setTimeout(loop, 400);
  }
}
