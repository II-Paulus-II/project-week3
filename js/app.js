console.log("its working");

/* ----- Basic Page data and elements ----- */

const thumbnailButton = document.querySelectorAll(".imageThumbnails img");
const imagesArrayLength = thumbnailButton.length;
// console.log(imagesArrayLength);
// console.log(thumbnailButton);
const imageThing = document.getElementById("imageDisplayed");
// console.log(imageThing);
const audio = document.querySelector("audio"); //Only one
const getNextImgBtn = document.getElementById("next");
const getPrevImgBtn = document.getElementById("previous");

let currentImageIndex = 0;

/* ----- Basic Page Functions ----- */

function displayImage(thumb, index) {
  imageThing.srcset = thumb.srcset;
  imageThing.src = thumb.src;
  imageThing.alt = thumb.alt;
  document.getElementById('announcer').textContent = thumb.alt;
  imageThing.parentElement.querySelector('.mainDesc').innerHTML = thumb.parentElement.querySelector('.imageDesc').innerHTML;
  if(thumb.alt === "This is a very dangerous cow. You should be afraid of it.") {
    audio.play();
  }
  thumb.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
  });
  // console.log(index);
  currentImageIndex = index;
}

function getNextImage(value) {
  let newIndex = currentImageIndex + value;
  // console.log("new index is", newIndex);
  let nextimage = thumbnailButton[newIndex];
  if (newIndex >= 0 && newIndex < imagesArrayLength) {
    displayImage(nextimage, newIndex);
  }
}

function arrowKeyFunction(event) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      getNextImage(1);
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      getNextImage(-1);
  }
}

/* ----- Event Listeners ----- */

thumbnailButton.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    displayImage(thumb, index);
  });
  thumb.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
      displayImage(thumb, index);
    }
  })
});

getNextImgBtn.addEventListener("click", function () {
  getNextImage(1);
});

getPrevImgBtn.addEventListener("click", function () {
  getNextImage(-1);
});

window.addEventListener('keydown', arrowKeyFunction);