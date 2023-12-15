console.log("its working");

const thumbnailButton = document.querySelectorAll(".imageThumbnails img");
// console.log(thumbnailButton);
const imageThing = document.getElementById("imageDisplayed");
// console.log(imageThing);
const audio = document.querySelector("audio"); //Only one

thumbnailButton.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    displayImage(thumb);
  });
  thumb.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
      displayImage(thumb);
    }
  })
});

function displayImage(thumb) {
  imageThing.srcset = thumb.srcset;
  imageThing.src = thumb.src;
  imageThing.alt = thumb.alt;
  document.getElementById('announcer').textContent = thumb.alt;
  imageThing.parentElement.querySelector('.mainDesc').innerHTML = thumb.parentElement.querySelector('.imageDesc').innerHTML;
  if(thumb.alt === "This is a very dangerous cow. You should be afraid of it.") {
    audio.play();
  }
}