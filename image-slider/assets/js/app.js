const container = document.querySelector(".container");
const btnPrev = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");
const img = document.querySelector(".img");
const image = ["image01.jpg", "image02.jpg", "image03.jpg", "image04.jpg"];
// img.setAttribute("src", "../assets/images/image02.jpg");
let index = 0;

const setImage = () => {
  img.setAttribute("src", `../assets/images/${image[index]}`);
};

callIndex();
btnNext.addEventListener("click", (e) => {
  index++;
  setImage();
});

btnPrev.addEventListener("click", (e) => {
  index--;
  setImage();
});
