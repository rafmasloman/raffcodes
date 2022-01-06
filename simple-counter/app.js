const container = document.querySelector(".container");
let number = document.querySelector(".number");
let count = 0;

const updateNumber = () => {
  number.innerHTML = count;
};

updateNumber();

container.addEventListener("click", (e) => {
  if (e.target.className.baseVal == "plus") {
    count++;
    console.log(e.target);
    updateNumber();
  } else if (e.target.className.baseVal == "minus" && count > 0) {
    count--;
    updateNumber();
  } else if (e.target.className == "btn-reset") {
    count = 0;
    updateNumber();
  }
});
