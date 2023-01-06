const text = document.getElementById("text");

const speedElement = document.getElementById("speed");

const TEXT = "I am Javascript User";

let speed = 500 / speedElement.value;
let index = 1;
speedElement.addEventListener("input", (e) => {
  speed = 500 / e.target.value;
});

function automaticWriter() {
  text.innerText = TEXT.slice(0, index);

  index++;
  if (index > TEXT.length) {
    index = 1;
  }

  setTimeout(automaticWriter, speed);
}
automaticWriter();
