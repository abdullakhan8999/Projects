const body = document.body;
const images = document.querySelectorAll(".slide");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let imgIndex = 0;

//event
rightArrow.addEventListener("click", nxtImg);
leftArrow.addEventListener("click", perImg);

//fun
function nxtImg() {
  imgIndex++;
  if (imgIndex > images.length - 1) {
    imgIndex = 0;
  }

  setActiveImg();
}

function setActiveImg() {
  images.forEach((image) => {
    console.log(image);
  });
}

function perImg() {}
