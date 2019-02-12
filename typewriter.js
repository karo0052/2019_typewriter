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
    //counter +1
    counter++;
    //find text from 0 to counter with substring
    let textLength = text.substring(0, counter);
    //insert in HTML
    dest.textContent = textLength;
    //find the last character in the text
    var lastChar = textLength[textLength.length - 1];
    console.log(lastChar);
    //if the last character is space, then play this sound
    if (lastChar == " ") {
      document.querySelector("#typespace").play();
      //else play this sound
    } else {
      document.querySelector("#typekey1").play();
    }
    console.log(counter);
    console.log(textLength);
    //set a delay at 400ms
    setTimeout(loop, 400);
  }
}
