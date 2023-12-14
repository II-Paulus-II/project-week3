console.log("its working");

const thumbnailButton = document.querySelectorAll(".imageThumbnails img");
console.log(thumbnailButton);
const imageThing = document.getElementById("imageDisplayed");
console.log(imageThing);

thumbnailButton.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    imageThing.srcset = thumb.srcset;
    imageThing.src = thumb.src;
    imageThing.alt = thumb.alt;
    imageThing.parentElement.querySelector('.mainDesc').innerHTML = thumb.parentElement.querySelector('.imageDesc').innerHTML;
  });
});
