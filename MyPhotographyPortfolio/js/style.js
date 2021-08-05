const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const img = document.querySelectorAll(".product img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

img.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
    original.src= `./img/${originalSrc}`;
    console.log(originalSrc)
  });
});

close.addEventListener("click", (e) => {
  if(e.target.classList.contains("close")){
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

